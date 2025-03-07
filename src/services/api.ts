import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  authRequestInterceptor,
  authRequestErrorInterceptor,
  errorResponseInterceptor,
  errorResponseErrorInterceptor,
} from '../interceptors';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  [key: string]: any;
}

interface UploadProgressCallback {
  (progress: number): void;
}

class ApiService {
  private api: AxiosInstance;
  private static instance: ApiService;

  private constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private setupInterceptors(): void {
    // Request interceptors
    this.api.interceptors.request.use(
      authRequestInterceptor,
      authRequestErrorInterceptor
    );

    // Response interceptors
    this.api.interceptors.response.use(
      errorResponseInterceptor,
      errorResponseErrorInterceptor
    );
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.get(url, config);
    return response.data;
  }

  public async getPaginated<T>(
    url: string,
    params: PaginationParams = {},
    config?: AxiosRequestConfig
  ): Promise<PaginatedResponse<T>> {
    const response: AxiosResponse<PaginatedResponse<T>> = await this.api.get(url, {
      ...config,
      params: {
        page: params.page || 1,
        limit: params.limit || 10,
        sort: params.sort,
        order: params.order,
        ...params,
      },
    });
    return response.data;
  }

  public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.post(url, data, config);
    return response.data;
  }

  public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.put(url, data, config);
    return response.data;
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.api.delete(url, config);
    return response.data;
  }

  public async uploadFile(
    url: string,
    file: File,
    onProgress?: UploadProgressCallback,
    config?: AxiosRequestConfig
  ): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await this.api.post(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });

    return response.data;
  }

  public async downloadFile(url: string, filename: string, onProgress?: UploadProgressCallback): Promise<void> {
    const response = await this.api.get(url, {
      responseType: 'blob',
      onDownloadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });

    // Create a blob from the response data
    const blob = new Blob([response.data], { 
      type: response.headers['content-type'] 
    });

    // Create a temporary URL for the blob
    const downloadUrl = window.URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  }

  public async uploadMultipleFiles(
    url: string,
    files: File[],
    onProgress?: UploadProgressCallback,
    config?: AxiosRequestConfig
  ): Promise<any> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });

    const response = await this.api.post(url, formData, {
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onProgress(percentCompleted);
        }
      },
    });

    return response.data;
  }
}

export const apiService = ApiService.getInstance(); 
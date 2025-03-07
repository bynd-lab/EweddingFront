# E-Wedding Frontend

A modern React application for creating and managing online wedding invitations with multi-language support.

## Features

- Modern React with TypeScript
- Multi-language support (AZ, RU, EN)
- Material-UI components
- SASS styling
- Responsive design
- Generic API service with interceptors
- Toast notifications
- Language selector with country flags

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ewedding-front
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_URL=your_api_url_here
```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── services/      # API services
├── store/         # Redux store
├── styles/        # SASS styles
├── translations/  # i18n translation files
├── utils/         # Utility functions
├── hooks/         # Custom hooks
├── interceptors/  # API interceptors
└── types/         # TypeScript type definitions
```

## Technologies Used

- React
- TypeScript
- Vite
- Material-UI
- SASS
- React Router
- i18next
- Axios
- React Toastify
- Redux Toolkit

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

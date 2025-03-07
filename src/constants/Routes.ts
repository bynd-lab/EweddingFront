export const ROUTES = {
    HOME: '/',
    CREATE: '/create',
    TEMPLATES: '/templates',
    LOGIN: '/login',
    REGISTER: '/register',
  } as const;
  
  export type RouteKeys = keyof typeof ROUTES;
  export type RouteValues = typeof ROUTES[RouteKeys];
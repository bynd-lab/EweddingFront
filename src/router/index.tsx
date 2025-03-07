import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import LandingPage from '../pages/LandingPage';

export const ROUTES = {
  HOME: '/',
  CREATE: '/create',
  TEMPLATES: '/templates',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = typeof ROUTES[RouteKeys];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: ROUTES.CREATE,
        element: <div>Create Page</div>, // TODO: Replace with actual component
      },
      {
        path: ROUTES.TEMPLATES,
        element: <div>Templates Page</div>, // TODO: Replace with actual component
      },
      {
        path: ROUTES.LOGIN,
        element: <div>Login Page</div>, // TODO: Replace with actual component
      },
      {
        path: ROUTES.REGISTER,
        element: <div>Register Page</div>, // TODO: Replace with actual component
      },
    ],
  },
]); 
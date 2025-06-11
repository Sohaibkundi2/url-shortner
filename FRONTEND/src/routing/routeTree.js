import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import RootLayout from '../App';
import { HomePageRoute } from './homepage.route';
import { authRoute } from './auth.route';
import { dashboardRoute } from './dashboard.route';
import { aboutRoute } from './about.route';
import { signupRoute } from './signup.route';

export const rootRoute = createRootRoute({
  
  component: RootLayout
})

export const routeTree = rootRoute.addChildren([
  HomePageRoute, 
  authRoute,
  dashboardRoute,
  aboutRoute,
  signupRoute
])


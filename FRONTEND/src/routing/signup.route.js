import { createRoute } from '@tanstack/react-router'
import signupPage from '../pages/signupPage'
import { rootRoute } from './routeTree'



export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: signupPage,
})

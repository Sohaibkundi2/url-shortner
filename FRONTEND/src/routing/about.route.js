

import { createRoute } from '@tanstack/react-router'
import AboutPage from '../pages/AboutPage'
import { rootRoute } from './routeTree'
export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})
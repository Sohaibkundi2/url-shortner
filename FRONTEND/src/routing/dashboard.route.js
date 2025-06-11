

import { createRoute } from '@tanstack/react-router'
import DashboardPage from '../pages/DashboardPage'
import { rootRoute } from './routeTree.js'
import { checkAuth } from '../utils/helper';



export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: checkAuth,
  component: DashboardPage,
})

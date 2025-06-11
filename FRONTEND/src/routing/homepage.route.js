
import { createRoute } from '@tanstack/react-router'
import HomePage from '../pages/HomePage'
import { rootRoute } from './routeTree.js'

export const HomePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})
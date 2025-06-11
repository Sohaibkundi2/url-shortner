import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routeTree } from './routing/routeTree'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'
import { Provider } from 'react-redux'
import store from './store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // <-- import QueryClientProvider

const queryClient = new QueryClient()

const router = createRouter({ 
  routeTree,
  context:{
    queryClient,
    store
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
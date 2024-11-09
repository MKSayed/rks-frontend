import { createBrowserRouter } from 'react-router-dom'
import MarketingPage from '@/features/marketing/page.tsx'
import Login from '@/features/auth/pages/login.tsx'

export const router = createBrowserRouter([
  { path: '/', element: <MarketingPage /> },
  { path: '/auth/login', element: <Login /> },
])

export default router

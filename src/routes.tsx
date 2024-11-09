import { createBrowserRouter } from 'react-router-dom'
import MarketingPage from '@/features/marketing/page.tsx'
import Login from '@/features/auth/pages/login.tsx'
import Users from '@/features/users/pages/users-management.tsx'
import { DashboardLayout } from '@/containers/dashboard-layout.tsx'

export const router = createBrowserRouter([
  { path: '/', element: <MarketingPage /> },
  { path: '/auth/login', element: <Login /> },
  { path: '/dashboard', element: <DashboardLayout />, children: [{ path: 'users/manage', element: <Users /> }] },
])

export default router

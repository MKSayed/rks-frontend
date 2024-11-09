import { createBrowserRouter } from 'react-router-dom'
import Page from '@/features/marketing/page.tsx'

export const router = createBrowserRouter([{ path: '/', element: <Page /> }])

export default router

import '@/app.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes.tsx'
import { queryClient } from '@/api/api.ts'

export default function App() {
  return (
    <main className='font-geist'>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </main>
  )
}

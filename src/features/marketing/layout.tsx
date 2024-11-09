import { ReactNode } from 'react'
import { NavBar } from '@/features/marketing/components/navbar.tsx'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='selection:bg-[hsl(44,36%,50%,20%)]'>
      <NavBar />
      {children}
    </div>
  )
}

import { ReactNode } from 'react'
import { MarketingAuthNavbar } from '@/components/marketing-auth-navbar.tsx'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='selection:bg-[hsl(44,36%,50%,20%)]'>
      <MarketingAuthNavbar />
      {children}
    </div>
  )
}

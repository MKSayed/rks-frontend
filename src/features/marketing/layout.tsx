import { ReactNode } from 'react'
import { MarketingAuthNavbar } from '@/components/marketing-auth-navbar.tsx'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { AppSidebar } from '@/components/app-sidebar.tsx'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar.tsx'
import { useUserStore } from '@/stores/user.ts'

export function Layout({ children }: { children: ReactNode }) {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)
  const user = useUserStore(state => state.user)
  if (isSidebarOpen) toggleSidebar()
  return (
    <div className='selection:bg-[hsl(44,36%,50%,20%)]'>
      <MarketingAuthNavbar showSignin={!user}/>
      {user ?
      <SidebarProvider open={false}>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider> : children}
    </div>
  )
}

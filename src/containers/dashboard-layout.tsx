import { AppSidebar } from '@/components/app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { useSidebarStore } from '@/stores/sidebar.ts'
import { Outlet } from 'react-router-dom'

export function DashboardLayout() {
  const isSidebarOpen = useSidebarStore((state) => state.isOpen)
  return (
    <SidebarProvider open={isSidebarOpen}>
      <AppSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}

import * as React from 'react'
import { SidebarMenuItems } from '@/components/sidebar-menu-items.tsx'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { useSidebarStore } from '@/stores/sidebar.tsx'
import logo from '@/assets/rks.png'
import textLogo from '@/assets/rks-text.png'

const tempData = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarItems = useSidebarStore((state) => state.items)
  const isOpen = useSidebarStore((state) => state.isOpen)
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className={'pl-1'}>
          <img src={textLogo} alt={'RKS'} className={`transition-all duration-300 ${!isOpen ? 'w-0' : ''}`} />
          <img src={logo} alt={'RKS'} className={isOpen ? 'hidden' : ''} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuItems items={sidebarItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={tempData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

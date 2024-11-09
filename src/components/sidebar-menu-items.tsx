import { ChevronRight, type LucideIcon } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Link } from 'react-router-dom'
import { useSidebarStore } from '@/stores/sidebar.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'

export function SidebarMenuItems({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()
  const isSidebarOpen = useSidebarStore((state) => state.isOpen)
  if (!isMobile && !isSidebarOpen) {
    return (
      <SidebarGroup>
        {/*<SidebarGroupLabel>Rapid Kiosk System</SidebarGroupLabel>*/}
        <SidebarMenu>
          {items.map((item) => (
            <DropdownMenu key={item.title} defaultOpen={false}>
              <SidebarMenuItem>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    {item.items ? (
                      <span>{item.title}</span>
                    ) : (
                      <Link to={item.url}>
                        {' '}
                        <span>{item.title}</span>
                      </Link>
                    )}

                    {item.items && (
                      <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    )}
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                {item.items && (
                  <DropdownMenuContent
                    side={'right'}
                    align='start'
                    sideOffset={4}
                    className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-sidebar'
                  >
                    <DropdownMenuGroup>
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                )}
              </SidebarMenuItem>
            </DropdownMenu>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    )
  }

  return (
    <SidebarGroup>
      {/*<SidebarGroupLabel>Rapid Kiosk System</SidebarGroupLabel>*/}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={false} className='group/collapsible'>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  {item.items ? (
                    <span>{item.title}</span>
                  ) : (
                    <Link to={item.url}>
                      {' '}
                      <span>{item.title}</span>
                    </Link>
                  )}

                  {item.items && (
                    <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

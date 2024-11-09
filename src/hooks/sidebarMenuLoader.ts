import { useSidebarStore } from '@/stores/sidebar.ts'
import { getSidebarMenu } from '@/data/sidebar-menus.tsx'
import { type menuKey } from '@/data/sidebar-menus.tsx'

/**
 * @description This would be used in all pages to update the sidebar menu items by changing the menuKey only
 * Use it in case you need to change the sidebar menu items
 */

export default function useSidebarMenuLoader() {
  const setSidebarItems = useSidebarStore((store) => store.setItems)

  const loadSidebarMenu = ({ menuKey }: { menuKey: menuKey }) => {
    // Update the sidebar items in the store with the home sidebar menu
    setSidebarItems(getSidebarMenu({ menuKey: menuKey }))
  }
  return { loadSidebarMenu }
}

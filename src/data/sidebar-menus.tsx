import { SidebarItem } from '@/types/sidebarItem'
import { UserIcon } from 'lucide-react'

// Define a TypeScript type for possible menu keys
// Extend this type with additional keys as needed for other menus
export type menuKey = 'main'

// Function to retrieve the appropriate sidebar menu based on the current pathname and menu key
export function getSidebarMenu({
  menuKey, // The key identifying which menu to retrieve
}: {
  menuKey: menuKey
}): SidebarItem[] {
  // Determine which menu to return based on the `menuKey`
  switch (menuKey) {
    case 'main':
      return sidebarNavMain // Return the updated menu with active states
    default:
      // If the `menuKey` doesn't match any case, return an empty array
      return []
  }
}

// Define the menu items for the "Home" sidebar
const sidebarNavMain: SidebarItem[] = [
  {
    title: 'Users',
    icon: UserIcon,
    url: '.',
    items: [
      { title: 'Management', url: '/users/manage' },
      { title: 'Logs', url: 'users/logs' },
    ],
  },
]

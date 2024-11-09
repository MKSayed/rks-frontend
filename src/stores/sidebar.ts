import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { SidebarItem } from '@/types/sidebarItem'
import { getSidebarMenu } from '@/data/sidebar-menus.tsx'

type useSidebarStoreType = {
  isOpen: boolean
  toggleSidebar: () => void
  items: SidebarItem[]
  setItems: (items: SidebarItem[]) => void
}

export const useSidebarStore = create(
  persist<useSidebarStoreType>(
    (set, get) => ({
      isOpen: true,
      toggleSidebar: () => {
        set({ isOpen: !get().isOpen })
      },
      // Do not persist sidebar menu items because they contain lucid react icons which is not savable in session or local storage
      items: getSidebarMenu({ menuKey: 'main' }),
      // Setter for sidebar items (not persisted)
      setItems: (items) => set({ items }),
    }),
    {
      name: 'sidebar',
      storage: createJSONStorage(() => sessionStorage),
      // @ts-expect-error Ignore the type difference error as I meant to persist the state of isOpen only and
      // not the whole store to avoid conversion of icon prop in items list to a string
      partialize: (state) => ({ isOpen: state.isOpen }), // Persist only `isOpen` state
    },
  ),
)

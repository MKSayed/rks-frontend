import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type LoginResponse = {name: string, number: number }

type UseUserStoreType = {
  user: LoginResponse | null
  setUser: (data: LoginResponse | null) => void
}

export const useUserStore = create(
  persist<UseUserStoreType>(
    (set, get) => ({
      user: null,
      setUser: (userData) => {
        set({ user: userData })
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

useUserStore.setState({user: {name: "Mahmoud", number: 2982332342343}})
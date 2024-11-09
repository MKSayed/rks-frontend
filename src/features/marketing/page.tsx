import { Button } from '@/components/ui/button.tsx'
import { ArrowRightIcon } from 'lucide-react'
import logo from '@/assets/rks-full.png'
import { Link } from 'react-router-dom'
import { Layout } from '@/features/marketing/layout.tsx'
import { useUserStore } from '@/stores/user.ts'

export default function MarketingPage() {
  const user = useUserStore(state => state.user)
  return (
    <Layout>
      <section className='flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(44,36%,50%,40%),hsl(35,62%,73%,40%),hsl(var(--background))_60%)] px-4 pb-4 text-center'>
        <h1 className='m-4 text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl'>Work Smarter, Sell bigger!</h1>
        <img src={logo} className='size-[30rem]' />
        <p className='max-w-screen-xl text-lg lg:text-3xl'>
          Empower your business with real-time monitoring, advanced analytics, and intuitive control of your kiosks—all
          from one powerful management platform built to scale with your needs.
        </p>
        <Link to={user ? '/dashboard' : '/auth/login'}>
          <Button className='flex gap-2 rounded-xl p-6 text-lg'>
            {user ? 'Dashboard' : "Sign in"} <ArrowRightIcon className='size-5' />
          </Button>
        </Link>
      </section>
    </Layout>
  )
}

import logo from '@/assets/rks.png'
import logoText from '@/assets/rks-text.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'

export function NavBar() {
  return (
    <header className='fixed top-0 z-10 flex w-full bg-background/90 py-3 shadow-xl'>
      <nav className='container flex items-center justify-between gap-10 font-semibold'>
        <div className={'flex items-center gap-0'}>
          <img src={logo} alt={'logo'} className={'size-12'} />
          <img src={logoText} alt={'logo'} />
        </div>
        <Link to='/auth/login'>
          <Button className='rounded-xl p-6 text-sm'>Sign in</Button>
        </Link>
      </nav>
    </header>
  )
}

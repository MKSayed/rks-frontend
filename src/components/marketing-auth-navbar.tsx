import logo from '@/assets/rks.png'
import logoText from '@/assets/rks-text.png'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.tsx'
import { cn } from '@/lib/utils.ts'

export function MarketingAuthNavbar({ showSignin = true }: { showSignin?: boolean }) {
  return (
    <header className='fixed top-0 z-10 flex w-full bg-background/90 py-3 shadow-xl'>
      <nav
        className={cn(
          'container flex items-center gap-10 font-semibold',
          showSignin ? 'justify-between' : 'justify-center',
        )}
      >
        <div className={'flex items-center gap-0'}>
          <img src={logo} alt={'logo'} className={'size-12'} />
          <img src={logoText} alt={'logo'} />
        </div>
        {showSignin && (
          <Link to='/auth/login'>
            <Button className='rounded-xl p-6 text-sm'>Sign in</Button>
          </Link>
        )}
      </nav>
    </header>
  )
}

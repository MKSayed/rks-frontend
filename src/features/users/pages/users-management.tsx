import { SidebarTrigger } from '@/components/ui/sidebar.tsx'
import { Separator } from '@/components/ui/separator.tsx'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb.tsx'
import { BetweenHorizontalEnd, Home, ListCollapse } from 'lucide-react'
import { useState } from 'react'
import { Card } from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'

export default function UsersManagement() {
  const [isTableMode, setIsTableMode] = useState(false)

  return (
    <>
      <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
        <div className='flex items-center gap-2 px-4'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 h-4' />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href='/dashboard'><Home className={'size-5'}/> </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Users</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className='hidden md:block' />
              <BreadcrumbItem>
                <BreadcrumbPage>Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
        <div className={'flex justify-end'}>
          <Card>
            <h1 className={'mx-2 mt-1 font-bold'}>Layout</h1>

            <Button
              variant={isTableMode ? 'ghost' : 'secondary'}
              className={`size-8 px-1 py-0 ${!isTableMode && 'text-cyan-400'}`}
              onClick={() => setIsTableMode(false)}
            >
              {' '}
              <BetweenHorizontalEnd />
            </Button>
            <Button
              variant={!isTableMode ? 'ghost' : 'secondary'}
              className={`size-8 px-1 py-0 ${isTableMode && 'text-cyan-400'}`}
              onClick={() => setIsTableMode(true)}
            >
              <ListCollapse className={'border-2'} />
            </Button>
          </Card>
        </div>


        {/*<div className='grid auto-rows-min gap-4 md:grid-cols-3'>*/}
        {/*  <div className='aspect-video rounded-xl bg-muted/50' />*/}
        {/*  <div className='aspect-video rounded-xl bg-muted/50' />*/}
        {/*  <div className='aspect-video rounded-xl bg-muted/50' />*/}
        {/*</div>*/}
        {/*<div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />*/}
      </div>
    </>
  )
}

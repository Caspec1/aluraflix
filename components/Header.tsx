'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='sticky z-50 h-10 lg:h-24 flex justify-center items-center lg:justify-between lg:px-10 border-b-2 border-b-primary lg:border-b'>
      <Link href='/'>
        <Image alt='logo' width={110} height={25} src='/img/aluraflix.png' className='w-[105px] h-6 lg:w-[168px] lg:h-10' />
      </Link>
      {pathname === '/' && (
        <Link href='/video' className='border border-gray-100 rounded py-2 px-4 text-white hidden lg:block'>
          Nuevo Video
        </Link>
      )}
    </header>
  )
}

export default Header

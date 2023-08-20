'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()
  return (
    <>
      <footer className={`${pathname === '/' && 'hidden lg:flex'} border-t-2 border-t-primary lg:border-t py-5 px-9 flex flex-col items-center just gap-6`}>
        <Link href="/">
          <Image alt="logo" width={120} height={28} src='/img/aluraflix.png' className="w-32 h-7 lg:h-16 lg:w-64" />
        </Link>
        <p className="text-xs text-gray-100 lg:hidden">Site hecho en <span className="text-white font-bold">#challengeAlura</span> por <span className="text-[#2A7AE4] font-bold">Alura Latam</span></p>
      </footer>
      <Link href='/video' className={`${pathname === '/' && 'flex lg:hidden'} flex items-center justify-center font-semibold text-xl h-14 w-full lg:hidden bg-primary text-white`}>
        Nuevo video
      </Link>
    </>
  )
}

export default Footer

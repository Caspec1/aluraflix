'use client'

import Image from "next/image"

const Banner = () => {
  return (
    <section className="bg-[url('/img/banner.png')] h-64 lg:h-[738px] bg-cover bg-opacity-25 py-24 px-14 flex justify-end items-end">
      <div className="flex justify-center items-start gap-6">
        <div className="lg:flex-1">
          <h2 className="text-white bg-[#6BD1FF] text-xl lg:text-6xl p-2 mb-10 inline-block">Front End</h2>
          <h3 className="text-white mb-2 hidden lg:block">Challenge React</h3>
          <p className="text-gray-100 hidden lg:block">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <Image alt="image demo" src='/img/small-image-banner.png' width={646} height={333} className="hidden lg:block lg:flex-1"/>
      </div>
    </section>
  )
}

export default Banner

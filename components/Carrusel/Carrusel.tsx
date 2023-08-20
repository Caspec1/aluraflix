'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import { Movie } from '@prisma/client';
import CategoryTitle from '../CategoryTitle';
import { CompleteCategory } from '@/types';
import VideoCard from './VideoCard';
import Link from 'next/link';

interface CarruselProps {
  category: CompleteCategory
}

const Carrusel = ({category}: CarruselProps) => {
  return (
    <>
      <CategoryTitle title={category?.name} color={category?.color} />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {category?.movies?.map((movie: Movie) => (
          <SwiperSlide key={movie?.id}>
            <h3 className='text-white mb-5 text-xl text-center'>{movie?.title}</h3>
            <Link href={movie?.video} target='_blank'>
             <VideoCard color={category?.color} movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  </>
  )
}

export default Carrusel

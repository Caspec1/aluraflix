'use client'

import { Movie } from "@prisma/client"
import Image from "next/image"

interface VideoCardProp {
  movie: Movie
  color: string
}

const VideoCard = ({movie, color}: VideoCardProp) => {
  return (
    <div className={`
      border
      ${color === 'green' && 'border-green-500'}
      ${color === 'red' && 'border-red-500'}
      ${color === 'blue' && 'border-blue-500'}
      ${color === 'yellow' && 'border-yellow-500'}
    `}>
      <Image
        src={movie.image}
        alt={movie.title}
        width={150}
        height={250}
        className="rounded-lg"
      />
    </div>
  )
}

export default VideoCard

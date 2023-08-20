'use client'

import VideoForm from "@/components/VideoForm"
import useCategories from "@/hooks/useCategories"

const VideoPage = () => {
  const { data = [] } = useCategories()

  return (
    <div className="text-4xl text-gray-100 mt-14 px-10 mb-16">
      <h3 className="mb-14 text-center">Nuevo video</h3>
      <VideoForm categories={data} />
    </div>
  )
}

export default VideoPage

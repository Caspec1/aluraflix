'use client'

interface CategoryTitleProps {
  title: string
  color: string
}

const CategoryTitle = ({title, color}: CategoryTitleProps) => {
  return (
    <h2 className={`
      text-white
      ${color === 'green' && 'bg-green-500'}
      ${color === 'red' && 'bg-red-500'}
      ${color === 'blue' && 'bg-blue-500'}
      ${color === 'yellow' && 'bg-yellow-500'}
      text-xl
      lg:text-6xl
      p-2
      mb-10
      inline-block
    `}>
      {title}
    </h2>
  )
}

export default CategoryTitle

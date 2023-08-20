'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const Button = ({children, onClick, disabled}: ButtonProps) => {
  return (
    <button
      className="w-44 bg-primary text-white flex justify-center items-center h-14 rounded text-xl cursor-pointer hover:opacity-70 transition divide-gray-300"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

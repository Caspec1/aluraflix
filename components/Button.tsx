'use client'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  clean?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({children, onClick, disabled, clean, type}: ButtonProps) => {
  return (
    <button
      className={`
        w-auto
        px-5
        py-3
        text-center
        rounded
        text-base
        cursor-pointer
        hover:opacity-70
        transition
        duration-300
        ${clean ? 'bg-[#9E9E9E]' : 'bg-primary'}
        ${clean ? 'text-black' : 'text-white'}
      `}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

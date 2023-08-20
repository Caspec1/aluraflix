'use client'

import {
  type FieldErrors,
  type FieldValues,
  type UseFormRegister
} from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({id, label, type, disabled, register, required, errors}) => {
  return (
    <div className="relative mb-10">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required, valueAsNumber: type === 'number' })}
        type={type}
        autoComplete={type === 'password' ? 'current-password' : 'on'}
        className={`
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-base
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
          peer
          ${errors[id] ? 'border-b border-b-red-500' : 'border-neutral-400'}
          ${errors[id] && 'focus:border-red-500'}
        `}
        placeholder=" "
      />
      <label
        className={`
          absolute
          text-base
          text-zinc-400
          duration-150
          transform
          -translate-y-3
          scale-75
          top-4
          z-10
          origin-[0]
          left-6
          peer-placeholder:shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
        `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Input

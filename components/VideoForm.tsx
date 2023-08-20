'use client'

import Button from "@/components/Button"
import Input from "@/components/Input"
import { Category } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { ChangeEvent } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from "react-hot-toast"

interface VideoFormProps {
  categories: Category[]
}

const VideoForm = ({categories}: VideoFormProps) => {
  const router = useRouter()
  const { handleSubmit, formState: { errors }, register, reset, watch, setValue } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      video: '',
      image: '',
      description: '',
      securityCode: '',
      categoryId: ''
    }
  })
  const categoryId = watch('categoryId')
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const { data: response } = await axios.post('/api/video', data)
      toast.success(response.message)
      reset()
    } catch (error) {
      toast.error('Algo salió mal')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="title"
          label="Título"
          required
          register={register}
          errors={errors}
        />
        <Input
          id="video"
          label="Link del video"
          required
          register={register}
          errors={errors}
        />
        <Input
          id="image"
          label="Link de la imagen"
          required
          register={register}
          errors={errors}
        />
        <Input
          id="description"
          label="Descripción"
          required
          register={register}
          errors={errors}
        />
        <Input
          id="securityCode"
          label="Código de seguridad"
          required
          register={register}
          errors={errors}
        />
        <select className="w-full mb-10 bg-neutral-700 rounded px-2 text-sm focus:outline-none py-4 text-neutral-400" onChange={(e: ChangeEvent<HTMLSelectElement>) => setCustomValue('categoryId', e.target.value)} value={categoryId}>
          <option value="">-- Seleccione --</option>
          {categories.map((category: Category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <div className="flex justify-center lg:justify-between items-center">
          <div className="flex justify-start items-center gap-10">
            <Button type="submit" disabled={false}>Guardar</Button>
            <Button type="button" onClick={() => reset()} disabled={false} clean>Limpiar</Button>
          </div>
          <div className="hidden lg:block">
            <Button type="submit" onClick={() => router.push('/category')} disabled={false}>Nueva Categoría</Button>
          </div>
        </div>
      </form>
  )
}

export default VideoForm

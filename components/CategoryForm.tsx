'use client'

import Button from "@/components/Button"
import Input from "@/components/Input"
import useCategoryStore from "@/store/categoryStore"
import axios from "axios"
import { ChangeEvent, useEffect } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { KeyedMutator } from "swr"

interface CategoryFormProps {
  mutate: KeyedMutator<any>
}

const CategoryForm = ({mutate}: CategoryFormProps) => {
  const { categorySelected, setCategorySelected } = useCategoryStore()
  const { handleSubmit, formState: { errors }, register, reset, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      color: '',
      securityCode: ''
    }
  })
  const color = watch('color')
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }
  useEffect(() => {
    if (categorySelected !== null) {
      setValue('name', categorySelected.name)
      setValue('description', categorySelected.description)
      setValue('color', categorySelected.color)
      setValue('securityCode', categorySelected.securityCode)
    }
  }, [categorySelected, setValue])
  const onReset = () => {
    reset()
    setCategorySelected(null)
  }
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      if (categorySelected !== null) {
        const { data: response } = await axios.put(`/api/category/${categorySelected.id}`, data)
        toast.success(response.message)
      } else {
        const { data: response } = await axios.post('/api/category', data)
        toast.success(response.message)
      }
      reset()
      mutate()
    } catch (error) {
      toast.error('Algo anda mal')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="name"
          label="Nombre"
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
        <select className="w-full mb-10 bg-neutral-700 rounded px-2 text-sm focus:outline-none py-4 text-neutral-400" onChange={(e: ChangeEvent<HTMLSelectElement>) => setCustomValue('color', e.target.value)} value={color}>
          <option value="">-- Seleccione --</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
        <Input
          id="securityCode"
          label="Código de seguridad"
          required
          register={register}
          errors={errors}
        />
        <div className="flex justify-center lg:justify-start items-center gap-10">
          <Button type="submit" disabled={false}>Guardar</Button>
          <Button type="button" onClick={onReset} disabled={false} clean>Limpiar</Button>
        </div>
      </form>
  )
}

export default CategoryForm

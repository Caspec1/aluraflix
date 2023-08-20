'use client'

import CategoryForm from "@/components/CategoryForm"
import TableCategory from "@/components/TableCategory"
import useCategories from "@/hooks/useCategories"
import useCategoryStore from "@/store/categoryStore"
import axios from "axios"
import { toast } from "react-hot-toast"

const CategoryPage = () => {
  const { data = [], mutate, isLoading } = useCategories()
  const { categorySelected, setCategorySelected } = useCategoryStore()

  const onDelete = async (id: string) => {
    const confirmation: boolean = confirm('¿Estás seguro de eliminar esta categoría?')
    if (confirmation) {
      try {
        const { data } = await axios.delete(`/api/category/${id}`)
        setCategorySelected(null)
        toast.success(data.message)
        mutate()
      } catch (error) {
        toast.error('Algo anda mal')
      }
    }
  }

  return (
    <div className="text-4xl text-gray-100 mt-14 px-10 mb-16">
      <h3 className="mb-14 text-center">{categorySelected !== null ? 'Editar categoría' : 'Nueva categoría'}</h3>
      <CategoryForm mutate={mutate} />
      <TableCategory categories={data} isLoading={isLoading} onDelete={onDelete} />
    </div>
  )
}

export default CategoryPage

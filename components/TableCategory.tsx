'use client'

import useCategoryStore from "@/store/categoryStore"
import { Category } from "@prisma/client"
import { ClipLoader } from "react-spinners"

interface TableCategoryProps {
  categories: Category[]
  isLoading?: boolean
  onDelete: (id: string) => void
}

const TableCategory = ({categories, isLoading, onDelete}: TableCategoryProps) => {
  const { setCategorySelected } = useCategoryStore()
  return (
    isLoading
      ? (
        <div className="py-10 flex items-center justify-center">
          <ClipLoader color="#2A7AE4" size={50} />
        </div>
      )
      : (
        <table className='table-auto overflow-scroll w-full mt-10 hidden lg:table border-4 border-primary'>
          <thead className="text-left text-4xl">
            <tr>
              <th className="border-4 border-primary p-2">Nombre</th>
              <th className="border-4 border-primary p-2">Descripción</th>
              <th className="border-4 border-primary p-2 text-center">Editar</th>
              <th className="border-4 border-primary p-2 text-center">Remover</th>
            </tr>
          </thead>
          <tbody className="text-2xl">
            {categories.map((category: Category) => (
              <tr key={category.id}>
                <td className="p-1">{category.name}</td>
                <td className="p-1">{category.description}</td>
                <td className="p-1 text-center"><button onClick={() => setCategorySelected(category)}>Editar</button></td>
                <td className="p-1 text-center"><button onClick={() => onDelete(category.id)}>Remover</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )
  )
}

export default TableCategory

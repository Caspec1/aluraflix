import { Category } from '@prisma/client'
import { create } from 'zustand'

interface CategoryStoreProps {
  categorySelected: Category | null
  setCategorySelected: (category: Category | null) => void
}

const useCategoryStore = create<CategoryStoreProps>((set) => ({
  categorySelected: null,
  setCategorySelected: (category) => set({ categorySelected: category }),
}))

export default useCategoryStore

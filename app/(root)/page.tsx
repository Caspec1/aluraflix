'use client'

import Banner from "@/components/Banner";
import Carrusel from "@/components/Carrusel/Carrusel";
import useCategories from "@/hooks/useCategories";
import { Category } from "@prisma/client";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const { data = [], isLoading } = useCategories()
  const actionCategory = data?.filter((category: Category) => category.name === 'Acción')[0]
  const comediaCategory = data?.filter((category: Category) => category.name === 'Comedia')[0]
  const thrillerCategory = data?.filter((category: Category) => category.name === 'Thriller')[0]
  return (
    <>
      <Banner />
      {isLoading
        ? (
          <div className="py-10 flex items-center justify-center">
            <ClipLoader color="#2A7AE4" size={50} />
          </div>
        )
        : (
          <div className="py-10 mx-10">
            <Carrusel category={actionCategory} />
            <Carrusel category={comediaCategory} />
            <Carrusel category={thrillerCategory} />
          </div>
        )
      }
    </>
  )
}

import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

interface IParams {
  id: string
}

export async function PUT (req: Request, { params }: { params: IParams}) {
  const body = await req.json()
  const { id } = params

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: id as string
      }
    })
    if (!category) return NextResponse.error()

    const updatedCategory = await prisma.category.update({
      where: {
        id: id as string
      },
      data: {
        ...body
      }
    })
    return NextResponse.json({ message: 'Categoría actualizada'})
  } catch (error) {
    return NextResponse.error()
  }
}

export async function DELETE (req: Request, { params }: { params: IParams }) {
  const { id } = params

  try {
    const category = await prisma.category.findUnique({
      where: {
        id: id as string
      }
    })
    if (!category) return NextResponse.error()
    await prisma.category.delete({
      where: {
        id: id as string
      }
    })
    return NextResponse.json({ message: 'Categoría eliminada'})
  } catch (error) {
    return NextResponse.error()
  }
}

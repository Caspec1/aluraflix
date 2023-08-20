import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { name, description, color, securityCode } = body

  const category = await prisma.category.findFirst({
    where: {
      name
    }
  })

  if (category) return NextResponse.error()

  try {
    await prisma.category.create({
      data: {
        name,
        description,
        color,
        securityCode
      }
    })
    return NextResponse.json({ message: 'Category created' })
  } catch (error) {
    return NextResponse.error()
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const categories = await prisma.category.findMany({
      include: {
        movies: true
      },
      orderBy: {
        name: 'asc'
      }
    })
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.error()
  }
}

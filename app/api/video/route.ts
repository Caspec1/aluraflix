import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { title } = body

  try {
    const videoExist = await prisma.movie.findFirst({
      where: {
        title
      }
    })
    if (videoExist) return NextResponse.error()

    await prisma.movie.create({
      data: {
        ...body
      }
    })
    return NextResponse.json({ message: 'Película agregada' })
  } catch (error) {
    return NextResponse.error()
  }
}

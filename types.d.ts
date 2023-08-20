import { Movie } from "@prisma/client"

interface CompleteCategory {
  color: string
  createdAt: string
  description: string
  id: string
  movies: Movie[]
  name: string
  securityCode: string
  updatedAt: string
}

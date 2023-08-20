import fetcher from '@/libs/fetcher'
import useSWR from 'swr'

const useCategories = () => {
  const { data, error, mutate, isLoading } = useSWR('/api/category', fetcher)

  return {
    data,
    error,
    mutate,
    isLoading
  }
}

export default useCategories

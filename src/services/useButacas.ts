import { useGetAllButacasQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useButacas = (tendido: string) => {
  const { data, loading, refetch } = useGetAllButacasQuery({
    fetchPolicy: 'network-only',
    variables: {
      tendido
    }
  })

  const butacas = data?.GetAllButacas?.data ?? []

  return {
    loading,
    butacas,
    refetch
  }
}

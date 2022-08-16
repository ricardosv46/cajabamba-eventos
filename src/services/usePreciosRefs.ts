import { useGetAllPrecioReferencialQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const usePreciosRefs = () => {
  const { data, loading, refetch } = useGetAllPrecioReferencialQuery({
    fetchPolicy: 'network-only',
    variables: {}
  })

  const precios = data?.GetAllPrecioReferencial ?? []

  return {
    loading,
    precios,
    refetch
  }
}

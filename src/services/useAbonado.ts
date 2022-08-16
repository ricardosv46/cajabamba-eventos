import { useGetFeriaQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useAbonado = () => {
  const { data, loading, refetch } = useGetFeriaQuery({
    fetchPolicy: 'network-only',
    variables: {}
  })

  const abono = data?.GetFeria ?? {}

  return {
    loading,
    abono
  }
}

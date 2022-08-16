import { useGetAllEventosQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useEventos = (input = { feriaId: 0, estado: 'Activado' }) => {
  const { data, loading, refetch } = useGetAllEventosQuery({
    fetchPolicy: 'network-only',
    variables: {
      ...input
    }
  })

  const eventos = data?.GetAllEventos?.data ?? []

  return {
    loading,
    eventos
  }
}

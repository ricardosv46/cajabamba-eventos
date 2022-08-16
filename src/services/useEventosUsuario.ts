import { useGetAllEventosUsuarioQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useEventosUsuario = () => {
  const { data, loading, refetch } = useGetAllEventosUsuarioQuery({
    fetchPolicy: 'network-only',
    variables: {}
  })

  const eventos = data?.GetAllEventosUsuario?.data ?? []
  const numeroTotal = data?.GetAllEventosUsuario?.numeroTotal ?? 0

  return {
    loading,
    eventos,
    numeroTotal
  }
}

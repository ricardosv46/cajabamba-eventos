import { useGetEventoSlugQuery } from '../generated/graphql'

// Obtenemos todas los abonos
export const useEventoSlug = (slug: string) => {
  const { data, loading, refetch } = useGetEventoSlugQuery({
    fetchPolicy: 'network-only',
    variables: {
      slug
    }
  })

  const eventoSlug = data?.GetEventoSlug ?? {}

  return {
    loading,
    eventoSlug,
    refetch
  }
}

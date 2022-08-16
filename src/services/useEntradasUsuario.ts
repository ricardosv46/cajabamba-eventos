import { useGetAllEntradasUsuarioQuery, useUpdateAsignacionEntradaMutation } from '../generated/graphql'

interface IUpdateAsiento {
  asientoId: string
  tipoDocumento: string
  numDocumento: string
  nombres: string
  apellidos: string
}


// Obtenemos todas los abonos
export const useEntradasUsuario = (eventoId?: number) => {
  const { data, loading, refetch } = useGetAllEntradasUsuarioQuery({
    fetchPolicy: 'network-only',
    variables: {
      eventoId
    }
  })

  const entradas = data?.GetAllEntradasUsuario ?? []

  const [UpdateAsignacionEntrada, { loading: loadingUpdate }] = useUpdateAsignacionEntradaMutation()
  
    const updateAsignacionEntrada = async ({
      asientoId,
      tipoDocumento,
      numDocumento,
      nombres,
      apellidos
    }: IUpdateAsiento) => {
      try {
        const res = await UpdateAsignacionEntrada({
          variables: {
            input: {
              asientoId,
              tipoDocumento,
              numDocumento,
              nombres,
              apellidos
            }
          }
        })
        refetch()
        console.log(res)
        return { ok: true }
      } catch (error: any) {
        console.log(error?.graphQLErrors[0])
        return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
      }
    }

  return {
    loading,
    entradas,
    refetch,
    updateAsignacionEntrada,
    loadingUpdate
  }
}

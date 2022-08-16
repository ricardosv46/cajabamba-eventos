import { useUpdatePasswordMutation } from "../generated/graphql"

interface Props {
  passwordAntiguo: string
  passwordNuevo: string
}

export const useUpdatePassword = () => {
  const [updatePass, { loading: loadingUpdatePassword }] = useUpdatePasswordMutation()

  const updatePassword = async ({ passwordAntiguo, passwordNuevo }: Props) => {
    try {
      const res = await updatePass({
        variables: {
          input: {
            passwordAntiguo,
            passwordNuevo
          }
        }
      })

      if (res.data?.UpdatePassword) {
        return { ok: true, data: res.data?.UpdatePassword }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loadingUpdatePassword,
    updatePassword
  }
}

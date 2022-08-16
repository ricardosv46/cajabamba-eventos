import { useRecoverPasswordMutation } from "../generated/graphql"

interface Props {
  email: string
}

export const useRecoveryPassword = () => {
  const [recovery, { loading: loadingRecovery }] = useRecoverPasswordMutation()

  const recoveryPassword = async ({ email }: Props) => {
    try {
      const res = await recovery({
        variables: {
          email
        }
      })

      if (res.data?.RecoverPassword) {
        return { ok: true, data: res.data?.RecoverPassword }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loadingRecovery,
    recoveryPassword
  }
}

import { useConsultEmailMutation } from '../generated/graphql'

interface IUseEmail {
  email: string
}

export const useEmail = () => {
  const [ConsultEmail, { loading }] = useConsultEmailMutation()

  const consultEmail = async ({ email }: IUseEmail) => {
    try {
      const res = await ConsultEmail({
        variables: {
          email
        }
      })

      if (res.data?.ConsultEmail === 'EMAIL_VALIDO') {
        return { ok: true }
      } else {
        if (res.data?.ConsultEmail === 'EMAIL_EXISTE') {
          return { ok: false, error: 'El Email ya exite' }
        }
        if (res.data?.ConsultEmail === 'EMAIL_EXISTE') {
          return { ok: false, error: 'El Email ya exite' }
        }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }
  return {
    loading,
    consultEmail
  }
}

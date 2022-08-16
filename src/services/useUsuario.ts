import { useCreateUsuarioMutation, useUpdateUsuarioMutation } from '../generated/graphql'

interface ICreate {
	email: string
	password: string
	nombres: string
	apellidos: string
}

interface IUpdate {
	id: string
	tipoDocumento: string
	numeroDocumento: string
	nombres: string
	apellidos: string
	celular: string
}

// Obtenemos todas las categorias
export const useUsuario = () => {
	const [CreateUsuario, { loading: loadingCreate }] = useCreateUsuarioMutation()

	const createUsuario = async ({ email, password, nombres, apellidos }: ICreate) => {
		try {
			const res = await CreateUsuario({
				variables: {
					input: {
						tipoDocumento: '',
						numeroDocumento: '',
						celular: '',
						email,
						password,
						nombres,
						apellidos
					}
				}
			})
			return { ok: true }
		} catch (error: any) {
			console.log(error?.graphQLErrors[0]?.debugMessage)
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	const [UpdateUsuario, { loading: loadingUpdate }] = useUpdateUsuarioMutation()

	const updateUsuario = async ({ id, tipoDocumento, numeroDocumento, nombres, apellidos, celular }: IUpdate) => {
		try {
			const res = await UpdateUsuario({
				variables: {
					input: {
						id,
						tipoDocumento,
						numeroDocumento,
						celular,
						nombres,
						apellidos
					}
				}
			})
			return { ok: true, data: res.data?.UpdateUsuario }
		} catch (error: any) {
			console.log(error?.graphQLErrors[0]?.debugMessage)
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	return {
		createUsuario,
		loadingCreate,
		updateUsuario,
		loadingUpdate
	}
}

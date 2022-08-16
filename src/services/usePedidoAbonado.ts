import { CreatePedidoAbonadoMutationFn, CreatePedidoAbonadoMutationVariables, useCreatePedidoAbonadoMutation } from '../generated/graphql'

interface ICreateBlog {
	titulo: string
	descripcionCorta: string
	descripcionLarga: string
	imagenPrincipal: number
	imagenSecundaria: number
	keywords: string
	categoriaBlogId: number
}

interface ICreatePedido {
	input1: {
		tipoComprobante: string
		numeroComprobante: string
		precioTotal: number
		fechaPedido: string
	}
	input2: {
		tendido: string
		codigo: string
		asiento: string
		precio: number
		feriaId: number
		reservado: string
	}[]

	input3?: {
		nombres?: string
		apellidos?: string
		celular?: string
		email?: string
	}
}

export const usePedidoAbonado = () => {
	const [CreatePedido, { loading: loadingCreate }] = useCreatePedidoAbonadoMutation()

	const createPedidoAbonado = async ({ input1, input2, input3 }: CreatePedidoAbonadoMutationVariables) => {
		try {
			const res = await CreatePedido({
				variables: {
					input1,
					input2,
					input3
				}
			})
			console.log(res)
			return { ok: true }
		} catch (error: any) {
			console.log(error?.graphQLErrors[0])
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}

	return {
		createPedidoAbonado,
		loadingCreate
	}
}

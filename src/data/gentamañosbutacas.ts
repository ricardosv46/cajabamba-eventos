export const gentamañosbutacas = (id: string) => {
	let widthContainer: string = ''
	let widthRuedo: string = ''

	if (id === 'T1') {
		widthContainer = 'w-[1450px]'
		widthRuedo = 'w-[1050px]'
	}
	if (id === 'T2S') {
		widthContainer = 'w-[2800px]'
		widthRuedo = 'w-[2400px]'
	}

	if (id === 'T2B') {
		widthContainer = 'w-[1700px]'
		widthRuedo = 'w-[1300px]'
	}
	if (id === 'T3') {
		widthContainer = 'w-[2220px]'
		widthRuedo = 'w-[1820px]'
	}
	if (id === 'T3A') {
		widthContainer = 'w-[1450px]'
		widthRuedo = 'w-[1050px]'
	}
	if (id === 'T3B') {
		widthContainer = 'w-[1450px]'
		widthRuedo = 'w-[1050px]'
	}

	return { widthContainer, widthRuedo }
}

export const genNombreFilas = (id: string) => {
  let nombreFilas: string[] = []
  if (id === 'T1') {
    nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
  }
  if (id === 'T2S') {
    nombreFilas = ['F15', 'F14', 'F13', 'F12', 'F11', 'F10', 'F09', 'F08', 'F07', 'F06', 'F05', 'F04']
  }

  if (id === 'T2B') {
    nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
  }
  if (id === 'T3') {
    nombreFilas = ['F17', 'F16', 'F15', 'F14', 'F13', 'F12', 'F11', 'F10', 'F09', 'F08', 'F07', 'F06', 'F05', 'F04']
  }
  if (id === 'T3A') {
    nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
  }
  if (id === 'T3B') {
    nombreFilas = ['F03', 'CONTRA BARRERA', 'BARRERA']
  }

  return nombreFilas
}

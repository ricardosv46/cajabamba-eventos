export const gentituloButacas = (id: string) => {
  let titulo: string = ''
  if (id === 'T1') {
    titulo = 'Tendido 1 SOMBRA'
  }
  if (id === 'T2S') {
    titulo = 'Tendido 2 SOL'
  }

  if (id === 'T2B') {
    titulo = 'Tendido 2 BAJO'
  }
  if (id === 'T3') {
    titulo = 'Tendido 3 SOL'
  }
  if (id === 'T3A') {
    titulo = 'Tendido 3A SOL'
  }
  if (id === 'T3B') {
    titulo = 'Tendido 3B SOL/SOMBRA'
  }

  return titulo
}

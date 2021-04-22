export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); //Pega a duração em segundos e divide 3600 para saber a quantidade de horas (E depois pega só o numero inteiro para o total)
  const minutes = Math.floor((duration % 3600) / 60); //Pega o resto das horas e divide por 60 para obter o resultado em minutos
  const seconds = duration % 60; //Pega o resto da divisão da duração por 60 para obter o resultado em segundos

  const timeString = [hours, minutes, seconds]
  .map(unit => String(unit).padStart(2, '0'))
  .join(':')

  return timeString;
}
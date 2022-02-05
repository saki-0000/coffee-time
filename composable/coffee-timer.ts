export const useCoffeeTimer = () => {
  const getLabel = (time: number) => {
    if (time === 180) {
      return 'コーヒーを淹れる'
    } else if (180 > time && 120 < time) {
      return '1湯目...'
    } else if (120 >= time && 60 < time) {
      return '2湯目...'
    } else if (60 >= time && 0 < time) {
      return '3湯目...'
    } else if (time === 0) {
      return 'Have a Good Time!'
    }
  }
  return {
    getLabel,
  }
}

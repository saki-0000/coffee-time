export const useCoffeeTimer = () => {
  const getLabel = (time: number) => {
    if (time === 180) {
      return 'コーヒーを淹れる'
    } else if (time < 180 && time > 120) {
      return '1湯目...'
    } else if (time <= 120 && time > 60) {
      return '2湯目...'
    } else if (time <= 60 && time > 0) {
      return '3湯目...'
    } else if (time === 0) {
      return 'Have a Good Time!'
    }
  }
  return {
    getLabel,
  }
}

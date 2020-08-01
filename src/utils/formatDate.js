export const formatDate = dateToFormat => {
  const _date = new Date(dateToFormat)

  const _day = _date.getDate()
  const _month = _date.getMonth()

  const day = _day < 10 ? `0${_day}` : _day
  const month = _month < 10 ? `0${_month}` : _month
  const year = _date.getFullYear()

  return `${day}/${month}/${year}`
}

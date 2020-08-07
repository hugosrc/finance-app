function getDayName(targetDay: number) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return days[targetDay]
}

function formatDate(date: Date) {
  const day = getDayName(date.getDay())

  return `${day}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

export {
  formatDate
}
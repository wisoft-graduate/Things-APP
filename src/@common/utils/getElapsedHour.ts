import formatDate from './formatDate'

function getElapsedHour(time: string) {
  const date = new Date(time)
  const today = new Date()
  const elapsed = Math.floor((today.getTime() - date.getTime()) / 1000 / 60 / 60)

  /** 24시간 이내 */
  if (elapsed <= 0) {
    const minElapsed = Math.floor((today.getTime() - date.getTime()) / 1000 / 60)
    return minElapsed <= 0 ? '방금' : `${minElapsed}분 전`
  }

  if (elapsed > 0 && elapsed <= 23) {
    return `${elapsed}시간 전`
  }

  /** 현재 년도와 출력할 년도가 다른경우 */
  const dateYear = String(date).split(' ')[3]
  const todayYear = String(today).split(' ')[3]

  if (dateYear !== todayYear) {
    return `${formatDate(time, 'yyyy년 M월 d일')}`
  }

  /** 24시간 이후 */
  const dayElapsed = Math.floor(elapsed / 24)
  return dayElapsed > 30 ? `${formatDate(time, 'M월 d일')}` : `${dayElapsed}일 전`
}

export default getElapsedHour

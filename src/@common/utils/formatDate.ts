import { format } from 'date-fns'
import ko from 'date-fns/locale/ko'

type Options = Parameters<typeof format>[2]

function getFormatDate(date: string | number, dateFormat?: string, options?: Options) {
  const locale = ko
  const dateOptions = {
    ...options,
    locale,
  }
  return format(new Date(date), dateFormat ?? 'MMM dd, yyyy')
}

export default getFormatDate

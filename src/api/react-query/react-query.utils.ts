import { UseMutationOptions } from '@tanstack/react-query'
import _ from 'lodash'

export const createQueryKeyFactory =
  <List extends Record<string, any>>() =>
  <Key extends keyof List>(...[key, params]: undefined extends List[Key] ? [Key] : [Key, List[Key]]) => {
    return params ? [key, params] : [key]
  }

export function getDefaultNextPageParam<T extends Record<string, any>>(
  lastPage: T[] | null,
  seqKey: Extract<keyof T, string> & { [K in keyof T]: T[K] extends number ? K : never }[keyof T],
) {
  if (lastPage && lastPage.length < 20) {
    return undefined
  }

  return {
    lastOffset: _.get(_.last(lastPage), seqKey, 0),
  }
}

type InfiniteQueryPageParam = {
  lastOffset: undefined | number
}

type Pagination = {
  currentPage: number
  size: number
  isFirst: boolean
  isLast: boolean
  totalPages: number
  totalCount: number
}

export function getDefaultNextPageParamByPage<T extends { pagination: Pagination }>(lastPage: T | null) {
  if (!lastPage) {
    return undefined
  }

  return {
    page: lastPage.pagination.currentPage + 1,
  }
}

export function getInfiniteQueryInitialPageParamByPage(initialPage?: number) {
  return {
    page: initialPage,
  }
}

export function getInfiniteQueryInitialPageParam(initialData?: InfiniteQueryPageParam['lastOffset']) {
  return {
    lastOffset: initialData || undefined,
  }
}

type InfiniteData<T> = {
  pages: T[]
  pageParams: any[]
}

type FlattenArray<T> = T extends Array<infer U> ? U : never

export function getFlattenInfiniteQueryData<T extends Record<F, any[]>, F extends keyof T>(
  data: InfiniteData<{ data: T }> | undefined,
  key: F,
): FlattenArray<T[F]>[] {
  if (!data) {
    return []
  }

  return data.pages.reduce<FlattenArray<T[F]>[]>((acc, cur) => {
    if (!cur.data) {
      return [...acc]
    }

    return [...acc, ...cur.data[key]]
  }, [])
}

export function getIsNotFoundInfiniteQueryData(data): boolean {
  if (data === undefined) {
    return false
  }

  return data.pages.length === 1 && data.pages[0]?.reasonPhrase === 'NotFound'
}

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> = Awaited<ReturnType<FnType>>

export type QueryConfig<T extends (...args: any[]) => any> = Omit<ReturnType<T>, 'queryKey' | 'queryFn'>

export type MutationConfig<MutationFnType extends (...args: any) => Promise<any>> = Omit<
  UseMutationOptions<ApiFnReturnType<MutationFnType>, Error, Parameters<MutationFnType>[0]>,
  'onError' | 'mutationFn'
>

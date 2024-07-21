import { QueryClient } from '@tanstack/react-query'

/**
 * @description react-query 사용을 위한 client 인스턴스 생성
 * @var defaultOptions 전역적으로 모든 쿼리에 적용되는 기본 옵션
 * @var refetchOnMount 원하는 react-query만 refetch 하기 위해 기본 false
 * @var refetchOnWindowFocus 원하는 react-query만 refetch 하기 위해 기본 false
 * @var retry 백엔드 API 통신 실패 시 최대 3번까지 재호출
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
})

export { default as getBookmarkQueryKey } from './getBookmarkQueryKey'
export * from './react-query.utils'

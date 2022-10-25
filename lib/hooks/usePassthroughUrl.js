import { useRouter } from 'next/router'

export const usePassthroughUrl = (url) => {
  const router = useRouter()
  const appUrl = new URL(url)
  const params = router.query
  const keys = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term']

  keys.forEach((key) => {
    const val = params[key]
    if (!!val && typeof val === 'string') {
      appUrl.searchParams.set(key, val)
    }
  })

  return appUrl.toString()
}

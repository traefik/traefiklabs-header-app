import useSWR, { SWRConfiguration } from 'swr'
import qs from 'query-string'

const useGetLastPost = (tag: string, options?: SWRConfiguration) => {
  const endpoint = process.env.GHOST_URL

  const queryParams = {
    filter: `primary_tag:${tag}`,
    limit: '1',
    order: 'published_at desc',
    include: 'tags',
  }

  const { data } = useSWR(`${endpoint}&${qs.stringify(queryParams)}`, options)

  return data?.data?.posts?.[0]
}

export default useGetLastPost

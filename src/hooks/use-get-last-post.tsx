import useSWR, { SWRConfiguration } from 'swr'
import qs from 'query-string'

const endpoint = 'https://containous.ghost.io/ghost/api/v3/content/posts/?key=ae2233e58f413de14de94b7837'

const useGetLastPost = (tag: string, options?: SWRConfiguration) => {
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

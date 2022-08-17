
export type Res = Response & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  nextPage?: string
  count?: number
}

const fetcher = async (input: RequestInfo, init?: RequestInit): Promise<Res> => {
  return fetch(input, init).then((res) => {
    const contentType = res.headers.get('Content-Type')
    const nextPage = res.headers.get('X-Next-Page')
    const count = res.headers.get('X-Total-Count')

    if (!res.ok) {
      return res
        .json()
        .then((errorData) => {
          throw new Error(errorData)
        })
        .catch(() => {
          throw new Error(res.statusText)
        })
    }

    if (contentType?.includes('application/json')) {
      return res.json().then((data) => ({
        ...res,
        data,
        nextPage,
        count,
      }))
    }

    return res
  })
}

export const isoFetch = (url: string, init: RequestInit, accessToken?: string) => {
  const options = { ...init }

  if (accessToken) {
    options.headers = {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  return fetcher(url, options)
}

export default fetcher

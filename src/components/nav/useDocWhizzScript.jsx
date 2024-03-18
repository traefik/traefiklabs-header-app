import { useEffect, useMemo } from 'react'

const WHITELISTED_HOSTNAME = ['localhost', 'doc.traefik.io']

const useDocWhizzScript = () => {
  const { pathname, hostname } = window.location
  const product = pathname.split('/')[1]
console.log(process.env.REACT_APP_DOCWHIZZ_TRAEFIK_PROXY_USER_ID)
  const clientId = useMemo(() => {
    if (WHITELISTED_HOSTNAME.includes(hostname)) {
      if (product === 'traefik') return process.env.REACT_APP_DOCWHIZZ_TRAEFIK_PROXY_USER_ID
      if (product === 'traefik-enterprise') return process.env.REACT_APP_DOCWHIZZ_TRAEFIK_EE_USER_ID

      return null
    }
    return null
  }, [hostname, product])

  useEffect(() => {
    if (!!clientId) {
      const t = document.createElement('script')
      t.setAttribute('data-id', 'docwhizz-script')
      t.setAttribute('data-client', clientId)
      t.crossOrigin = 'anonymous'
      t.src = 'https://widget.docwhizz.com/index.js'
      t.type = 'module'
      document.head.appendChild(t)

      return () => {
        document.head.removeChild(t)
      }
    }
  }, [clientId])
}

export default useDocWhizzScript

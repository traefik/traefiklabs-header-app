import { useEffect, useMemo } from 'react'

const WHITELISTED_HOSTNAME = ['localhost', 'doc.traefik.io']

const useDocWhizzScript = () => {
  const {pathname, hostname} = window.location
  const product = pathname.split('/')[1]

  const clientId = useMemo(() => {
    if (WHITELISTED_HOSTNAME.includes(hostname)) {
      if (product === 'traefik') return '65e8267d7714e3b11a5ce139'
      if (product === 'traefik-enterprise') return '65f0e20984bd4dfcfe7e58a6'

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

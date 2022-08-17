import Header from 'components/nav/Header'
import React, { ReactNode, ComponentProps } from 'react'
import { Provider } from '@containous/faency'
import { SWRConfig } from 'swr'
import fetcher from 'utils/fetcher'
import 'components/nav/drawer.css'

const FaencyProvider = Provider as React.FC<ComponentProps<typeof Provider> & { children: ReactNode }>

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: process.env.POLLING_INTERVAL ? parseInt(process.env.POLLING_INTERVAL, 10) : 300000, // default 5min
        fetcher,
      }}
    >
      <FaencyProvider>
        <Header />
      </FaencyProvider>
    </SWRConfig>
  )
}

export default App

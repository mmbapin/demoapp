import React from 'react'
import { Header, Footer} from '../components'

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default AppLayout
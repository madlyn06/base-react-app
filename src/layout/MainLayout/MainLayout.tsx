import React from 'react'
import Footer from 'src/component/Footer'
import Header from 'src/component/Header'
interface Props {
  children: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout

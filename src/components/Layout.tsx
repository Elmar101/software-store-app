
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
     <Header/>
      <div style={{minHeight: "83vh"}}>
        <Outlet />
      </div>
    <Footer />
    </>
  )
}

export default Layout
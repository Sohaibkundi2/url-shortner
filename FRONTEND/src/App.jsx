import { Outlet } from "@tanstack/react-router"
import Navbar from "./compunents/NavBar"
import Footer from './compunents/Footer';

const RootLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer/>
    </>
  )
}

export default RootLayout

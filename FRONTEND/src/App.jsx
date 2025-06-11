import { Outlet } from "@tanstack/react-router"
import Navbar from "./compunents/NavBar"

const RootLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  )
}

export default RootLayout

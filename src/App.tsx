import Layout from "./core/layout/Layout"
import Hero from "./components/Hero/Hero"

import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App()  {
  return (
    <Layout>
      <Navbar/>
      <Hero />
      
      <Footer />
    </Layout>
  )
}

export default App

import Layout from "./core/layout/Layout"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import SearchBar from "./components/SearchBar/SearchBar"
import SingleCard from "./components/SingleCard/SingleCard"

function App()  {
  return (
    <Layout>
      <Hero />
      <Footer />
      <searchBar />
      <SingleCard />
    </Layout>
  )
}

export default App

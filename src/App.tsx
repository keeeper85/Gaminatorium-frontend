import Layout from "./core/layout/Layout"
import Hero from "./components/Hero/Hero"
import SearchBar from "./components/Searchbar/SearchBar";
import SingleCard from "./components/SingleCard/SingleCard";

function App()  {
  return (
    <Layout>
      <Hero/>
      <SingleCard/>
      <SearchBar/>
    </Layout>
  )
}

export default App

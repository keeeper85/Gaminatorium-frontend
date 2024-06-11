import { NavLink } from "react-router-dom"
import Layout from "./layout/Layout"

function App()  {
  return (
    <Layout>
      <h1 className="text-red">TEST</h1>
      <NavLink to="/asd">Test Link </NavLink>
    </Layout>
  )
}

export default App

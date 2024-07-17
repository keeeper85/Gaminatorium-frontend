import Layout from "./core/layout/Layout.tsx"
import Hero from "./components/Hero/Hero"
import { Route, Routes } from "react-router-dom";
import Login from "./core/Login/Login.tsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App

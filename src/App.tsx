import Layout from './core/layout/Layout.tsx'
import Hero from './components/Hero/Hero'
import { Route, Routes } from 'react-router-dom'
import Login from './core/Login/Login.tsx'
import Page404 from './core/Page404/Page404.tsx'
import About from './core/About/About.tsx'

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Hero />} />
				<Route path='/login' element={<Login />} />
				<Route path='/about' element={<About />} />
			</Route>

			<Route path='*' element={<Page404 />} />
		</Routes>
	)
}

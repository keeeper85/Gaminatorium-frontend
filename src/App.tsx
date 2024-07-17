import Layout from './core/layout/Layout.tsx'
import { Route, Routes } from 'react-router-dom'
import Login from './core/Login/Login.tsx'
import Page404 from './core/Page404/Page404.tsx'
import About from './core/About/About.tsx'
import Register from './core/Register/Register.tsx'
import ChangePassword from './core/ChangePassword/ChangePassword.tsx'
import ForgotPassword from './core/ForgotPassword/ForgotPassword.tsx'
import Home from './core/Home/Home.tsx'

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/change-password' element={<ChangePassword />} />
				<Route path='/forgot-password' element={<ForgotPassword/>} />
				<Route path='/about' element={<About />} />
			</Route>

			<Route path='*' element={<Page404 />} />
		</Routes>
	)
}

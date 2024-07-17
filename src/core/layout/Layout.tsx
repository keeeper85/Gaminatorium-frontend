import { AuthProvider } from '../../contexts/Authcontext.tsx'
import Navbar from '../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'


function Layout() {
	return (
		<AuthProvider>
			<div className='flex flex-col min-h-screen'>
				<header className='flex justify-center'>
					<Navbar />
				</header>

				<main className='flex flex-col justify-center items-center'><Outlet /></main>

				<Footer />
			</div>
		</AuthProvider>
	)
}

export default Layout

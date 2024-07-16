import { AuthProvider } from '../../contexts/Authcontext.tsx'
import Navbar from '../../components/Navbar/Navbar.tsx'
import Footer from '../../components/Footer/Footer.tsx'

interface LayoutProps {
	children: JSX.Element[] | JSX.Element
}

function Layout({ children }: LayoutProps) {
	return (
		<AuthProvider>
			<div className='flex flex-col min-h-screen'>
				<header className='flex justify-center'>
					<Navbar />
				</header>

				<main className='flex flex-col justify-center items-center'>{children}</main>

				<Footer />
			</div>
		</AuthProvider>
	)
}

export default Layout

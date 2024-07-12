import Navbar from '../../components/Navbar/Navbar'
import { AuthProvider } from '../../contexts/Authcontext'
import { ForgotPasswordForm } from './ForgotPasswordForm'

export default function ForgotPassword() {
	return (
		<AuthProvider>
			<header className='flex justify-center'>
				<Navbar />
			</header>

			<main className='flex justify-center items-center min-h-screen p-6 lg:w-full'>
				<section className='w-ful p-8 lg:p-16 rounded-2xl bg-black w-full max-w-[560px] shadow-dark mt-28 '>
					<h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14 tracking-tight'>Forgot Password</h1>

					<ForgotPasswordForm />
					{/*{children}*/}
				</section>
			</main>
		</AuthProvider>
	)
}

import Navbar from '../../components/Navbar/Navbar'
import { AuthProvider } from '../../contexts/Authcontext'
import { RegisterForm } from './RegisterForm'

export default function Register() {
	return (
		<AuthProvider>
			<header className='flex justify-center'>
				<Navbar />
			</header>
		
            <main className='flex justify-center items-center min-h-screen p-6 lg:w-full'>

                <section className='w-ful p-16 rounded-2xl bg-black w-full max-w-[435px] shadow-dark mt-28 '>
                    <h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14'>Register</h1>

                    <RegisterForm />
                    {/*{children}*/}
                </section>

            </main>
		</AuthProvider>
	)
}

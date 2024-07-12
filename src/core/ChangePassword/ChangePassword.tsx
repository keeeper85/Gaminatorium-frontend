import Navbar from "../../components/Navbar/Navbar";
import { AuthProvider } from "../../contexts/Authcontext";
import { ChangePasswordForm } from "./ChangePasswordForm";

export default function ChangePassword() {
    return (
		<AuthProvider>
			<header className='flex justify-center'>
				<Navbar />
			</header>
		
            <main className='flex justify-center items-center min-h-screen p-6 lg:w-full'>

                <section className='w-ful p-16 rounded-2xl bg-black w-full max-w-[435px] shadow-dark mt-28 '>
                    <h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14'>Change Password</h1>

                    <ChangePasswordForm />
                    {/*{children}*/}
                </section>

            </main>
		</AuthProvider>
	)
}
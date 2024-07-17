import { ForgotPasswordForm } from './ForgotPasswordForm'

export default function ForgotPassword() {
	return (
		<section className='w-ful p-8 lg:p-16 rounded-2xl bg-black w-full max-w-[560px] shadow-dark mt-44 '>
			<h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14 tracking-tight'>Forgot Password</h1>

			<ForgotPasswordForm />
		</section>
	)
}

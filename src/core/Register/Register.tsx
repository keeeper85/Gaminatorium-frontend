import { RegisterForm } from './RegisterForm'

export default function Register() {
	return (
		<section className='w-ful p-8 rounded-2xl bg-black w-full max-w-[435px] shadow-dark mt-28 lg:p-16'>
			<h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14'>Register</h1>

			<RegisterForm />
		</section>
	)
}

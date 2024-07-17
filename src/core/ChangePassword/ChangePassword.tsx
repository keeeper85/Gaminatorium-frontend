import { ChangePasswordForm } from './ChangePasswordForm'

export default function ChangePassword() {
	return (
		<section className='w-ful p-16 rounded-2xl bg-black w-full max-w-[435px] shadow-dark mt-28 lg:mt-32'>
			<h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14'>Change Password</h1>

			<ChangePasswordForm />
		</section>
	)
}

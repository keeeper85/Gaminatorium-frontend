import { Link } from 'react-router-dom'

export function RegisterForm() {
	return (
		<form className='flex flex-col space-y-4 font-inknut' noValidate>
			<div className='flex flex-col gap-2'>
				<label htmlFor='email'>email</label>
				<input
					className='bg-lightblack outline-none border-none p-2 border-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='email'
					name='email'
					id='email'
					autoComplete='email'
					required
				/>
				<span className='text-red text-xs pl-2'>email is empty! | user with this email already exists</span>
			</div>

			<div className='flex flex-col gap-2'>
				<label htmlFor='password'>passwoord</label>
				<input
					className='bg-lightblack outline-none border-none p-2 border-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='passwoord'
					name='password'
					id='password'
					autoComplete='new-password'
					required
				/>
				<span className='text-red text-xs pl-2'>password is invalid!</span>
			</div>

			<div className='flex flex-col gap-2'>
				<label htmlFor='repeat-password'>reapeat passwoord</label>
				<input
					className='bg-lightblack outline-none border-none p-2 border-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='passwoord'
					name='repeat-password'
					id='repeat-password'
					autoComplete='new-password'
					required
				/>
				<span className='text-red text-xs pl-2'>password is invalid!</span>
			</div>

			<Link to='/login'>
				<span className='text-xs font-inknut py-2 block mt-3'>Already a member? Login here!</span>
			</Link>

			<button className='text-base py-2 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full transition duration-300 hover:bg-transparent'>
				Register
			</button>
		</form>
	)
}

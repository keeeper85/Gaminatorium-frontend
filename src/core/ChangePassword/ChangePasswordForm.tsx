import { Link } from 'react-router-dom'

export function ChangePasswordForm() {
	return (
		<form className='flex flex-col space-y-4 font-inknut' noValidate autoComplete='off'>
			<div className='flex flex-col gap-2'>
				<label htmlFor='password'>new password</label>
				<input
					className='bg-[rgba(238,235,239,0.15)] outline-none border-none p-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='password'
					name='password'
					id='password'
					required
				/>
				<span className='text-red text-xs pl-2'>password is invalid!</span>
			</div>

			<div className='flex flex-col gap-2'>
				<label htmlFor='repeat-password'>repeat new password</label>
				<input
					className='bg-[rgba(238,235,239,0.15)] outline-none border-none p-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='password'
					name='repeat-password'
					id='repeat-password'
					required
				/>
				<span className='text-red text-xs pl-2'>passwords don’t match!</span>
			</div>

			<Link to='/login'>
				<span className='text-xs font-inknut py-2 block mt-3'>Already a member? Login here!</span>
			</Link>

			<button className='text-base py-2 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full transition duration-300 hover:bg-transparent'>
				Set New Password
			</button>
		</form>
	)
}

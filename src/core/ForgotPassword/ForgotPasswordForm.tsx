import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from './Modal'

export function ForgotPasswordForm() {
	const [isModalOpened, setIsModalOpened] = useState(false)

	function handleOnSubmit(e: React.FormEvent) {
		e.preventDefault()
		setIsModalOpened(!isModalOpened)
	}

	return (
		<form
			onSubmit={handleOnSubmit}
			className='flex flex-col space-y-4 font-inknut lg:px-12'
			noValidate
			autoComplete='off'>
			<div className='flex flex-col gap-2 mb-4'>
				<label htmlFor='email'>Email</label>
				<input
					className='bg-[rgba(238,235,239,0.15)] outline-none border-none p-2 rounded-full px-6 py-3 text-xs lg:text-sm'
					type='email'
					name='email'
					id='email'
					required
				/>
				<span className='text-red text-xs pl-2'>Email is empty! | Email does not exist</span>
			</div>

			<button className='text-base py-2 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full transition duration-300 hover:bg-transparent'>
				Recover Password
			</button>

			{isModalOpened && createPortal(<Modal onClose={() => setIsModalOpened(false)} />, document.body)}
		</form>
	)
}

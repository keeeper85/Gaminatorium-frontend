interface ModalProps {
	onClose: () => void
}

export function Modal({ onClose }: ModalProps) {
	return (
		<section className='fixed flex items-center justify-center w-full h-full top-0' onClick={onClose}>
			<div className='w-[86%] p-8 rounded-2xl bg-black w-full max-w-[560px] shadow-dark mt-28 lg:p-16' 
                    onClick={e => e.stopPropagation()}>
				<h1 className='font-irish text-center text-4xl mb-4 lg:text-6xl lg:mb-14 tracking-tight'>Forgot Password</h1>

				<div className='lg:px-6'>
					<p className='mb-12 leading-8'>
						Please check your email and click on the provided link to restart your password.
					</p>

					<button
						onClick={onClose}
						className='text-base py-2 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full transition duration-300 hover:bg-transparent'>
						Send Again
					</button>
				</div>
			</div>
		</section>
	)
}
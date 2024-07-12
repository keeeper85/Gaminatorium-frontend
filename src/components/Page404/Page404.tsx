export default function Page404() {
	return (
		<div className='flex flex-col items-center justify-center h-screen p-8 text-center font-irish lg:items-end xl:pr-40'>
			<div className='relative lg:static'>

				<img
					src='/assets/images/404.png'
					className='w-[221px] aspect-square mb-4 lg:absolute lg:left-[26px] lg:w-[516px] lg:bottom-[26px] lg:z-[-1] xl:w-[80%] xl:max-w-[700px]'
					alt='Not Found Image'
				/>
				<h1 className='text-9xl mb-4 absolute top-[-77px] z-[-1] lg:static lg:text-[12rem] lg:mb-16 xl:text-[20rem]'>
					404
				</h1>

			</div>

			<p className='text-base mb-12 max-w-[330px] lg:text-2xl lg:max-w-[500px] lg:mb-[8%] xl:text-3xl xl:max-w-[700px]'>
				We are very sorry. The connection has been severed. Please return to the homepage or contact us!
			</p>

			<button className='text-base py-4 px-8 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full max-w-xs transition duration-300 hover:bg-transparent xl:text-3xl  xl:max-w-[26rem]'>
				Back to Home
			</button>
			<button className='text-base py-4 px-8 my-2 bg-[#70211C] text-white border-solid border-2 border-[#70211C] rounded-lg w-full max-w-xs transition duration-300 hover:bg-transparent xl:text-3xl xl:max-w-[26rem]'>
				Contact Us
			</button>

		</div>
	)
}

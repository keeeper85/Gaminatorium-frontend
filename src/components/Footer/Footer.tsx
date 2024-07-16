import FacebookIcon from '/assets/icons/facebook-icon.png'
import LinkedinIcon from '/assets/icons/linkedin-icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

	return (
		<footer
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
			className='flex justify-between items-center flex-col mt-auto p-4 md:flex-row md:px-12 md:h-24'>
			<span className='text-xl mb-1 lg:mb-0 md:text-2xl'>Gaminatorium</span>
			<p className='text-sm'>©{currentYear} gaminatorium.eu</p>

			<div className='flex flex-col items-center mt-6 md:mt-0'>
				<span className='mb-2 uppercase text-sm'>Follow us</span>
				<div className='flex gap-2'>
					<a href='https://www.facebook.com/Gaminatorium/' target='_blank' rel='noreferrer'>
						<img className='px-1' src={FacebookIcon} alt='Facebook' />
					</a>
					<a href='https://www.facebook.com/Gaminatorium/' target='_blank' rel='noreferrer'>
						<img className='px-1' src={LinkedinIcon} alt='Facebook' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
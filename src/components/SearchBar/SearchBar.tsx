import SearchIcon from '/assets/icons/loupe-icon.png'

export function SearchBar() {
	return (
		<div className='flex items-center gap-4 bg-gray mt-16 rounded-full px-4 overflow-hidden lg:self-start lg:py-1 lg:w-[340px]'>
			<img src={SearchIcon} alt='Search Icon' />
			<input
				type='text'
				name='search'
				placeholder='Search any favorite game...'
				className='bg-transparent text-sm w-full py-2 pr-4 border-none outline-none text-black'
			/>
		</div>
	)
}

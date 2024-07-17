import Hero from '../../components/Hero/Hero'
import { SearchBar } from '../../components/SearchBar/SearchBar'

export default function Home() {
	return (
		<div className='w-full max-w-screen-lg flex flex-col items-center'>
			<Hero />
            <SearchBar />
		</div>
	)
}

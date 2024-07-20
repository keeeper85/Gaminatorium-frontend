import { Line } from '../../components/Line/Line'
import { ComentsBox } from './ComentsBox'
import { Main } from './Main'

export default function GameInfo() {
	return (
		<div className='w-full max-w-screen-lg flex flex-col'>
			<Main />
			<Line />
			<ComentsBox />
			<Line />
		</div>
	)
}

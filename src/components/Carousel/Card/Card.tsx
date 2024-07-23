interface ItemComponentProps {
	title: string
	description: string
}

export const Card: React.FC<ItemComponentProps> = ({ title, description }) => {
	return (
		<div className='flex flex-col'>
			<img src={description} className='rounded-xl' alt='Picture Game' />
			<span className='p-2'>{title}</span>
		</div>
	)
}

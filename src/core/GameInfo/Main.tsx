import DoomIcon from '/assets/images/doom.png'

export function Main() {
    return (
		<section className='mt-36 mb-4 px-4 text-gray'>

			<div className='flex justify-between mb-10'>
				<h1 className='font-irish text-3xl lg:text-4xl'>Doom</h1>
				<button className='font-inknut py-1 px-6 text-white border-solid border-2 border-[#70211C] rounded-lg transition duration-300 bg-transparent hover:bg-[#70211C]'>
					Play
				</button>
			</div>

            <div className='flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start'>
                <div>
                    <img src={DoomIcon} className='rounded-lg' alt="Piture Game" />

                    <div className='flex gap-4 justify-center'>
                        <img src={DoomIcon} className='w-[90px] rounded-lg lg:w-[120px]' alt="Other Piture Game" />
                        <img src={DoomIcon} className='w-[90px] rounded-lg lg:w-[120px]' alt="Other Piture Game" />
                        <img src={DoomIcon} className='w-[90px] rounded-lg lg:w-[120px]' alt="Other Piture Game" />
                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <h2 className='font-irish text-3xl mb-4'>Description</h2>

                    <p className='font-inknut text-justify text-xs leading-8'>"Doom," released by id Software in 1993, is a groundbreaking first-person shooter that revolutionized the gaming industry with its immersive 3D graphics and fast-paced gameplay. Set in a science fiction universe where players assume the role of a space marine fighting hordes of demons from Hell, the game is known for its intense action and horror elements. Players navigate through various levels, using an arsenal of weapons ranging from shotguns to rocket launchers to combat diverse enemies. Doom's levels are non-linear, encouraging exploration and featuring hidden rooms and passages. The game also introduced multiplayer capabilities, allowing players to engage in deathmatches, a feature that became foundational in online gaming. Doom’s influence is profound, impacting not only gaming culture but also popular media, and it remains a celebrated classic in the gaming community.</p>
                </div>


            </div>


		</section>
	)
}
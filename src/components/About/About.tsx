import { Line } from "../Line/Line";

export default function About() {
	return (
		<main className='mt-32 max-w-screen-xl p-4 mx-auto'>
			<section className='font-inknut text-gray text-xs leading-8 px-4'>
				<h1>What is Gaminatorium?</h1>

				<p className='text-justify'>
					"Doom," released by id Software in 1993, is a groundbreaking first-person shooter that revolutionized the
					gaming industry with its immersive 3D graphics and fast-paced gameplay. Set in a science fiction universe
					where players assume the role of a space marine fighting hordes of demons from Hell, the game is known for its
					intense action and horror elements. Players navigate through various levels, using an arsenal of weapons
					ranging from shotguns to rocket launchers to combat diverse enemies. Doom's levels are non-linear, encouraging
					exploration and featuring hidden rooms and passages.
				</p>
			</section>

			<section className='my-8 font-inknut text-gray text-xs leading-8 px-4'>
				<Line />

				<div className='pt-8 flex gap-12 flex-wrap justify-center lg:flex-nowrap'>
					<img src='/assets/images/man.png' className='w-full max-w-[280px] object-cover' alt='Image man' />

					<div className='pt-1'>
						<h2 className='text-base leading-10'>Name Surname</h2>
						<p className='text-justify'>
							"Doom," released by id Software in 1993, is a groundbreaking first-person shooter that revolutionized the
							gaming industry with its immersive 3D graphics and fast-paced gameplay. Set in a science fiction universe
							where players assume the role of a space marine fighting hordes of demons from Hell, the game is known for
							its intense action and horror elements. Players navigate through various levels, using an arsenal of
							weapons ranging from shotguns to rocket launchers to combat diverse enemies. Doom's levels are non-linear,
							encouraging exploration and featuring hidden rooms and passages.
						</p>
					</div>
				</div>
			</section>

			<section className='my-8 font-inknut text-gray text-xs leading-8 px-4'>
				<Line />

				<div className='pt-8 flex gap-12 flex-wrap justify-center lg:flex-nowrap'>
					<img src='/assets/images/man.png' className='lg:order-1 w-full max-w-[280px] object-cover' alt='Image man' />

					<div className='pt-1'>
						<h2 className='text-base leading-10'>Name Surname</h2>
						<p className='text-justify'>
							"Doom," released by id Software in 1993, is a groundbreaking first-person shooter that revolutionized the
							gaming industry with its immersive 3D graphics and fast-paced gameplay. Set in a science fiction universe
							where players assume the role of a space marine fighting hordes of demons from Hell, the game is known for
							its intense action and horror elements. Players navigate through various levels, using an arsenal of
							weapons ranging from shotguns to rocket launchers to combat diverse enemies. Doom's levels are non-linear,
							encouraging exploration and featuring hidden rooms and passages.
						</p>
					</div>
				</div>
			</section>

			<section className='my-8 font-inknut text-gray text-xs leading-8 px-4'>
				<Line />

				<div className='py-8 flex gap-12 flex-wrap justify-center lg:flex-nowrap'>
					<img src='/assets/images/man.png' className='w-full max-w-[280px] object-cover' alt='Image man' />

					<div className='pt-1'>
						<h2 className='text-base leading-10'>Name Surname</h2>
						<p className='text-justify'>
							"Doom," released by id Software in 1993, is a groundbreaking first-person shooter that revolutionized the
							gaming industry with its immersive 3D graphics and fast-paced gameplay. Set in a science fiction universe
							where players assume the role of a space marine fighting hordes of demons from Hell, the game is known for
							its intense action and horror elements. Players navigate through various levels, using an arsenal of
							weapons ranging from shotguns to rocket launchers to combat diverse enemies. Doom's levels are non-linear,
							encouraging exploration and featuring hidden rooms and passages.
						</p>
					</div>
				</div>
			</section>
		</main>
	)
}

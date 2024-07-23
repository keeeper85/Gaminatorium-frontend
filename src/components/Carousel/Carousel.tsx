import { ActiveSlider } from "./ActiveSlider";

const itemsData = [
  {
    title: 'fff',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
  {
    title: 'sss',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
  {
    title: 'jhjj',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
  {
    title: 'llll',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
  {
    title: 'iii',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
  {
    title: 'uuuu',
    description: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2021/02/doom-eternal-music-hell-hades-bpm-550x309.jpg',
  },
]

export default function Carousel() {
  return (
    <div className="flex flex-col justify-center w-[240px] sm:w-[800px] my-10">
      <h2 className="text-base font-inknut">Most recent games</h2>
      <ActiveSlider itemsData={itemsData} />
      <hr className="my-5" />
      <h2 className="text-base font-inknut">Most something games</h2>
      <ActiveSlider itemsData={itemsData} />
    </div>
  );
}

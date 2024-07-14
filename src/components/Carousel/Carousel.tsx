import { ActiveSlider } from "./ActiveSlider";

const itemsData = [
  {
    title: 'fff',
    description: 'asdasdsa',
  },
  {
    title: 'sss',
    description: 'cc',
  },
  {
    title: 'jhjj',
    description: 'ghgfhfg',
  },
  {
    title: 'llll',
    description: 'cljk;ljkc',
  },
  {
    title: 'iii',
    description: 'cljk;d',
  },
  {
    title: 'uuuu',
    description: 'cljk;ljkc',
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

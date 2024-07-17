export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-12 mt-36 items-center lg:gap-24">
      <div className="flex flex-col text-center gap-4">
        <h1 className="flex flex-col font-irish xl:text-6xl text-4xl font-bold">
          Welcome to <strong className="text-red">Gaminatorium</strong>
        </h1>
        <span className="text-base font-irish">Experiment. Learn. Play.</span>
      </div>

      <img src="/assets/images/Hero_image.jpg" className="rounded-3xl xl:w-80 xl:h-80 w-64 h-64 shadow-[6px_4px_20px_-3px_rgba(0,0,0,1)]" alt="Castle with Moon" />
    </div>
  )
}

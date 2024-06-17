
export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-12 mt-12 items-center">
      <div className="flex flex-col text-center gap-4">
        <h1 className="flex flex-col font-irish xl:text-5xl text-4xl font-bold">
          Welcome to <strong className="text-red">Gaminatorium</strong>
        </h1>
        <span className="text-xs">Experiment. Learn. Play.</span>
      </div>

      <div>
        <img src="/assets/images/Hero_image.jpg" className="rounded-3xl w-64 h-64" alt="Castle with Moon" />
      </div>
    </div>
  )
}

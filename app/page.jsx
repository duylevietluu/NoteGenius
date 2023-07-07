import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center yellow_gradient">
      Unleash Your Knowledge
        <br className="max-md-hidden" />
        <span  className="teal_gradient text-center">Inspiring Insights</span>
      </h1>
      <p className="desc text-center">
        This is Duy's first Next project, super cool!
      </p>

      <Feed />
    </section>
  )
}

export default Home
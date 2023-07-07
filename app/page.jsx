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
        <span>This is </span>
        <a href="https://github.com/duylevietluu/NoteGenius" target="_blank" rel="noopener noreferrer" class="text-blue-500">
          Duy's first Next project
        </a>
        <span> and it's super cool!</span>
      </p>

      <Feed />
    </section>
  )
}

export default Home
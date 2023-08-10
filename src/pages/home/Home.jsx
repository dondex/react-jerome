const Home = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 ">
        <div className="sm:mb-8 flex justify-center items-center">
          <div className="">
            <img
              src="https://lyricstranslate.com/files/styles/artist/public/355800515b4b61f3d5908a1f82894f19_0.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Jerome Darell Basa
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Web Developer</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

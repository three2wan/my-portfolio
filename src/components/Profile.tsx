function Profile() {
  return (
    <>
      <div className="flex items-center justify-between px-7 py-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Full Stack Developer
        </div>
        <div className="bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium">
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className="w-1.5 h-1.5 bg-[#109d5c] rounded-full"></div>
            <span className="hidden md:block">available for work</span>
          </div>
        </div>
      </div>

      <div className="px-7 py-7 flex flex-col flex-col-reverse md:flex md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl md:text-4xl font-semibold text-center md:text-justify tracking-tighter">
            I'm Syazwan Jamil
          </h1>
          <p className="md:w-3/4 text-lg text-gray-500 text-center md:text-justify font-normal tracking-tigh">
            A Full Stack Developer with a passion for building web applications
            and working with modern technologies.
          </p>
          <div className="flex items-center text-center md:text-justify justify-center md:justify-normal pt-6">
            <a href="#">
              <button
                type="button"
                className="gap-x-1 before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center mr-2 mb-2"
              >
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                Hire Me
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-full p-2 flex items-center justify-center mb-7">
          <div className="w-36 h-36 rounded-full bg-gradient-to-b from-gray-100 to-gray-300 border-2 flex items-center justify-center">
            <img src="" alt="" className="max-w-full max-h-full " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

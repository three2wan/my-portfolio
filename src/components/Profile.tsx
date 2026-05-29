function Profile() {
  return (
    <>
      <div className="flex items-center justify-between px-7 py-7">
        <div className="font-medium text-lg flex items-center gap-x-3">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          Tech Lead
        </div>
        <div className="bg-[#d0fadf] text-[#109d5c] rounded-full uppercase px-[0.60rem] py-[0.60rem] md:px-2 md:py-1 font-medium">
          <div className="text-sm font-medium flex items-center gap-x-1">
            <div className="w-1.5 h-1.5 bg-[#109d5c] rounded-full"></div>
            <span className="hidden md:block">available for work</span>
          </div>
        </div>
      </div>

      <div className="px-7 py-7 flex flex-col-reverse md:flex-row md:items-center md:justify-between pt-3">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl font-semibold text-center md:text-left tracking-tighter">
            I'm Syazwan Jamil
          </h1>
          <p className="md:w-3/4 text-lg text-gray-500 text-center md:text-left font-normal">
            Tech Lead with 10+ years of experience building scalable full-stack
            systems — from React frontends to cloud infrastructure.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-x-3 pt-6">
            <a href="mailto:#">
              <button
                type="button"
                className="before:ease relative overflow-hidden border border-[#000000] bg-[#050708] text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-medium rounded-lg text-sm px-3 py-2 inline-flex items-center gap-x-1"
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

            <div className="flex items-center gap-x-2">
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-full hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-full hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="mailto:#"
                aria-label="Email"
                className="p-2 rounded-full hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900"
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-full p-2 flex items-center justify-center mb-7 md:mb-0">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-gray-200 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold tracking-tight select-none">
              SJ
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

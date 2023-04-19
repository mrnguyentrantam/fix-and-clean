import { Container } from "@mui/material";

function SwipeableTextMobileStepper() {

  return (
    <>
      <div className="
        relative
        bg-[url('https://previews.123rf.com/images/gmast3r/gmast3r1701/gmast3r170100453/69475519-people-group-different-occupation-set-employees-mix-race-workers-banner-flat-vector-illustration.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        text-center
        p-20
        mt-[60px]
        sm:md-[72px]
      ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="container relative z-10">
          <h1 className="text-5xl font-bold text-white">
            Welcome to my hometown
          </h1>
          <p className="text-white text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quas iure saep
          </p>
          <div className="max-w-[700px] mx-auto mt-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="
                  block 
                  w-full 
                  p-4 
                  pl-10 
                  text-sm 
                  text-gray-900 
                  border 
                  border-gray-300 
                  rounded-lg 
                  bg-gray-50 
                  focus:ring-blue-500 
                  focus:border-blue-500 
                "
                placeholder="Nhập nội dung tìm kiếm" />
              <button
                type="submit"
                className="
                  text-white 
                  absolute 
                  right-2.5 
                  bottom-2.5 
                  bg-blue-700 
                  hover:bg-blue-800 
                  focus:ring-4 
                  focus:outline-none 
                  focus:ring-blue-300 
                  font-medium 
                  rounded-lg 
                  text-sm 
                  px-4 
                  py-2 
                "
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SwipeableTextMobileStepper;

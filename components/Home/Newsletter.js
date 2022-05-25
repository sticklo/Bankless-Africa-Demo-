import Image from "next/image";
import newsletter from "../../asset/Images/newsletter.png";

const Newsletter = () => {
  
  return (
    <div className="px-10 py-8 bg-white sm:px-24 sm:py-20">
      <div className="items-center px-10 py-8 bg-gradient-to-b from-black to-black rounded-3xl sm:px-20 sm:py-16">
        <div className="xl:grid xl:grid-cols-2">
          <div className="xl:px-10">
            <h1 className="text-3xl text-center text-white lg:w-96 sm:text-5xl sm:font-bold lg:font-bold lg:text-6xl xl:font-bold xl:text-7xl xl:text-left xl:mr-28">
              Subscribe to Bankless Africa
            </h1>
            <p className="mt-8 text-xs text-center text-white lg:w-96 sm:font-normal sm:text-base sm:mt-3 lg:font-normal lg:text-base lg:mt-5 xl:text-xl xl:font-normal xl:mt-6 xl:text-left xl:mr-96">
              Get updates on our upcoming community events sent straight to your
              inbox.
            </p>
            <div className="items-center mt-12 md:ml-14 lg:ml-36 xl:hidden">
              <Image
                src={newsletter}
                alt="newsletter"
                className="items-center w-48 h-40"
              />
            </div>
            <form
              className="items-center mt-12 xl:items-start xl:mt-4"
              action=""
              method="POST"
            >
              <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
                <input
                  className="w-56 text-xs text-center text-white bg-black border-2 border-red-500 rounded-md outline-0 h-9 sm:w-60 sm:h-10 sm:ml-4 md:w-72 md:h-14  md:text-base lg:w-72 xl:ml-0 xl:p-3 xl:w-80"
                  id="email"
                  type="text"
                  autoComplete="email"
                  placeholder="Email address"
                  required
                />
                <button
                  className="w-32 h-12  text-lg text-center text-white bg-red-600 rounded-sm  lg:ml-4 xl:w-40 xl:h-14"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div className="hidden ml-64 xl:block">
            <Image src={newsletter} alt="newsletter" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
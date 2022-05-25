import EduNav from "../components/Education/EduNav";
import Footer from "../components/Footer/Footer";
import UpcomingCards from "../components/Education/UpcomingCards";
import PastCard from "../components/Education/PastCard";
import Newsletter from "../components/Home/Newsletter";

const Education = () => {
    return(
        <div className="bg-black">
            <EduNav />
            <div className="bg-bgEdu min-w-screen h-auto bg-100% bg-no-repeat bg-center mt-8 md:mt-6 py-20 sm:py-40 md:py-52 xl:py-64 2xl:py-80 px-8">
                <h1 className="text-white text-center font-bold text-xl sm:text-4xl md:text-6xl">Bankless Africa Podcast</h1>
            </div>
            <div className="bg-black">
                <h1 className="text-white px-2 sm:px-10 pb-5 sm:pb-10 sm:text-lg xl:text-xl 2xl:text-4xl md:pt-0 lg:pt-5">Upcoming Podcast</h1>
                <UpcomingCards />
            </div>
            <div className="bg-black pb-10">
                <h1 className="text-white px-2 sm:px-10 pb-5 sm:pb-10 sm:text-lg xl:text-xl 2xl:text-4xl md:pt-0 lg:pt-5">Past Podcast</h1>
                <PastCard />
                <div className="w-full flex justify-center"><button className="bg-red-600 text-white rounded-lg p-3">See more</button></div>
            </div>
            <Newsletter />
          <Footer />
        </div>
    );
}
export default Education;
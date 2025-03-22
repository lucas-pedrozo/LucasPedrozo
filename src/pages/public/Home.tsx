
import CardHome from "../../components/custom/CardHome";

import motionBanner1 from "../../assets/videos/motionbanner1.mp4";
import motionBanner2 from "../../assets/videos/motionbanner2.mp4";

import banner1 from "../../assets/image/bannerCard.webp";
import banner2 from "../../assets/image/BannerCard2.png";

const Home = () => {
    // simularção de componente de banner e card
    return (
        <main className="max-w-[1220px] px-2.5 py-10 mx-auto">

            <h1 className="text-4xl font-bold text-center || max-w-[450px] mx-auto pb-9">Hello welcome to Harmonic Sound</h1>


            <div className="newsFlex flex flex-col min-[600px]:flex-row gap-y-[40px] gap-x-[20px] ">
                <div className="newsLeft flex flex-col gap-[40px]">
                    <CardHome img={banner2} title="Come and discover who we are and what our work is" btnTitle="More" caminho="/about" />

                    <video src={motionBanner2} className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)] animate-fade-right animate-duration-500 animate-delay-350 animate-ease-out " autoPlay loop muted></video>
                </div>

                <div className="newsRight flex flex-col min-[600px]:flex-col-reverse gap-[40px]">
                    <CardHome img={banner1} title="Don't just focus on the visuals, the audio is more important" btnTitle="Sound" caminho="/soundList" />

                    <video src={motionBanner1} className="w-full rounded-[20px] shadow-[0px_2px_10px_rgba(0,0,0,0.6)]  animate-fade-left animate-duration-500 animate-delay-300 animate-ease-out" autoPlay loop muted></video>
                </div>
            </div>
        </main >
    );
}

export default Home;
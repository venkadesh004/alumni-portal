import { Player } from "@lottiefiles/react-lottie-player";
import MainPageAnimation from "../assets/MainPageAnimation.json";

function Hero() {
  return (
    <div className="flex items-center justify-evenly h-[80vh]">
      <div className="h-[70%] flex flex-col justify-evenly">
        <div>
          <div className="">
            <h1 className="text-7xl font-bold">
              TCE ALUMNI <br /> PORTAL
            </h1>
          </div>
          <div className="mt-7">
            <p>
              A place where professionals guide the new <br /> generation.
            </p>
          </div>
        </div>
        <div className="w-[450px] flex items-center justify-between">
          <button className="bg-[#000000] text-[#ffffff] w-[200px] h-[50px] rounded-xl">
            Enter as Alumni
          </button>
          <button className="bg-[#ffffff] text-[#000000] w-[200px] h-[50px] rounded-xl border-black border-2">
            Enter as Student
          </button>
        </div>
      </div>
      <div className="w-[400px] h-[400px]">
        <Player src={MainPageAnimation} loop autoplay />
      </div>
    </div>
  );
}

export default Hero;

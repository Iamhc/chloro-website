import Slideshow from "./Slideshow.js";
import Discover from "./Discover.js";
import Mid from "./Mid.js";
import Design from "./Designs.js";
const Body = () => {
  return (
    <div className="">
      <div className="flex bg-[rgb(1, 85, 1)]">
        <div className="ml-8 p-[12vh] text-[10vh] text-white w-[50vw]  font-serif font-extralight">
          A whole new world, a whole new look
          <div className=" text-[2.5vh] text-[#bababa] font-custom w-[30vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <Design />
          <div>
            <div className="absolute bg-green-500 rounded-[100%] w-[20vw] h-[20vh] z-0 rounded-t-full ml-[71vw] mt-[13vh] rotate-180 opacity-10"></div>
          </div>
          <Discover />
        </div>
        <Slideshow />
      </div>
      <Mid />
    </div>
  );
};
export default Body;

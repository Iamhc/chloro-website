import Midtext from "./Midtext";
const Mid = () => {
  return (
    <div>
      <div className="bg-gray-100 w-[100%] h-[80vh] flex z-10">
        <div>
          <div className="absolute bg-green-700 rounded-[100%] w-[20vw] h-[20vh] z-0 rounded-t-full ml-[1vw] mt-[5vh] rotate-[-30deg] "></div>
        </div>
        <div>
          <div className="absolute bg-green-900 rounded-[100%] w-[16vw] h-[20vh] z-0 rounded-t-full ml-[81.5vw] mt-[52vh] rotate-[145deg] "></div>
        </div>
        <div className="px-[8vh] py-[10vh] rounded-tl-[100%] rounded-tr-[100%]">
          <img
            className="w-[25vw] h-[57vh] rounded-tl-[100%] rounded-tr-[100%]"
            src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/jar-of-organic-skin-care-mandarin-gel-in-sunlight-XJEHKYG.jpg"
          ></img>
        </div>

        <Midtext />
        <img
          className="w-[25vw] h-[57vh] rounded-tl-[100%] ml-[2vh] rounded-tr-[100%] mt-[8vh]"
          src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/stylish-sensual-woman-holding-protea-flower-at-fac-4CXRJ23.jpg"
        ></img>
      </div>
    </div>
  );
};
export default Mid;

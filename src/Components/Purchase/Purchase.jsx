import Image33 from "../../assets/images/Image33.svg";

const Purchase = () => {
  return (
    <div className="w-full h-[120px] mb-[50px]">
      <div className="w-[1170px] h-full m-auto">
        <div className="w-[871px] h-full relative">
          <div className="absolute top-0 left-0">
            <img src={Image33} alt="" />
          </div>
          <div className="w-[219px] h-16 absolute top-[32px] bottom-[26px] left-[32px] text-white">
            <p className="w-full h-[42px] font-sofia text-sm leading-[21.154px] font-normal">
              Best Selling <span className="font-bold">BLOG</span> and{" "}
              <span className="font-bold">MAGAZINE</span> Theme of All Time
            </p>
            <i className="w-[116px] h-[21px] font-oswald font-normal text-sm leading-[21.15px] text-breaking-color cursor-pointer duration-75 hover:underline">
              Experience the change!
            </i>
          </div>
          <button className="w-[180px] h-11 bg-breaking-color py-[13px] absolute top-[38px] right-7 bottom-[38px] text-white font-bold text-lg leading-[18px] duration-75 hover:scale-105">
            PURCHASE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

import { StartIcon } from "../../Constants";

const Updates = () => {
  return (
    <div className="w-[279px] ms-[21px]">
      <div className="w-[270px] h-[195px] mb-[25px] bg-[#DEDADA] ms-[9px] text-center font-sofia">
        <h4 className="capitalize font-oswald text-lg font-medium text-base-text py-[25px]">
          Get latest update
        </h4>
        <div>
          <input
            className="w-[220px] h-10 text-dark font-normal text-xs leading-[19.67px] py-[10px] pr-[57px] pl-[58px] focus:outline-none mb-[10px]"
            type="text"
            placeholder="Your email address"
          />
          <button className="w-[220px] h-10 bg-breaking-color text-white font-bold text-lg leading-[29.5px] py-[5px] pr-[68px] pl-[67px]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full h-[339px]">
        <div className="w-[270px] h-[31px] ms-[9px] border-b border-b-base-text relative mb-[25px]">
          <span className="absolute -bottom-[1px] w-[72px] h-[1px] bg-breaking-color"></span>
          <h4 className="w-[58px] h-[21px] font-medium text-sm font-oswald leading-[20.75px] text-breaking-color">
            Categories
          </h4>
        </div>
        <ul className="w-full flex flex-wrap gap-[13px]">
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Life Style
              </h4>
            </div>
            <button className="w-6 h-6 bg-breaking-color font-normal text-xs leading-[13.33px] text-white pt-1.5 pb-[5px] pr-1 pl-[5px]">
              50
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                World
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-purple font-normal text-xs leading-[13.33px] text-white pt-1.5 pb-[5px] px-[5px]">
              55
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Foods
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-dark-purple font-normal text-xs leading-[13.33px] text-white pt-1.5 pr-1 pb-[5px] pl-[5px]">
              40
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Technology
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-dark font-normal text-xs leading-[13.33px] text-white pt-1.5 px-1.5 pb-[5px]">
              10
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Sports
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-blue font-normal text-xs leading-[13.33px] text-white pt-1.5 px-[5px] pb-[5px]">
              42
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Football
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-pink font-normal text-xs leading-[13.33px] text-white pt-1.5 pr-2 pb-[5px] pl-[9px]">
              5
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Cricket
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-light font-normal text-xs leading-[13.33px] text-white pt-1.5 px-[5px] pb-[5px]">
              67
            </button>
          </li>
          <li className="w-full h-6 flex justify-between font-sofia text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="w-[85px] h-6 flex gap-[3px]">
              <button>
                <StartIcon />
              </button>
              <h4 className="w-[58px] h-4 font-normal text-sm leading-[15.55px] py-1">
                Life Style
              </h4>
            </div>
            <button className="w-6 h-6 bg-button-aqua font-normal text-xs leading-[13.33px] text-white pt-1.5 pr-1.5 pb-[5px] pl-[7px]">
              12
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Updates;

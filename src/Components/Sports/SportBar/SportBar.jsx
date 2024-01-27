import { LeftArrow, RightArrow } from "../../../Constants";

const SportBar = () => {
  return (
    <div className="w-full h-9 mb-[41px] flex font-oswald pb-[47px] border-b border-b-base-text relative">
      <span className="w-[140px] h-[1px] bg-breaking-color absolute -bottom-[1px]"></span>
      <div className="w-[61px] h-full">
        <h4 className="font-medium text-2xl leading-[35.57px] text-breaking-color">
          Sports
        </h4>
      </div>
      <ul className="flex ms-[235px] text-white text-xs font-normal leading-[17.78px] gap-3">
        <li className="w-7 h-6 bg-button-red py-[3px] px-2 duration-100 hover:scale-105 cursor-pointer">All</li>
        <li className="w-[68px] h-6 bg-button-purple py-[3px] pr-[17px] pl-4 duration-100 hover:scale-105 cursor-pointer">Football</li>
        <li className="w-14 h-6 bg-button-green py-[3px] px-3 duration-100 hover:scale-105 cursor-pointer">Cricket</li>
        <li className="w-[77px] h-6 bg-button-blue py-[3px] pr-4 pl-[15px] duration-100 hover:scale-105 cursor-pointer">Basketball</li>
        <li className="w-[84px] h-6 bg-button-yellow py-[3px] pr-[19px] pl-[18px] duration-100 hover:scale-105 cursor-pointer">Badminton</li>
        <li className="w-16 h-6 bg-button-aqua py-[3px] px-[17px] duration-100 hover:scale-105 cursor-pointer">Boxing</li>
        <li className="w-[55px] h-6 bg-button-blue py-[3px] pr-[11px] pl-3 duration-100 hover:scale-105 cursor-pointer">Esports</li>
        <div className="flex w-[58px] h-6 gap-[10px]">
          <button className="w-6 h-6 bg-breaking-color opacity-60 flex items-center justify-center duration-100 hover:scale-105 hover:opacity-100">
            <LeftArrow />
          </button>
          <button className="w-6 h-6 bg-breaking-color flex items-center justify-center duration-100 hover:scale-105">
            <RightArrow />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default SportBar;

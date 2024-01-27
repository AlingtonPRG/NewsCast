import { LeftArrow, RightArrow } from "../../Constants";

const LifeStyleBar = () => {
  return (
    <div className="w-full h-[42px] mb-[25px] flex relative border-b border-b-base-text font-oswald">
      <span className="w-[140px] h-[1px] bg-breaking-color absolute -bottom-[1px]"></span>
      <div className="w-[140px] h-9">
        <h4 className="text-breaking-color font-medium text-2xl leading-[35.57px]">
          Life Style
        </h4>
      </div>
      <ul className="ms-[355px] flex text-white pt-[5px] pb-[13px]">
        <li className="h-6 font-normal text-xs leading-[17.78px] py-[3px] px-2 bg-button-red ms-3 cursor-pointer duration-100 hover:scale-105">
          All
        </li>
        <li className=" h-6 font-normal text-xs leading-[17.78px] py-[3px] px-3 bg-button-purple ms-3 cursor-pointer duration-100 hover:scale-105">
          Travel
        </li>
        <li className=" h-6 font-normal text-xs leading-[17.78px] py-[3px] pr-[11px] pl-[10px] bg-button-green ms-[13px] cursor-pointer duration-100 hover:scale-105">
          Recipes
        </li>
        <li className="w-[95px] h-6 font-normal text-xs leading-[17.78px] py-[3px] pr-[14px] pl-[9px] bg-button-blue ms-3 cursor-pointer duration-100 hover:scale-105">
          Health & Fitness
        </li>
        <li className=" h-6 font-normal text-xs leading-[17.78px] py-[3px] pr-[15px] pl-4 bg-button-yellow ms-3 cursor-pointer duration-100 hover:scale-105">
          Music
        </li>
        <div className="ms-[15px] flex gap-[10px]">
          <button className="w-6 h-6 bg-breaking-color flex items-center justify-center duration-100 hover:scale-105 opacity-60 hover:opacity-100">
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

export default LifeStyleBar;

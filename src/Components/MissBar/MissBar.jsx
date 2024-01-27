import { DownArrow } from "../../Constants";

const MissBar = () => {
  return (
    <div className="w-full h-[43px] mb-6 flex border-b border-b-base-text relative">
      <span className="absolute w-[140px] h-[1px] bg-breaking-color -bottom-[1px]"></span>
      <div className="w-[97px] h-9">
        <h2 className="text-breaking-color text-2xl leading-[35.57px] font-oswald font-medium">
          Don&apos;t Miss
        </h2>
      </div>
      <ul className="flex pt-2 pb-[14px] gap-3 font-oswald text-white ms-[201px]">
        <li className="w-7 bg-button-red text-xs font-normal leading-[17.78px] pt-[1px] px-2 pb-0.5 cursor-pointer duration-100 hover:scale-105">
          All
        </li>
        <li className="w-[68px] bg-button-purple leading-[17.78px] font-normal text-xs pt-[1px] pr-[15px] pb-0.5 pl-4 cursor-pointer duration-100 hover:scale-105">
          Lifestyle
        </li>
        <li className="w-[50px] font-normal text-xs leading-[17.78px] pt-[1px] pr-3 pb-0.5 pl-[11px] bg-button-green cursor-pointer duration-100 hover:scale-105">
          Vogue
        </li>
        <li className="w-[111px] bg-button-blue text-xs font-normal leading-[17.78px] pt-[1px] pr-5 pb-0.5 pl-[19px] cursor-pointer duration-100 hover:scale-105">
          Health & Fitness
        </li>
        <li className="w-[57px] bg-button-yellow text-xs font-normal leading-[17.78px] pt-[1px] px-[15px] pb-0.5 cursor-pointer duration-100 hover:scale-105">
          Travel
        </li>
        <li className="w-16 bg-button-aqua text-xs font-normal leading-[17.78px] pt-[1px] px-[14px] pb-0.5 cursor-pointer duration-100 hover:scale-105">
          Gadgets
        </li>
        <li className="w-[55px] bg-button-blue text-xs font-normal leading-[17.78px] pt-[1px] pr-[14px] pb-0.5 pl-[14px] cursor-pointer duration-100 hover:scale-105">
          World
        </li>
        <li className="relative flex gap-[1px] w-[55px] bg-button-dark text-xs font-normal leading-[17.78px] pt-[1px] pr-1 pb-[1px] pl-[14px] cursor-pointer duration-100 hover:scale-105">
          More
          <div className="absolute -bottom-0.5 right-0">
            <DownArrow />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MissBar;

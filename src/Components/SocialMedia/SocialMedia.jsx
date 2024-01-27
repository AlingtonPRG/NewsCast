import {
  FacebookIcon,
  InstaIcon,
  YouTubeIcon,
  TwitterIcon,
  BEicon,
  DribbleIcon,
} from "../../Constants";
import Image26 from "../../assets/images/Image26.svg";

const SocialMedia = () => {
  return (
    <div className="w-[270px] mt-2">
      <div className="w-full h-[39px] relative border-b border-b-base-text mb-[25px]">
        <span className="absolute -bottom-[1px] w-[72px] h-[1px] bg-breaking-color"></span>
        <h4 className="text-breaking-color font-medium text-sm font-oswald leading-[20.75px]">
          Stay Connected
        </h4>
      </div>
      <ul className="flex flex-wrap gap-[10px] mb-[25px]">
        <li className="w-[130px] h-10 bg-button-blue font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <FacebookIcon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
        <li className="w-[130px] h-10 bg-button-dark-purple font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <InstaIcon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
        <li className="w-[130px] h-10 bg-button-dark-red font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <YouTubeIcon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
        <li className="w-[130px] h-10 bg-button-aqua font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <TwitterIcon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
        <li className="w-[130px] h-10 bg-darker font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <BEicon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
        <li className="w-[130px] h-10 bg-button-pink font-sofia text-white flex duration-100 hover:scale-105 cursor-pointer">
          <div className="py-3 ps-[10px]">
            <DribbleIcon />
          </div>
          <div className="w-[35px] h-[19px] ps-[13px] font-medium text-[8px] leading-[8px] pt-3 pb-[9px]">
            <p className="pb-[3px]">1500</p>
            <p>Followers</p>
          </div>
        </li>
      </ul>
      <div className="w-[270px] h-[290px] relative cursor-pointer duration-100 hover:scale-105">
        <div className="absolute top-0 left-0">
          <img src={Image26} alt="" />
        </div>
        <div className="absolute py-[122px] px-[112px] font-lora text-white text-4xl leading-[42.19px]">
          Ad
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

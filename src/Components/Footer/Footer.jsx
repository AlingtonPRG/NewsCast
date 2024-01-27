import {
  BigFacebook,
  BigInstagram,
  BigTwitter,
  BigYouTube,
} from "../../Constants";
import Image39 from "../../assets/images/Image39.svg";
import Image40 from "../../assets/images/Image40.svg";
import Image41 from "../../assets/images/Image41.svg";
import Image42 from "../../assets/images/Image42.svg";
import Image43 from "../../assets/images/Image43.svg";
import Image44 from "../../assets/images/Image44.svg";

import LogoWhite from "../../assets/images/WhiteLogo.svg";
const Footer = () => {
  return (
    <div className="w-full h-[355px] bg-base-text">
      <div className="w-[1170px] h-full m-auto flex">
        <div>
          <img className="pt-11 pb-[31px]" src={LogoWhite} alt="" />
          <div className="w-[270px] text-white font-sofia me-[29px]">
            <p className="w-[250px] h-[61px] font-normal text-sm leading-[20.73px] mb-[35px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
              pellentesque dictum posuere id diam rutrum.
            </p>
            <div className="flex gap-[25px]">
              <div className="cursor-pointer duration-100 hover:scale-105">
                <BigFacebook />
              </div>
              <div className="cursor-pointer duration-100 hover:scale-105">
                <BigTwitter />
              </div>
              <div className="cursor-pointer duration-100 hover:scale-105">
                <BigInstagram />
              </div>
              <div className="cursor-pointer duration-100 hover:scale-105">
                <BigYouTube />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[270px] h-[223px] mt-[50px] me-[31px]">
          <div className="relative w-full h-[34px] border-b border-b-white mb-[13px]">
            <span className="w-[70px] h-[1px] bg-breaking-color absolute -bottom-[1px]"></span>
            <h4 className="font-oswald font-normal text-2xl leading-[24.22px] text-white">
              Photo Gallery
            </h4>
            <h4></h4>
          </div>
          <div className="flex flex-wrap gap-[7px] w-[269px]">
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image39}
              alt=""
            />
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image40}
              alt=""
            />
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image41}
              alt=""
            />
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image42}
              alt=""
            />
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image43}
              alt=""
            />
            <img
              className="cursor-pointer duration-100 hover:scale-105"
              src={Image44}
              alt=""
            />
          </div>
        </div>
        <div className="w-[270px] h-[122px] mt-11 me-[30px]">
          <div className="relative w-full h-10 border-b border-b-white mb-6">
            <span className="absolute -bottom-[1px] w-[70px] h-[1px] bg-breaking-color"></span>
            <h4 className="font-normal font-oswald text-2xl leading-[35.57px] text-white">
              Tags
            </h4>
          </div>
          <div className="font-sofia text-white leading-[14px] text-sm font-normal">
            <div className="mb-2.5 w-[270px] ">
              <button className="w-16 h-6 bg-breaking-color py-[5px] px-1.5 me-1 duration-100 hover:scale-105">
                Football
              </button>
              <button className="w-[57px] h-6 bg-button-blue py-[5px] px-1.5 me-1 duration-100 hover:scale-105">
                Cricket
              </button>
              <button className="w-[63px] h-6 bg-button-purple py-[5px] px-[5px] me-[9px] duration-100 hover:scale-105">
                Covid 19
              </button>
              <button className="w-[69px] h-6 bg-button-yellow py-[5px] pr-1.5 pl-[5px] duration-100 hover:scale-105">
                Life Style
              </button>
            </div>
            <div className="w-[259px]">
              <button className="w-[105px] h-6 bg-[#FFB8B8] py-[5px] pr-1 pl-1.5 me-1 duration-100 hover:scale-105">
                Tranding News
              </button>
              <button className="w-[83px] h-6 bg-button-aqua py-[5px] pr-1 pl-1.5 me-2 duration-100 hover:scale-105">
                Technology
              </button>
              <button className="w-[59px] h-6 bg-[#4281FF] py-[5px] px-2.5 duration-100 hover:scale-105">
                Travel
              </button>
            </div>
          </div>
        </div>
        <div className="w-72 h-[211px] mt-11">
          <div className="relative w-[270px] h-10 pe-[18px] border-b mb-[23px]">
            <span className="absolute -bottom-[1px] bg-breaking-color w-[70px] h-[1px]"></span>
            <h4 className="text-white font-oswald font-normal text-2xl leading-[35.57px]">
              Stay In Touch
            </h4>
          </div>
          <div className="w-full h-[42px] font-sofia text-white font-normal text-sm leading-[20.87px] mb-4">
            To be updated with all the latest news, offers and special
            announcements.
          </div>
          <div>
            <input className="w-[270px] h-10 focus:outline-none py-2.5 pr-[82px] pl-[83px] font-sofia font-normal text-xs leading-[19.67px] mb-[10px]" type="email" placeholder="Your email address" />
            <button className="w-[270px] h-10 bg-breaking-color py-[5px] pr-[93px] pl-[94px] text-white font-sofia font-bold text-lg leading-[29.5px]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

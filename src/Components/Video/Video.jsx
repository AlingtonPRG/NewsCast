import VideoBar from "../VideoBar/VideoBar";
import Video1 from "../../assets/images/Video1.svg";
import Video2 from "../../assets/images/Video2.svg";
import Video3 from "../../assets/images/Video3.svg";
import Video4 from "../../assets/images/Video4.svg";
import { VideoPlay, VideoPlayMini } from "../../Constants";

const Video = () => {
  return (
    <div className="w-[1170px] h-[768px] m-auto mb-[50px]">
      <div className="w-[870px] h-full">
        <VideoBar />
        <div className="w-full h-[400px] relative cursor-pointer duration-100 hover:scale-[1.01] mb-[25px]">
          <div className="absolute top-0 left-0">
            <img src={Video1} alt="" />
          </div>
          <div className="absolute top-[92px] right-[384px] left-">
            <VideoPlay />
          </div>
          <div className="absolute bottom-[51px] left-[25px] w-[529px] h-[118px] text-white">
            <div className="w-[144px] h-3">
              <p className="font-normal font-sofia text-xs leading-[12.108px]">
                Craig Bator - 27 Dec 2020
              </p>
            </div>
            <div className="w-full h-[106px]">
              <h4 className="font-oswald font-medium leading-[53.35px] text-4xl">
                Play This Game for Free on Epic Store This Weekend
              </h4>
            </div>
          </div>
          <div className="w-[59px] h-[21px] bg-button-red font-normal text-sm leading-[14px] font-sofia absolute top-[25px] left-[25px] text-white pt-1 pb-[3px] px-[9px]">
            Esport
          </div>
        </div>
        <ul className="w-full h-[283px] flex gap-[30px]">
          <li className="w-[270px] h-full text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="relative w-full h-[200px] mb-[25px]">
              <div className="absolute top-0 left-0">
                <img src={Video2} alt="" />
              </div>
              <div className="absolute top-[81px] right-[116px] left-[116px] bottom-[81px]">
                <VideoPlayMini />
              </div>
              <div className="absolute top-[25px] left-[25px] bg-button-aqua w-[59px] h-[21px] font-sofia font-normal text-sm leading-[14px] text-white pt-1 pb-[3px] px-[9px]">
                Esport
              </div>
            </div>
            <div className="w-[270px] h-[58px]">
              <p className="pb-1.5 font-normal text-[10px] leading-[10.09px]">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="font-oswald font-medium text-sm leading-[20.75px]">
                At Value-Focused Hotels, the Free Breakfast Gets Bigger
              </h4>
            </div>
          </li>
          <li className="w-[270px] h-full text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="relative w-full h-[200px] mb-[25px]">
              <div className="absolute top-0 left-0">
                <img src={Video3} alt="" />
              </div>
              <div className="absolute top-[81px] right-[116px] left-[116px] bottom-[81px]">
                <VideoPlayMini />
              </div>
              <div className="absolute top-[25px] left-[25px] bg-[#26387A] w-[59px] h-[21px] font-sofia font-normal text-sm leading-[14px] text-white pt-1 pb-[3px] px-[9px]">
                Esport
              </div>
            </div>
            <div className="w-[270px] h-[58px]">
              <p className="pb-1.5 font-normal text-[10px] leading-[10.09px]">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="font-oswald font-medium text-sm leading-[20.75px]">
                Failure is the condiment that gives success its flavor
              </h4>
            </div>
          </li>
          <li className="w-[270px] h-full text-base-text cursor-pointer duration-100 hover:scale-105">
            <div className="relative w-full h-[200px] mb-[25px]">
              <div className="absolute top-0 left-0">
                <img src={Video4} alt="" />
              </div>
              <div className="absolute top-[81px] right-[116px] left-[116px] bottom-[81px]">
                <VideoPlayMini />
              </div>
              <div className="absolute top-[25px] left-[25px] bg-[#FB8282] w-[59px] h-[21px] font-sofia font-normal text-sm leading-[14px] text-white pt-1 pb-[3px] px-[9px]">
                Esport
              </div>
            </div>
            <div className="w-[270px] h-[58px]">
              <p className="pb-1.5 font-normal text-[10px] leading-[10.09px]">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="font-oswald font-medium text-sm leading-[20.75px]">
                Les nouveaux maillots du Real Madrid pour la saison
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Video;

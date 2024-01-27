import { SportBar } from "./SportBar";
import Image20 from "../../assets/images/Image20.svg";
import Image21 from "../../assets/images/Image21.svg";
import Image22 from "../../assets/images/Image22.svg";
import Image23 from "../../assets/images/Image23.svg";
import Image24 from "../../assets/images/Image24.svg";
import Image25 from "../../assets/images/Image25.svg";

const Sports = () => {
  return (
    <div className="w-[870px] h-full">
      <SportBar />
      <div className="flex">
        <div className="w-[393px] h-[413px] duration-100 hover:scale-105 cursor-pointer me-[30px]">
          <div className="relative w-full h-[250px] mb-[25px]">
            <div className="mb-[25px] absolute top-0 left-0">
              <img src={Image20} alt="" />
            </div>
            <div className="absolute top-[25px] left-[25px] w-14 h-[21px] bg-button-green font-normal text-xs leading-3 text-white pt-[5px] pr-[9px] pb-1 pl-2">
              Cricket
            </div>
          </div>
          <div className="font-sofia text-base-text">
            <p className="w-[144px] h-3 leading-[12.108px] text-xs font-normal mb-3">
              <span className="text-dark">Craig Bator - </span>27 Dec 2020
            </p>
            <h4 className="w-[393px] h-[54px] font-oswald text-lg font-medium leading-[26.68px] mb-3">
              Solskjaer dismisses Klopp comments on Man Utd penalty record
            </h4>
            <p className="font-[250] text-sm leading-[15.55px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              lobortis augue condimentum maecenas. Metus at in fames vitae
              posuere ut vel vulputate ...
            </p>
          </div>
        </div>
        <ul>
          <li className="w-[327px] h-[70px] mb-[17px] flex gap-[14px] font-oswald duration-100 hover:scale-105 cursor-pointer">
            <div>
              <img src={Image21} alt="" />
            </div>
            <div className="text-base-text">
              <p className="text-[10px] font-normal leading-[10.09px] pt-1 pb-[6px] font-sofia">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="w-[223px] h-11 font-normal text-[15px] leading-[22.23px]">
                South Africa hammer injury-hit Sri Lanka Player
              </h4>
            </div>
          </li>
          <li className="w-[343px] h-[70px] mb-[17px] flex gap-[14px] font-oswald duration-100 hover:scale-105 cursor-pointer">
            <div>
              <img src={Image22} alt="" />
            </div>
            <div className="text-base-text">
              <p className="text-[10px] font-normal leading-[10.09px] pt-[7px] pb-[3px] font-sofia">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="w-[239px] h-11 font-normal text-[15px] leading-[22.23px]">
                Southee-lead New Zealand have Pakistan on the ropes
              </h4>
            </div>
          </li>
          <li className="w-[362px] h-[70px] mb-[17px] flex gap-[14px] font-oswald duration-100 hover:scale-105 cursor-pointer">
            <div>
              <img src={Image23} alt="" />
            </div>
            <div className="text-base-text">
              <p className="text-[10px] font-normal leading-[10.09px] pt-[7px] pb-[5px] font-sofia">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="w-[258px] h-11 font-normal text-[15px] leading-[22.23px]">
                The only thing that overcomes hard luck is hard work
              </h4>
            </div>
          </li>
          <li className="w-[365px] h-[70px] mb-[17px] flex gap-[14px] font-oswald duration-100 hover:scale-105 cursor-pointer">
            <div>
              <img src={Image24} alt="" />
            </div>
            <div className="text-base-text">
              <p className="text-[10px] font-normal leading-[10.09px] pt-[7px] pb-[3px] font-sofia">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="w-[261px] h-11 font-normal text-[15px] leading-[22.23px]">
                Success is not a good teacher failure makes you humble
              </h4>
            </div>
          </li>
          <li className="w-[341px] h-[70px] mb-[17px] flex gap-[14px] font-oswald duration-100 hover:scale-105 cursor-pointer">
            <div>
              <img src={Image25} alt="" />
            </div>
            <div className="text-base-text">
              <p className="text-[10px] font-normal leading-[10.09px] py-[5px] font-sofia">
                <span className="text-dark">Craig Bator - </span>27 Dec 2020
              </p>
              <h4 className="w-[237px] h-11 font-normal text-[15px] leading-[22.23px]">
                Rahane-led India bury ghosts of Adelaide at Melbourne
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sports;

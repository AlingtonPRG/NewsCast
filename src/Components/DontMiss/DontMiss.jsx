import { MissBar } from "../MissBar";
import Image5 from "../../assets/images/Image5.svg";
import Image6 from "../../assets/images/Image6.svg";
import Image7 from "../../assets/images/Image7.svg";
import Image8 from "../../assets/images/Image8.svg";
import Image9 from "../../assets/images/Image9.svg";
import Image10 from "../../assets/images/Image10.svg";

const DontMiss = () => {
  return (
    <div className="w-[870px] h-full">
      <MissBar />
      <div className="flex w-full h-full font-sofia text-base-text">
        <div className="w-[394px] h-[399px] me-[30px] duration-100 cursor-pointer hover:scale-105">
          <img src={Image5} alt="" />
          <div className="mt-[25px]">
            <p className="text-[10px] text-base-text font-normal leading-[10.09px] mb-[6px]">
              <span className="text-dark">Craig Bator - </span>
              27 Dec 2020
            </p>
            <div className="w-[394px] h-[54px]">
              <h3 className="font-medium text-lg leading-[26.68px] font-oswald">
                Now Is the Time to Think About Your Small Business Success
              </h3>
            </div>
            <div className="w-[350px] h-12">
              <p className="font-[250] text-sm leading-[15.55px] opacity-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate....
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="font-oswald">
            <li className="flex gap-[19px] w-[365px] h-[70px] mb-4 duration-100 hover:scale-105 cursor-pointer">
              <div>
                <img src={Image6} alt="" />
              </div>
              <div className="text-base-text pt-[5px]">
                <p className="font-normal text-[10px] font-sofia leading-[10.09px]">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dec 2020
                </p>
                <div className="w-64 h-11">
                  <h4 className="font-normal text-[15px] leading-[22.23px] capitalize">
                    Penn’s expanding political climate gears up fo 2020 election
                  </h4>
                </div>
              </div>
            </li>
            <li className="flex gap-[19px] w-[333px] h-[70px] mb-4 duration-100 hover:scale-105 cursor-pointer">
              <div>
                <img src={Image7} alt="" />
              </div>
              <div className="text-base-text pt-[5px]">
                <p className="font-normal text-[10px] font-sofia leading-[10.09px]">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dec 2020
                </p>
                <div className="w-56 h-11">
                  <h4 className="font-normal text-[15px] leading-[22.23px] capitalize">
                    Things to Look For in a Financial Trading Platform
                  </h4>
                </div>
              </div>
            </li>
            <li className="flex gap-[19px] w-[380px] h-[70px] mb-4 duration-100 hover:scale-105 cursor-pointer">
              <div>
                <img src={Image8} alt="" />
              </div>
              <div className="text-base-text pt-[5px]">
                <p className="font-normal text-[10px] font-sofia leading-[10.09px]">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dec 2020
                </p>
                <div className="w-[271px] h-11">
                  <h4 className="font-normal text-[15px] leading-[22.23px] capitalize">
                    The only thing that overcomes hard luck is hard work
                  </h4>
                </div>
              </div>
            </li>
            <li className="flex gap-[19px] w-[378px] h-[70px] mb-4 duration-100 hover:scale-105 cursor-pointer">
              <div>
                <img src={Image9} alt="" />
              </div>
              <div className="text-base-text pt-[5px]">
                <p className="font-normal text-[10px] font-sofia leading-[10.09px]">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dec 2020
                </p>
                <div className="w-[269px] h-11">
                  <h4 className="font-normal text-[15px] leading-[22.23px] capitalize">
                    Success is not a good teacher failure makes you humble
                  </h4>
                </div>
              </div>
            </li>
            <li className="flex gap-[19px] w-[378px] h-[70px] mb-4 duration-100 hover:scale-105 cursor-pointer">
              <div>
                <img src={Image10} alt="" />
              </div>
              <div className="text-base-text pt-[5px]">
                <p className="font-normal text-[10px] font-sofia leading-[10.09px]">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dec 2020
                </p>
                <div className="w-[269px] h-11">
                  <h4 className="font-normal text-[15px] leading-[22.23px] capitalize">
                    At Value-Focused Hotels, the Free Breakfast Gets Bigger
                  </h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DontMiss;

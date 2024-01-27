import { LeftArrow, RightArrow } from "../../Constants";
import Image16 from "../../assets/images/Image16.svg";
import Image17 from "../../assets/images/Image17.svg";
import Image18 from "../../assets/images/Image18.svg";
import Image19 from "../../assets/images/Image19.svg";

const Entertaiment = () => {
  return (
    <div className="w-full h-[642px] mb-[50px]">
      <div className="w-[1170px] h-full m-auto">
        <div className="w-full h-[42px] flex justify-between font-oswald border-b border-b-base-text relative mb-[25px]">
          <span className="absolute w-[140px] h-[1px] -bottom-[1px] left-0 bg-breaking-color"></span>
          <div className="w-[133px] h-[36px] pb-[6px]">
            <h4 className="text-breaking-color font-medium text-2xl leading-[35.57px]">
              Entertainment
            </h4>
          </div>
          <div className="w-[58px] h-6 flex gap-2.5 pt-[6px] pb-3">
            <button className="w-6 h-6 bg-breaking-color flex items-center justify-center opacity-60 duration-100 hover:scale-105 hover:opacity-100">
              <LeftArrow />
            </button>
            <button className="w-6 h-6 bg-breaking-color flex items-center justify-center duration-100 hover:scale-105">
              <RightArrow />
            </button>
          </div>
        </div>
        <div className="w-full h-[575px]">
          <div className="w-full h-[450px] relative duration-100 hover:scale-[1.01] cursor-pointer mb-[25px]">
            <div className="w-full h-full absolute top-0 right-0 bottom-0  left-0">
              <img src={Image16} alt="" />
            </div>
            <div className="w-20 h-6 bg-button-blue absolute top-[25px] left-[25px] font-sofia font-normal text-sm leading-[14px] text-white py-[5px] pe-[5px] ps-[7px]">
              Hollywood
            </div>
            <div className="absolute bottom-[85px] left-[30px] text-white">
              <div className="w-[603px] h-9">
                <h4 className="font-oswald text-2xl leading-[35.57px] font-bold">
                  Amanda Seyfried became ‘really obsessed’ with ghost stories
                </h4>
              </div>
              <div className="mt-[29px] relative">
                <span className="w-20 h-[1px] bg-breaking-color absolute bottom-12"></span>
                <p className="font-normal text-lg leading-[22.61px] w-[526px] h-[46px]">
                  Hollywood actress Amanda Seyfried has recalled the time when
                  she became obsessed with ghost stories
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px]">
            <ul className="flex font-sofia">
              <li className="w-[333px] h-[100px] relative flex text-base-text me-[68px]">
                <div className="w-[130px] h-full">
                  <img src={Image17} alt="" />
                </div>
                <div className="absolute top-[7px] left-[6px] w-[50px] h-4 bg-button-blue text-[8px] leading-[8px] text-white py-1 pr-[6px] pl-[5px]">
                  Hollywood
                </div>
                <div className="ps-[17px]">
                  <p className="w-[120px] h-[10px] font-normal text-[10px] leading-[10.09px]">
                    <span className="text-dark font-semibold">
                      Craig Bator -{" "}
                    </span>
                    27 Dec 2020
                  </p>
                  <h4 className="w-[186px] h-11 font-oswald font-medium text-[15px] leading-[22.23px] pt-3">
                    Amanda Seyfried became ‘really obsessed’ with ghost stories
                  </h4>
                </div>
              </li>
              <li className="w-[342px] h-[100px] relative flex text-base-text me-[57px]">
                <div className="w-[130px] h-full">
                  <img src={Image18} alt="" />
                </div>
                <div className="absolute top-[7px] left-[6px] w-[50px] h-4 bg-button-aqua text-[8px] leading-[8px] text-white py-1 pr-[6px] pl-[5px]">
                  Bollywood
                </div>
                <div className="ps-[17px]">
                  <p className="w-[120px] h-[10px] font-normal text-[10px] leading-[10.09px]">
                    <span className="text-dark font-semibold">
                      Craig Bator -
                    </span>
                    27 Dec 2020
                  </p>
                  <h4 className="w-[195px] h-11 font-oswald font-medium text-[15px] leading-[22.23px] pt-3">
                    Irrfan Khan’s Last film “ The Song of Scorpions” to release
                    in 2021
                  </h4>
                </div>
              </li>
              <li className="w-[303px] h-[100px] relative flex text-base-text">
                <div className="w-[130px] h-full">
                  <img src={Image19} alt="" />
                </div>
                <div className="absolute top-[7px] left-[6px] w-[59px] h-4 bg-button-green text-[8px] leading-[8px] text-white py-1 pr-[3px] pl-1">
                  Entertainment
                </div>
                <div className="ps-[20px]">
                  <p className="w-[120px] h-[10px] font-normal text-[10px] leading-[10.09px]">
                    <span className="text-dark font-semibold">
                      Craig Bator -
                    </span>
                    27 Dec 2020
                  </p>
                  <h4 className="w-[153px] h-11 font-oswald font-medium text-[15px] leading-[22.23px] pt-3">
                    Apee Karim blessed with a daughter
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertaiment;

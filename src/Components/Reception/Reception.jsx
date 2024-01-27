import Image1 from "../../assets/images/Image1.svg";
import Image2 from "../../assets/images/Image2.svg";
import Image3 from "../../assets/images/Image3.svg";
import Image4 from "../../assets/images/Image4.svg";

const Reception = () => {
  return (
    <div className="w-full h-[570px] mb-[50px]">
      <div className="w-[1170px] h-full m-auto font-sofia text-white flex">
        <div className="w-[670px] h-full relative duration-100 hover:scale-[1.01] cursor-pointer">
          <div className="absolute top-0 right-0-0 bottom-0-0 left-0">
            <img src={Image1} alt="" />
          </div>
          <div className="w-[54px] h-[22px] bg-button-blue absolute top-[25px] left-[25px] text-[10px] font-normal leading-[10px] flex justify-center items-center">
            Business
          </div>
          <div className="w-[478px] absolute bottom-[25px] left-[25px]">
            <p className="font-normal text-xs leading-[12.108px] mb-[6px]">
              Craig Bator - 27 Dec 2020
            </p>
            <h4 className="text-4xl leading-[53.35px] font-oswald capitalize">
              After all is said and done, more is done
            </h4>
          </div>
        </div>
        <div>
          <div className="ms-[15px] flex flex-wrap mb-[15px]">
            <div className="relative w-[235px] h-[278px] duration-100 hover:scale-[1.01] cursor-pointer">
              <div className="absolute top-0 right-0 bottom-0 left-0">
                <img src={Image2} alt="" />
              </div>
              <div className="w-[54px] h-[22px] bg-button-yellow absolute top-[25px] left-[25px] text-[10px] font-normal leading-[10px] flex justify-center items-center">
                Business
              </div>
              <div className="w-[165px] absolute bottom-[25px] left-[25px]">
                <p className="text-[10px] leading-[10.09px] font-normal mb-[6px]">
                  Craig Bator - 27 Dec 2020
                </p>
                <h4 className="text-sm capitalize leading-[20.75px] font-oswald">
                  They’re back! Kennedy Darling named to return to
                </h4>
              </div>
            </div>
            <div className="relative w-[235px] h-[278px] ms-[15px] duration-100 hover:scale-[1.01] cursor-pointer">
              <div className="absolute top-0 right-0 bottom-0 left-0">
                <img src={Image3} alt="" />
              </div>
              <div className="w-[54px] h-[22px] bg-button-blue absolute top-[25px] left-[25px] text-[10px] font-normal leading-[10px] flex justify-center items-center">
                Business
              </div>
              <div className="w-[165px] absolute bottom-[25px] left-[25px]">
                <p className="text-[10px] leading-[10.09px] font-normal mb-[6px]">
                  Craig Bator - 27 Dec 2020
                </p>
                <h4 className="text-sm capitalize leading-[20.75px] font-oswald">
                  Swiss authorities say Uber drivers should
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[485px] h-[278px] relative ms-[15px] duration-100 hover:scale-[1.01] cursor-pointer">
            <div className="absolute top-0 right-0 bottom-0 left-0">
              <img src={Image4} alt="" />
            </div>
            <div className="w-[54px] h-[22px] bg-button-aqua absolute top-[25px] left-[25px] text-[10px] font-normal leading-[10px] flex justify-center items-center">
              Business
            </div>
            <div className="absolute bottom-[25px] left-[25px] w-[295px]">
              <p className="text-xs leading-[12.108px] font-normal">Craig Bator - 27 Dec 2020</p>
              <h4 className="text-2xl leading-[35.57px] font-oswald">Tourism in Dubai is booming by international tourist</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reception;

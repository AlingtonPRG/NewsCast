import Image27 from "../../assets/images/Image27.svg";
import Image28 from "../../assets/images/Image28.svg";
import Image29 from "../../assets/images/Image29.svg";
import Image30 from "../../assets/images/Image30.svg";
import Image31 from "../../assets/images/Image31.svg";
import Image32 from "../../assets/images/Image32.svg";
import LifeStyleBar from "../LifeStyleBar/LifeStyleBar";

const LifeStyle = () => {
  return (
    <div className="w-[870px] h-full">
      <LifeStyleBar />
      <div className="w-full h-[657px] flex gap-[30px]">
        <div className="w-[420px] h-full font-sofia text-base-text">
          <div className="w-full h-[425px] mb-[25px] cursor-pointer duration-100 hover:scale-105">
            <div className="relative w-full h-[250px] mb-[25px]">
              <div className="absolute top-0 left-0">
                <img src={Image27} alt="" />
              </div>
              <div className="absolute top-[25px] left-[25px] bg-button-yellow w-[97px] h-[21px] font-normal text-xs leading-3 text-white pt-[5px] pr-[5px] pb-1 pl-1">
                Health & Fitness
              </div>
            </div>
            <div>
              <p className="font-normal text-xs leading-[12.11px] pb-1.5">
                <span className="text-dark">Craig Bator - </span>
                27 Dev 2020
              </p>
              <h4 className="w-[420px] h-[72px] text-2xl font-medium font-oswald capitalize pb-3">
                ‘Institutional delivery vital for reducing maternal and neonatal
                deaths’
              </h4>
              <p className="w-[350px] h-12 font-[250] text-sm leading-[15.55px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate ...
              </p>
            </div>
          </div>
          <div className="w-[356px] h-[209px]">
            <div className="w-[355px] h-[92px] mb-[23px] flex cursor-pointer duration-100 hover:scale-105">
              <div className="w-[120px] h-[90px]">
                <img src={Image29} alt="" />
              </div>
              <div className="ps-3">
                <p className="font-normal text-[10px] leading-[10.09px] pt-1 pb-1.5">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dev 2020
                </p>
                <h4 className="w-[223px] h-[72px] font-oswald font-normal text-2xl leading-[35.57px]">
                  Best things you can do on a solo mountain climb
                </h4>
              </div>
            </div>
            <div className="w-[356px] h-[92px] flex cursor-pointer duration-100 hover:scale-105">
              <div className="w-[120px] h-[90px]">
                <img src={Image31} alt="" />
              </div>
              <div className="ps-3">
                <p className="font-normal text-[10px] leading-[10.09px] pt-1 pb-1.5">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dev 2020
                </p>
                <h4 className="w-[224px] h-[72px] font-oswald font-normal text-2xl leading-[35.57px]">
                  Creative decorationg with houseplants
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[420px] h-full font-sofia text-base-text">
          <div className="w-full h-[425px] mb-[25px] cursor-pointer duration-100 hover:scale-105">
            <div className="relative w-full h-[250px] mb-[25px]">
              <div className="absolute top-0 left-0">
                <img src={Image28} alt="" />
              </div>
              <div className="absolute top-[25px] left-[25px] bg-button-green w-[97px] h-[21px] font-normal text-xs leading-3 text-white pt-[5px] pr-[5px] pb-1 pl-1">
                Health & Fitness
              </div>
            </div>
            <div>
              <p className="font-normal text-xs leading-[12.11px] pb-1.5">
                <span className="text-dark">Craig Bator - </span>
                27 Dev 2020
              </p>
              <h4 className="w-[419px] h-[72px] text-2xl font-oswald font-medium capitalize pb-3">
                Being self-controlled child may lead to healthier middle-age
              </h4>
              <p className="w-[350px] h-12 font-[250] text-sm leading-[15.55px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus lobortis augue condimentum maecenas. Metus at in fames
                vitae posuere ut vel vulputate ...
              </p>
            </div>
          </div>
          <div className="w-[356px] h-[209px]">
            <div className="w-[346px] h-[92px] mb-[23px] flex cursor-pointer duration-100 hover:scale-105">
              <div className="w-[120px] h-[90px]">
                <img src={Image30} alt="" />
              </div>
              <div className="ps-3">
                <p className="font-normal text-[10px] leading-[10.09px] pt-1 pb-1.5">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dev 2020
                </p>
                <h4 className="w-[214px] h-[72px] font-oswald font-normal text-2xl leading-[35.57px]">
                  How to use basic design principles your home
                </h4>
              </div>
            </div>
            <div className="w-[355px] h-[92px] flex cursor-pointer duration-100 hover:scale-105">
              <div className="w-[120px] h-[90px]">
                <img src={Image32} alt="" />
              </div>
              <div className="ps-3">
                <p className="font-normal text-[10px] leading-[10.09px] pt-1 pb-1.5">
                  <span className="text-dark">Craig Bator - </span>
                  27 Dev 2020
                </p>
                <h4 className="w-[223px] h-[72px] font-oswald font-normal text-2xl leading-[35.57px]">
                  How to burn calories with pleasant activites
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;

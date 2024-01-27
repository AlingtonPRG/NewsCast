import Image11 from "../../assets/images/Image11.svg";
import Image12 from "../../assets/images/Image12.svg";
import Image13 from "../../assets/images/Image13.svg";
import Image14 from "../../assets/images/Image14.svg";
import Image15 from "../../assets/images/Image15.svg";

const Categories = () => {
  return (
    <div className="w-[271px] h-[472px] mt-2">
      <div className="mb-[19px]">
        <ul className="font-oswald flex justify-between border-b border-b-base-text pb-[14px] relative">
          <span className="absolute w-[72px] h-[1px] bg-breaking-color -bottom-[0.5px] left-0"></span>
          <li className="font-medium text-sm leading-[20.75px] text-breaking-color duration-100 cursor-pointer hover:scale-105">
            Recent
          </li>
          <li className="font-medium text-sm leading-[20.75px] duration-100 hover:scale-105 text-base-text cursor-pointer hover:text-breaking-color">
            Trending
          </li>
          <li className="font-medium text-sm leading-[20.75px] duration-100 hover:scale-105 text-base-text cursor-pointer hover:text-breaking-color">
            Most Views
          </li>
        </ul>
      </div>
      <div>
        <ul className="font-oswald">
          <li className="w-[221px] h-[70px] flex gap-3 mb-[17px] duration-100 cursor-pointer hover:scale-105">
            <div>
              <img src={Image11} alt="" />
            </div>
            <div className="w-[139px] h-[34px]">
              <p className="font-sofia text-[8px] font-normal leading-[8.072px] pb-[6px] text-base-text">
                <span className="text-dark">Craig Bator - </span>
                27 Dec 2020
              </p>
              <h4 className="text-[15px] font-normal leading-[16.78px]">
                Gluten-Free Almond Cake with Berries
              </h4>
            </div>
          </li>
          <li className="w-[224px] h-[70px] flex gap-3 mb-[17px] duration-100 cursor-pointer hover:scale-105">
            <div>
              <img src={Image12} alt="" />
            </div>
            <div className="w-[142px] h-[34px]">
              <p className="font-sofia text-[8px] font-normal leading-[16.78px] pb-[6px] text-base-text">
                <span className="text-dark">Craig Bator - </span>
                27 Dec 2020
              </p>
              <h4 className="text-[15px] font-normal leading-[16.78px]">
                Enjoy My Favourite Molten Chocolate Cake
              </h4>
            </div>
          </li>
          <li className="w-[244px] h-[70px] flex gap-3 mb-[17px] duration-100 cursor-pointer hover:scale-105">
            <div>
              <img src={Image13} alt="" />
            </div>
            <div className="w-[135px] h-[34px]">
              <p className="font-sofia text-[8px] font-normal leading-[16.78px] pb-[6px] text-base-text">
                <span className="text-dark">Craig Bator - </span>
                27 Dec 2020
              </p>
              <h4 className="text-[15px] font-normal leading-[22.23px]">
                They back return to you Kennedy Darlings
              </h4>
            </div>
          </li>
          <li className="w-[244px] h-[70px] flex gap-3 mb-[17px] duration-100 cursor-pointer hover:scale-105">
            <div>
              <img src={Image14} alt="" />
            </div>
            <div className="w-[162px] h-[34px]">
              <p className="font-sofia text-[8px] font-normal leading-[16.78px] text-base-text">
                <span className="text-dark">Craig Bator - </span>
                27 Dec 2020
              </p>
              <h4 className="text-[15px] font-normal leading-[22.23px]">
                The art of racing with speed Motor GP
              </h4>
            </div>
          </li>
          <li className="w-[231px] h-[70px] flex gap-3 mb-[17px] duration-100 cursor-pointer hover:scale-105">
            <div>
              <img src={Image15} alt="" />
            </div>
            <div className="w-[149px] h-[34px]">
              <p className="font-sofia text-[8px] font-normal leading-[16.78px] text-base-text">
                <span className="text-dark">Craig Bator - </span>
                27 Dec 2020
              </p>
              <h4 className="text-[15px] font-normal leading-[22.23px]">
                Home team takes the win - NBA 2020
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

import { useState, useEffect } from "react";
import {
  WeatherIcon,
  ClockIcon,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "../../Constants";

const MainBar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchCurrentDate = () => {
      const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const today = new Date();
      const formattedDate = today.toLocaleDateString("en-US", dateOptions);
      setCurrentDate(formattedDate);
    };

    fetchCurrentDate();
  }, []);

  return (
    <div className="w-full h-[42px] shadow-mainBar mb-10">
      <div className="w-[1170px] h-full m-auto flex font-sofia text-base-text">
        <div className="h-[18px]">
          <div className="flex my-3">
            <div className="pt-0.5">
              <WeatherIcon />
            </div>
            <p className="font-normal text-xs leading-3 pt-1 pb-0.5 ps-[7px]">
              15<sup>°C</sup>
            </p>
            <p className="font-normal text-xs leading-3 pt-1 pb-0.5 ps-2">
              New York
            </p>
          </div>
        </div>
        <div className="h-4 mt-[14px] mb-3 ms-4">
          <div className="flex gap-3">
            <div className="">
              <ClockIcon />
            </div>
            <p className="font-normal text-xs leading-3 pt-0.5">
              {currentDate}
            </p>
          </div>
        </div>
        <button className="w-[96px] h-[42px] bg-breaking-color text-white text-xs font-normal leading-3 py-[15px] px-[7px] text-center ms-[14px] duration-100 hover:scale-105">
          Breaking News
        </button>
        <div className="ms-[17px] text-xs leading-3 font-normal pt-4 pb-[14px]">
          Indonesia says located black box recorders from crashed plane
        </div>
        <div className="ms-[274px] flex gap-2.5 pt-[11px] pb-[7px] bg-white">
          <div className="cursor-pointer duration-100 hover:scale-110">
            <Facebook />
          </div>
          <div className="cursor-pointer duration-100 hover:scale-110">
            <Twitter />
          </div>
          <div className="cursor-pointer duration-100 hover:scale-110">
            <Instagram />
          </div>
          <div className="cursor-pointer duration-100 hover:scale-110">
            <YouTube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;

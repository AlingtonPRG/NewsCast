import { FollowUs } from "../../Constants";
import Image34 from "../../assets/images/Image34.svg";
import Image35 from "../../assets/images/Image35.svg";
import Image36 from "../../assets/images/Image36.svg";
import Image37 from "../../assets/images/Image37.svg";
import Image38 from "../../assets/images/Image38.svg";

const Mix = () => {
  return (
    <div className="w-full h-[288px] relative flex gap-[20px] justify-center mb-[10px]">
      <img
        className="scale-[1.075] duration-100 hover:scale-[1.09]"
        src={Image34}
        alt=""
      />
      <img
        className="scale-[1.075] duration-100 hover:scale-[1.09]"
        src={Image35}
        alt=""
      />
      <div className="relative img">
        <img
          className="scale-[1.075] duration-100 hover:scale-[1.09]"
          src={Image36}
          alt=""
        />
        <div className="absolute top-[71px] right-[71px] duration-100 cursor-pointer instagram">
          <FollowUs />
        </div>
      </div>
      <img
        className="scale-[1.075] duration-100 hover:scale-[1.09]"
        src={Image37}
        alt=""
      />
      <img
        className="scale-[1.075] duration-100 hover:scale-[1.09]"
        src={Image38}
        alt=""
      />
    </div>
  );
};

export default Mix;

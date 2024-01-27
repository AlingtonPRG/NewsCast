import { DownArrow, SearchIcon } from "../../Constants";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] mb-[25px]">
      <div className="w-[1170px] h-full m-auto bg-base-text font-oswald text-white flex justify-between">
        <div className="flex h-full font-normal text-xl leading-[29.64px]">
          <div className="relative h-full mr-[21px] pe-[17px] ps-4 bg-breaking-color pt-[15px] duration-100 hover:scale-110">
            <button>Home</button>
            <span className="w-[25px] h-[1px] bg-white absolute top-[50px] right-[25px] bottom-2.5 left-[25px]"></span>
          </div>
          <ul className="flex gap-[25px] py-[15px]">
            <li className="cursor-pointer duration-100 hover:scale-110">
              International
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Sports
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Opinion
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Business
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Youth
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Entertainment
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110">
              Lifestyle
            </li>
            <li className="cursor-pointer duration-100 hover:scale-110 flex gap-0.5">
              Pages{" "}
              <div className="py-[3px]">
                <DownArrow />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-[172px] h-full opacity-30 flex ps-4 pe-8 border-s border-s-white font-sofia items-center justify-between">
          <div className="w-[136px] h-full flex items-center justify-between">
            <input
              className="bg-transparent w-[47px] h-full focus:outline-none text-[10px] font-light leading-[10px] py-[1px]"
              type="text"
              placeholder="Search for"
            />
            <div className="">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

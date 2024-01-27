import { Categories } from "./Components/Categories";
import { DontMiss } from "./Components/DontMiss";
import { Entertaiment } from "./Components/Entertaiment";
import { LifeStyle } from "./Components/LifeStyle";
import { Updates } from "./Components/Updates";
import { MainBar } from "./Components/MainBar";
import { Navbar } from "./Components/Navbar";
import { Reception } from "./Components/Reception";
import { SocialMedia } from "./Components/SocialMedia";
import { Sports } from "./Components/Sports";
import { Logo } from "./Constants";
import { Purchase } from "./Components/Purchase";
import { Video } from "./Components/Video";
import { Mix } from "./Components/Mix";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <div>
      <MainBar />
      <div className="w-[1170px] h-[62px] m-auto mb-[39px]">
        <div className="w-[247px] h-[62px] cursor-pointer duration-100 hover:scale-105">
          <Logo />
        </div>
      </div>
      <Navbar />
      <Reception />
      <div className="flex gap-[30px] w-[1170px] h-[481px] m-auto mb-[35px]">
        <DontMiss />
        <Categories />
      </div>
      <Entertaiment />
      <div className="flex gap-[30px] w-[1170px] h-[527px] mb-[25px] m-auto">
        <Sports />
        <SocialMedia />
      </div>
      <div className="flex w-[1170px] h-[724px] mb-12 m-auto">
        <LifeStyle />
        <Updates />
      </div>
      <Purchase />
      <Video />
      <Mix />
      <Footer />
    </div>
  );
};

export default App;

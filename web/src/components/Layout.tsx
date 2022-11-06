import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedBannerTop from "./AdvancedBanner";

const Home = () => {
  return (
    <>
      <ParallaxProvider>
        <AdvancedBannerTop />

        <div className="center full">
          <h1 className="headline gray">Or Else.</h1>
        </div>
      </ParallaxProvider>
    </>
  );
};
export default Home;

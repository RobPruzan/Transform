import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedBannerTop from "./AdvancedBanner";


const Home = () => {
  return (
    <>
      <ParallaxProvider>
        <AdvancedBannerTop />
        <body className = "blueBody">
        <div className="center-full">
          <div className = "blue">
            <h1 className="headline">WELCOME TO TRANSFORM</h1>
            <br></br>
            <h3 className="head">Your AI Professor</h3>
            <img src = "https://i.ibb.co/dP8wTR4/image-22.png" className="brain"></img>
            <p className="ai"> Choose what you want to study below...</p>
          </div>
        </div>
        <section className= "container2">
          <div className="class_card">
            <h2 className = "class_name"> Art </h2>
            <a href = ""><img src="https://i.postimg.cc/Bnv2SBfP/image-7.png" alt="" /></a>
          </div>
          <div className="class_card">
            <h2 className = "class_name"> Finance </h2>
            <a href =""><img src="https://i.postimg.cc/DyhwPvC2/image-6.png" alt="" /></a>
          </div>
          <div className="class_card">
            <h2 className = "class_name"> Programming </h2>
            <a href = ""><img src="https://i.postimg.cc/yYfC3stp/image-8.png" alt="" /></a>
          </div>
          <div className="class_card">
            <h2 className = "class_name"> Math </h2>
            <a href = ""><img src="https://i.postimg.cc/GpdP0nhr/image-9.png" alt="" /></a>
          </div>
        </section>
        </body>
        
      </ParallaxProvider>
    </>
  );
};
export default Home;

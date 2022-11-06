import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedBannerTop from "./AdvancedBanner";

const AboutUS = () => {
  return (
    <>
    <body className="page">
    <AdvancedBannerTop />
        <h1 id="heading">MEET THE UB HACKERS</h1>
        <section className="container">
            <div className="card">
                <div className="card-image card-1"></div>
                <h2>Robby Pruzen</h2>
                <p>Text</p>
                <a href="">marcomuy@buffalo.edu</a>
            </div>
            <div className="card">
                <div className="card-image card-2"></div>
                <h2>Joey Alessi</h2>
                <p>Text</p>
            </div>
            <div className="card">
                <div className="card-image card-3"></div>
                <h2>Marco Muya</h2>
                <p>Text</p>
            </div>
            <div className="card">
                <div className="card-image card-4"></div>
                <h2>Doniyor Uzbakitstan </h2>
                <p>Text</p>
            </div>
        </section>
    </body>
    
    </>
  );
};
export default AboutUS;


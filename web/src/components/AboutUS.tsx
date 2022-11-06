import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvancedBannerTop from "./AdvancedBanner";
import { Carousel } from "react-bootstrap";

const AboutUS = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1031661248493920316/1038793662831788082/20221106_071911.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1031661248493920316/1038793662085202032/20221106_065816.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1031661248493920316/1038793664090091600/20221106_072803.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <body className="page">
        <h1 id="heading">MEET THE UB HACKERS</h1>
        <section className="container">
            <div className="card">
                <img src="https://i.postimg.cc/CxP4tKnp/Ellipse-2.png" className="card-image card-1"></img>
                <h2>Robby Pruzen</h2>
                <p> Full Stack Developer
                </p>
                <a href="">robbye@buffalo.edu</a>
            </div>
            <div className="card">
                <img src ="https://cdn.discordapp.com/attachments/1027652133950062645/1038811788600426506/68939810995__6640CA00-0283-4917-9C53-BCAAFF11B370.jpg" className="card-image card-2"></img>
                <h2>Joey Alessi</h2>
                <p>Front End Developer</p>
                <a href="">jjalessi@buffalo.edu</a>
            </div>
            <div className="card">
                <img src="https://i.postimg.cc/wTByrQX3/Ellipse-6.png" className="card-image card-3"></img>
                <h2>Marco Muya</h2>
                <p>Software Developer</p>
                <a href="">marcomuy@buffalo.edu</a>
            </div>
            <div className="card">
                <img src="https://media.discordapp.net/attachments/1031661248493920316/1038810057212702810/IMG_1873.png?width=580&height=580" className="card-image card-4"></img>
                <h2>Doniyor Ismatilloev </h2>
                <p>Software Engineer</p>
                <a href="">doniyori@buffalo.edu</a>
            </div>
        </section>
    </body>
    
    </>
  );
};
export default AboutUS;


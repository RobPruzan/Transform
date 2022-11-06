import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
// import "../background.png";

export type Props = {
  content?: string;
};

const AdvancedBannerTop = ({ content }: Props) => {
  const background: BannerLayer = {
    image:"https://wallpaperaccess.com/full/1445467.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div style={{ margin: "100px" }} className="inset center">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    ),
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, gradientOverlay]}
      className="full"
    ></ParallaxBanner>
  );
};

export default AdvancedBannerTop;

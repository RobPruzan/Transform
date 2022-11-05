import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
// import "../background.png";

export type Props = {
  content?: string;
};

const AdvancedBannerTop = ({ content }: Props) => {
  const background: BannerLayer = {
    image:
      "https://img.freepik.com/free-vector/ocean-sea-waves-ripples-water-background_1017-37268.jpg?w=2000&t=st=1667679183~exp=1667679783~hmac=dc692c68db1c510c918d21967ec4faebe1d9de766f22931ebd7b893297fd4721",
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
      <div className="inset center">
        <h1 color="white">Get back to your world. Fast.</h1>
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

import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className, ref }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LazyLoadImage
      className={`${className} ${loading && "animate-pulse"}`}
      alt=""
      effect="blur"
      src={src}
      ref={ref}
      beforeLoad={() => setLoading(true)}
      onLoad={() => setLoading(false)}
    />
  );
};

export default Img;

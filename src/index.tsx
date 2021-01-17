import lottie, { AnimationConfig } from "lottie-web";
import { useEffect, useRef } from "react";

import React from "react";

export interface LottieLoaderProps extends Omit<AnimationConfig, "container"> {
  animationData: any;
  className?: string;
}

const LottieLoader = ({ className, ...props }: LottieLoaderProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lottie.loadAnimation({
      ...props,
      container: divRef.current as HTMLDivElement,
    });
  }, []);

  return <div className={className ? className : ""} ref={divRef}></div>;
};

export default LottieLoader;

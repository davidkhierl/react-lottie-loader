import lottie, {
  AnimationConfig,
  AnimationItem,
  LottiePlayer as AnimationPlayer,
} from "lottie-web";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import React from "react";

export interface LottieLoaderProps extends Omit<AnimationConfig, "container"> {
  animationData: any;
  className?: string;
  style?: React.HTMLAttributes<HTMLDivElement>["style"];
}

export type LottiePlayer =
  | (AnimationPlayer & { animationItem?: AnimationItem })
  | undefined;

const LottieLoader = forwardRef<LottiePlayer, LottieLoaderProps>(
  ({ className, style, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const lottieRef = useRef<LottiePlayer>();

    useEffect(() => {
      if (!containerRef.current) return;

      const animationItem = lottie.loadAnimation({
        ...props,
        container: containerRef.current,
      });

      lottieRef.current = { ...lottie, animationItem };

      return () => {
        lottieRef.current?.destroy();
        lottieRef.current?.animationItem?.destroy();
      };
    }, [props.animationData]);

    useImperativeHandle(
      ref,
      () => {
        return lottieRef.current;
      },
      [lottieRef.current]
    );

    return (
      <div
        ref={containerRef}
        className={className ? className : ""}
        style={style}
      ></div>
    );
  }
);

LottieLoader.displayName = "LottieLoader";

export default LottieLoader;

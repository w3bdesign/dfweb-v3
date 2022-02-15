import { ReactNode } from "react";

export interface IAnimateProps {
    children: ReactNode;
    cssClass?: string;
  }
  
  export interface IAnimateWithDelayProps {
    children: ReactNode;
    cssClass?: string;
    delay: number;
  }
  
  export interface IAnimateAtOnceWithDelayProps {
    children: ReactNode;
    cssClass?: string;
    delay: number;
    staggerDelay?: number;
    animateAtOnce: boolean;
  }
  
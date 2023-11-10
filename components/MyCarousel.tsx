"use client";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

interface MyCarouselProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "video" | "image";
  src: string;
}

export const MyCarousel: React.FC<MyCarouselProps> = ({ variant, src }) => {
  return (
    <>
      {variant == "video" ? (
        <Carousel.Slide className="flex justify-center items-center">
          <ReactPlayer url={src} controls width={"100%"} height={"auto"} />
        </Carousel.Slide>
      ) : (
        <Carousel.Slide className="flex justify-center items-center">
          <Image src={src} alt={"Image"} width={480} height={480} />
        </Carousel.Slide>
      )}
    </>
  );
};

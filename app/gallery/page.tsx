"use client";

import { Carousel } from "@mantine/carousel";
import { MyCarousel } from "@/components/MyCarousel";
import React from "react";

export default function Gallery() {
  return (
    <div className="mt-40 px-3">
      <h1 className="z-10 text-7xl font-clash-display text-center mb-20">
        Our Moments
      </h1>
      <div className="flex flex-col space-y-20">
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            CSUI 2023 BACK TO SCHOOL
          </h1>
          <div className="bg-neutral-200/75 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="video"
                src="/assets/videos/gallery/csui23-back-to-school/1/video.mp4"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-back-to-school/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-back-to-school/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-back-to-school/3.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            CSUI 2023 GATHERING
          </h1>

          <div className="bg-neutral-200/75 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/4.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/5.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/csui23-gathering/6.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            FIRST YELLOW MEET
          </h1>

          <div className="bg-neutral-200/75 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/first-yellow-meet/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/first-yellow-meet/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/first-yellow-meet/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/first-yellow-meet/4.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            LAST DAY PADUS WITH PAK DIBYO
          </h1>
          <div className="bg-neutral-200/75 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/last-day-padus-with-pak-dibyo/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/last-day-padus-with-pak-dibyo/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/last-day-padus-with-pak-dibyo/3.jpg"
              />
            </Carousel>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center font-clash-display py-2 px-5 mb-5">
            PSAF
          </h1>

          <div className="bg-neutral-200/75 rounded-2xl md:px-4">
            <Carousel
              withIndicators
              slideGap="xl"
              className="mx-4 min-[500px]:max-w-sm md:max-w-3xl"
              loop
            >
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/1.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/2.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/3.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/4.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/5.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/6.jpg"
              />
              <MyCarousel
                variant="image"
                src="/assets/images/gallery/psaf/7.jpg"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

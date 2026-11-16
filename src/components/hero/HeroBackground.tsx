"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import { HeroSlide } from "./types";

import "swiper/css";
import "swiper/css/effect-fade";

type Props = {
  slides: HeroSlide[];
  setSwiperInstance: (swiper: SwiperType) => void;
  setActiveIndex: (index: number) => void;
};

export default function HeroBackground({
  slides,
  setSwiperInstance,
  setActiveIndex,
}: Props) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      speed={1300}
      loop
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      onSwiper={(swiper) => {
        setSwiperInstance(swiper);
        setActiveIndex(swiper.realIndex);
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
      className="h-full w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div className="relative h-full w-full overflow-hidden bg-[#10243A]">
            {/* IMAGE MOBILE */}
            <Image
              src={slide.imageMobile}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover md:hidden"
            />

            {/* IMAGE DESKTOP */}
            <Image
              src={slide.imageDesktop}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className={`hidden object-cover md:block ${
                index === 0
                  ? "object-[center_35%]"
                  : index === 1
                    ? "object-[center_25%]"
                    : "object-[center_40%]"
              }`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

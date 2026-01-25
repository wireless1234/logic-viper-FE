"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const logos = [
  {
    id: 1,
    image: "/images/ascompayBg.webp",
    image2: "/images/ascompay.webp",
  },
  {
    id: 2,
    image: "/images/bazaarBg.webp",
    image2: "/images/bazaar.webp",
  },
  {
    id: 3,
    image: "/images/epicrandBg.webp",
    image2: "/images/epicrand.webp",
  },
  {
    id: 4,
    image: "/images/unclevBg.webp",
    image2: "/images/unclev.webp",
  },
  {
    id: 5,
    image: "/images/ascomnetBg.webp",
    image2: "/images/ascomnet.webp",
  },
];

const LogoCarousel = () => {
  return (
    <div className="p-2.5">
      <div className="py-10 lg:py-25">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full "
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-video relative items-center justify-center p-6 group">
                      <Image
                        alt="logo"
                        src={logo.image}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />

                      <Image
                        alt="logo"
                        src={logo.image2}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="
    object-cover
    absolute inset-0
    translate-y-full
    opacity-0
    transition-all duration-500 ease-in-out
    group-hover:translate-y-0
    group-hover:opacity-100
  "
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;

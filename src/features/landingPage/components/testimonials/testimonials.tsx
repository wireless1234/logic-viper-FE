"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import TestimonialCard from "./testimonialCard";
import { testimonialData } from "@/lib/testimonialData";
import Autoplay from "embla-carousel-autoplay";
import type { CarouselApi } from "@/components/ui/carousel";

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [centerIndex, setCenterIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selected = api.selectedScrollSnap();

      setCenterIndex(selected);
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section
      id="testimonials"
      className="bg-[url('/images/testimonials.webp')] bg-cover bg-no-repeat bg-center"
    >
      <div className=" max-w-330 mx-auto py-25">
        <div className="p-2.5">
          <div className="max-w-165 mx-auto text-center mb-25">
            <h2 className="mb-3.75 text-white leading-12 text-[40px] font-bold shadow-sm font-serif">
              What Client&apos;s Say About Us
            </h2>
            <p className="text-[15px] text-white shadow-sm font-rubik">
              At Logic Viper, we pride ourselves on delivering cutting-edge
              cybersecurity solutions that protect businesses and ensure
              compliance. But don't just take our word for it—here's what some
              of our valued clients have to say about their experience with us.
              From proactive threat management to comprehensive compliance
              services, our clients trust us to safeguard their digital assets,
              allowing them to focus on what matters most growing their
              business.
            </p>
          </div>
          <div className="mt-5">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full md:px-12 lg:px-0"
            >
              <CarouselContent className="-ml-1">
                {testimonialData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-3/4 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-2">
                          <TestimonialCard
                            index={index}
                            item={item}
                            isCenter={index === centerIndex}
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
      </div>
    </section>
  );
};

export default Testimonials;

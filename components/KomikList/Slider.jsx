"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ api }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {api?.data.slice(0, 5).map((data, index) => {
          return (
            <CarouselItem key={index} className="m-2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square border-none items-center justify-center p-8 bg-gray-100 rounded-lg">
                    <Image
                      src={data.image}
                      alt="..."
                      width={1500}
                      height={1500}
                    />
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;

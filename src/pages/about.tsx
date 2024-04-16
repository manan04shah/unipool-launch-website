import React from "react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import "../app/globals.css";
import Navbar from "./navbar";

export default function About() {
    return (
        <div className="relative h-dvh w-full flex justify-center items-center overflow-hidden">
            <Navbar />
            <div className="h-[80vh] w-full flex justify-center items-center align-middle">
                <Carousel>
                    <CarouselContent className="md:w-[30vw] w-[60vw]">
                        <CarouselItem className="flex flex-col justify-center items-center">
                            <Image
                                src="/host.svg"
                                alt="About"
                                width={250}
                                height={250}
                                quality={100}
                            />
                            <h2 className="text-white text-xl font-bold text-center pt-5">
                                Host a carpool!
                            </h2>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col justify-center items-center">
                            <Image
                                src="/Available-rides.svg"
                                alt="About"
                                width={250}
                                height={250}
                                quality={100}
                            />
                            <h2 className="text-white text-xl font-bold text-center pt-5">
                                Join an available ride
                            </h2>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col justify-center items-center">
                            <Image
                                src="/interested-riders.svg"
                                alt="About"
                                width={250}
                                height={250}
                                quality={100}
                            />
                            <h2 className="text-white text-xl font-bold text-center pt-5">
                                View requests to join your carpool
                            </h2>
                        </CarouselItem>
                        <CarouselItem className="flex flex-col justify-center items-center">
                            <Image
                                src="/reject.svg"
                                alt="About"
                                width={250}
                                height={250}
                                quality={100}
                            />
                            <h2 className="text-white text-xl font-bold text-center pt-5">
                                Accept or reject requests based on your
                                preference
                            </h2>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div
                className="absolute bottom-0 left-0 right-0 md:w-full w-[350%] h-full bg-bottom bg-no-repeat bg-contain -z-10"
                style={{ backgroundImage: "url('/purple-ellipse.svg')" }}
            ></div>
        </div>
    );
}

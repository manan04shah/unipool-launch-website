import React from "react";
import Image from "next/image";
import "../app/globals.css"
import Link from "next/link";
import "../app/globals.css"


export default function Landing() {
    return (
        <div className="h-dvh w-full flex md:flex-row flex-col">
            <div className="left-box bg-white w-full order-2 md:order-1 md:w-1/2 h-full flex flex-col justify-center items-center p-10">
                <div className="text-div mt-5 w-full">
                    <div className="top-text flex">
                        <h1 className="text-4xl font-extrabold text-text-purple">
                            UniPool
                        </h1>
                        <div className="car-gif-box w-full pl-4 justify-center items-center flex">
                            <Image
                                src="/car-purple.svg"
                                alt="Car GIF"
                                width={50}
                                height={25}
                                quality={100}
                                className="car-gif-2 scale-x-[-1]"
                            />
                        </div>
                    </div>
                    <h2 className="text-xl text-text-purple">
                        A carpooling app - by university students, for
                        university students.
                    </h2>
                </div>
                <div className="download-button pt-5">
                    <Link href="/download">
                        <button className="bg-text-purple text-white rounded-full px-4 py-2 w-[65vw] md:w-[15vw]">
                            Download
                        </button>
                    </Link>
                </div>
                <div className="acm-vit pt-5">
                    <h3 className="text-text-purple text-sm font-semibold">
                        Made with 💜 by ACM-VIT
                    </h3>
                </div>
            </div>
            <div className="right-box order-1 md:order-2 bg-main-grey w-full md:w-1/2 h-full flex justify-center items-center p-10">
                <Image
                    src="/unipool-main-logo.svg"
                    alt="Landing"
                    width={1000}
                    height={1000}
                    quality={100}
                />
            </div>
        </div>
    );
}

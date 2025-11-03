import React from "react";

import Link from "next/link";
import Image from "next/image";
import { getAllSpeakers } from "../_lib/services";
import dynamic from "next/dynamic";

const SharedItemList = dynamic(() => import("./SharedItemList"));
const SharedSubFooter = dynamic(() => import("./SharedSubFooter"));

async function SpeakerContent() {
  const data = await getAllSpeakers();

  const speakerData = data.filter((s) => s.category === "speakers");
  return (
    <>
      <section className="max-w-[328px] md:max-w-[750px] lg:max-w-[1110px]  mx-auto flex flex-col-reverse w-full  h-full  gap-[4em] ">
        {speakerData.map((s, i) => {
          const {
            id,
            slug,
            description,
            name,
            new: isNew,
            image,
            categoryImage,
          } = s;
          const { mobile } = image;

          return (
            <div
              key={id}
              className={`${
                i % 2 === 1
                  ? "w-full rounded-md lg:flex lg:flex-row-reverse items-center lg:gap-[125px] gap-[1.5em] flex flex-col"
                  : "w-full rounded-md lg:flex lg:flex-row  items-center lg:gap-[125px] gap-[1.5em] flex flex-col"
              }`}
            >
              <Image
                src={categoryImage.desktop}
                alt={slug}
                width={540}
                height={560}
                className="lg:flex hidden"
              />
              <Image
                src={categoryImage.tablet}
                alt={slug}
                width={750}
                height={352}
                className=" hidden md:flex lg:hidden"
              />
              <Image
                src={mobile}
                alt={slug}
                width={540}
                height={560}
                className="flex md:hidden"
              />
              <div className="max-w-[445px] md:max-w-[572px]  flex flex-col gap-[2em] items-center justify-center w-full lg:items-start lg:justify-start">
                <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
                  <h1 className="font-normal text-[#D87D4A] text-[14px]">
                    {isNew && "NEW PRODUCT"}
                  </h1>
                  <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase text-center lg:text-left  max-w-[445px]">
                    {name}
                  </h3>
                </div>
                <p className="text-[15px] font-medium leading-[25px] text-center lg:text-left max-w-[445px] md:max-w-[572px]">
                  {description}
                </p>
                <Link
                  href={`/speakers/${slug}`}
                  className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
                  prefetch={false}
                >
                  see product
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <SharedItemList />
      <SharedSubFooter style=" max-w-[370px] md:max-w-[750px] lg:max-w-[1110px]  w-full  mx-auto  lg:h-[588px] h-[698px] md:h-[633px] rounded-md lg:flex lg:flex-row lg:gap-[9em] my-[2em] md:my-[2em] lg:my-[4em] flex flex-col gap-[1em] md:gap-[3em] " />
    </>
  );
}

export default SpeakerContent;

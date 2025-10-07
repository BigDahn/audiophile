import Image from "next/image";
import bg from "@/public/assets/home/desktop/image-hero.jpg";
import Link from "next/link";

import SharedItemList from "./SharedItemList";
import SharedSubFooter from "./SharedSubFooter";
import { getAllEarPhones } from "../_lib/services";

async function EarPhoneContent() {
  const data = await getAllEarPhones();

  const earphonesData = data.filter((s) => s.category === "earphones");
  return (
    <>
      <section className="max-w-[328px] lg:max-w-[1110px] mx-auto flex flex-col-reverse w-full  h-full  gap-[4em] ">
        {earphonesData.map((s, i) => {
          const { id, slug, description, name, new: isNew, image } = s;
          const { desktop, mobile, tablet } = image;

          return (
            <div
              key={id}
              className={`${
                i % 2 === 1
                  ? "w-full h-[560px]rounded-md lg:flex lg:flex-row-reverse items-center lg:gap-[125px] gap-[1.5em] flex flex-col"
                  : "w-full h-[560px]rounded-md lg:flex lg:flex-row  items-center lg:gap-[125px] gap-[1.5em] flex flex-col"
              }`}
            >
              <Image src={desktop} alt={slug} width={540} height={560} />
              <div className="max-w-[445px]  flex flex-col gap-[2em] items-center justify-center w-full lg:items-start lg:justify-start">
                <div className="flex flex-col gap-2 justify-center items-center lg:justify-start lg:items-start">
                  <h1 className="font-normal text-[#D87D4A] text-[14px]">
                    {isNew && "NEW PRODUCT"}
                  </h1>
                  <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase text-center lg:text-left">
                    {name}
                  </h3>
                </div>
                <p className="text-[15px] font-medium leading-[25px] text-center lg:text-left">
                  {description}
                </p>
                <Link
                  href={`/earphones/${slug}`}
                  className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
                >
                  see product
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <SharedItemList />
      <SharedSubFooter style=" max-w-[370px] lg:max-w-[1110px]  w-full  mx-auto  lg:h-[588px] h-[698px] rounded-md lg:flex lg:flex-row lg:gap-[9em] my-[1em] lg:my-[4em] flex flex-col gap-[1em]" />
    </>
  );
}

export default EarPhoneContent;

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
      <section className="max-w-[1110px] mx-auto flex flex-col w-full  h-full  gap-[4em]  ">
        {earphonesData.map((s, i) => {
          const { id, slug, description, name, new: isNew, image } = s;
          const { desktop, mobile, tablet } = image;

          return (
            <div
              key={id}
              className={`${
                i % 2 === 1
                  ? "w-full h-[560px]rounded-md flex flex-row-reverse items-center gap-[125px]"
                  : "w-full h-[560px]rounded-md flex  items-center gap-[125px]"
              }`}
            >
              <Image src={desktop} alt={slug} width={540} height={560} />
              <div className="max-w-[445px]  flex flex-col gap-[2em]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-normal text-[#D87D4A] text-[14px]">
                    {isNew && "NEW PRODUCT"}
                  </h1>
                  <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
                    {name}
                  </h3>
                </div>
                <p className="text-[15px] font-medium leading-[25px]">
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
      <SharedSubFooter style="max-w-[1110px]  w-full  mx-auto  h-[588px] rounded-md flex gap-[9em] my-[0.4em] " />
    </>
  );
}

export default EarPhoneContent;

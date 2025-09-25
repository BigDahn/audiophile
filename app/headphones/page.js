import Image from "next/image";
import bg from "@/public/assets/home/desktop/image-hero.jpg";
import Link from "next/link";
import SharedItemList from "../_components/SharedItemList";
import SharedSubFooter from "../_components/SharedSubFooter";
import { getAllHeadPhones } from "../_lib/services";
import Loading from "@/app/loading";
import { Suspense } from "react";

async function page() {
  const data = await getAllHeadPhones();

  const headphonesData = data.filter((s) => s.category === "headphones");

  console.log(headphonesData);
  return (
    <main className="grid gap-[7em] pb-[8em]  ">
      <div className="relative h-[336px]  flex items-center justify-start ">
        <div className="absolute inset-0 w-full h-[300px] ">
          <div className="bg-black w-full object-cover h-[336px] text-white flex text-center items-center justify-center">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] mt-20">
              HEADPHONES
            </h2>
          </div>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <section className="max-w-[1110px] mx-auto flex flex-col-reverse w-full  h-full  gap-[7em]  ">
          {headphonesData.map((s, i) => {
            const { id, slug, description, name, new: isNew, image } = s;
            const { desktop, mobile, tablet } = image;

            console.log(desktop);
            return (
              <div
                key={id}
                className={`${
                  i % 2 === 1
                    ? "w-full h-[560px]rounded-md flex flex-row-reverse items-center gap-[125px]"
                    : "w-full h-[560px]rounded-md flex  items-center gap-[125px]"
                }`}
              >
                <Image
                  // src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
                  src={desktop}
                  alt="speaker"
                  width={540}
                  height={560}
                />
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
                    href="\headphones"
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
        <SharedSubFooter />
      </Suspense>
    </main>
  );
}

export default page;

import Image from "next/image";

import Link from "next/link";
import SharedItemList from "../_components/SharedItemList";
import SharedSubFooter from "../_components/SharedSubFooter";
import { getAllSpeakers } from "../_lib/services";

async function page() {
  const data = await getAllSpeakers();

  return (
    <main className="grid gap-[7em] pb-[8em]  ">
      <div className="relative h-[336px]  flex items-center justify-start ">
        <div className="absolute inset-0 w-full h-[300px] ">
          <div className="bg-black w-full object-cover h-[336px] text-white flex text-center items-center justify-center">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] mt-20">
              SPEAKERS
            </h2>
          </div>
        </div>
      </div>
      <section className="max-w-[1110px] mx-auto flex flex-col w-full  h-full  gap-[7em]  ">
        <div className="w-full h-[560px]rounded-md flex items-center gap-[125px]">
          <Image
            src="/assets/shared/desktop/image-zx9-speaker.jpg"
            alt="speaker"
            width={540}
            height={560}
          />
          <div className="max-w-[445px] 0 flex flex-col gap-[2em]">
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-[#D87D4A] text-[14px]">
                NEW PRODUCT
              </h1>
              <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
                ZX9 <br /> SPEAKER
              </h3>
            </div>
            <p className="text-[15px] font-medium leading-[25px]">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <Link
              href="\speakers"
              className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
            >
              see product
            </Link>
          </div>
        </div>
        <div className="w-full h-[560px]rounded-md flex items-center gap-[125px]">
          <Image
            src="/assets/shared/desktop/image-zx7-speaker.jpg"
            alt="speaker"
            width={540}
            height={560}
            className="order-last"
          />
          <div className="max-w-[445px] 0 flex flex-col gap-[2em]">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
                ZX7 <br /> SPEAKER
              </h3>
            </div>
            <p className="text-[15px] font-medium leading-[25px]">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <Link
              href="\headphones"
              className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
            >
              see product
            </Link>
          </div>
        </div>
      </section>
      <SharedItemList />
      <SharedSubFooter />
    </main>
  );
}

export default page;

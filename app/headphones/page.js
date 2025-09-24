import Image from "next/image";
import bg from "@/public/assets/home/desktop/image-hero.jpg";
import Link from "next/link";
import SharedItemList from "../_components/SharedItemList";
import SharedSubFooter from "../_components/SharedSubFooter";

function page() {
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
      <section className="max-w-[1110px] mx-auto flex flex-col w-full  h-full  gap-[7em]  ">
        <div className="w-full h-[560px]rounded-md flex items-center gap-[125px]">
          <Image
            src="/assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
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
                XX99 Mark II Headphones
              </h3>
            </div>
            <p className="text-[15px] font-medium leading-[25px]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link
              href="\headphones"
              className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
            >
              see product
            </Link>
          </div>
        </div>
        <div className="w-full h-[560px]rounded-md flex items-center gap-[125px]">
          <Image
            src="/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
            alt="speaker"
            width={540}
            height={560}
            className="order-last"
          />
          <div className="max-w-[445px] 0 flex flex-col gap-[2em]">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
                XX99 Mark I Headphones
              </h3>
            </div>
            <p className="text-[15px] font-medium leading-[25px]">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link
              href="\headphones"
              className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center "
            >
              see product
            </Link>
          </div>
        </div>
        <div className="w-full h-[560px]rounded-md flex items-center gap-[125px]">
          <Image
            src="/assets/shared/desktop/image-xx59-headphones.jpg"
            alt="speaker"
            width={540}
            height={560}
          />
          <div className="max-w-[445px] 0 flex flex-col gap-[2em]">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
                XX59 Headphones
              </h3>
            </div>
            <p className="text-[15px] font-medium leading-[25px]">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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

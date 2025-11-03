import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className="relative h-screen  flex items-center justify-start">
      <div className="absolute inset-0   lg:w-full lg:h-full">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="hero"
          fill
          className="lg:object-cover lg:flex hidden"
          placeholder="blur"
          blurDataURL="..."
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <Image
          src="/assets/home/mobile/image-header.jpg"
          alt="hero"
          fill
          blurDataURL="..."
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover flex lg:hidden"
          placeholder="blur"
          priority
        />

        <div className="text-white relative w-full flex h-full items-center justify-start max-w-[1110px]  mx-auto   ">
          <div className=" max-w-[328px] md:max-w-[379px] m-auto lg:m-0 lg:max-w-[398px] flex flex-col text-center lg:text-left justify-center items-center lg:justify-start lg:items-start  gap-[1.8em]">
            <p className="font-normal text-[14px] tracking-[10px] leading-normal uppercase">
              New product
            </p>
            <h1 className="font-bold text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] tracking-[1.29px] uppercase md:tracking-[2px] text-[#ffffff]">
              XX99 Mark II Headphones
            </h1>
            <p className="font-medium text-[15px] leading-[25px] tracking-[0px] max-w-[349px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              href="\headphones\xx99-mark-two-headphones"
              className="uppercase bg-[#D87D4A] text-white w-[165px] h-[48px] flex items-center justify-center font-bold leading-normal tracking-[1px] text-[13px]"
              prefetch={false}
            >
              see product
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

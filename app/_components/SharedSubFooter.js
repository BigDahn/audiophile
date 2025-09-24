import Image from "next/image";

function SharedSubFooter() {
  return (
    <div className="max-w-[1110px]  w-full  mx-auto  h-[588px] rounded-md flex gap-[9em] my-[9em] ">
      <div className="flex flex-col justify-center max-w-[445px] gap-[2em]">
        <h3 className="font-bold text-[40px] uppercase leading-[44px] tracking-[1.43px]">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h3>
        <p className="font-medium text-[15px] leading-[25px] tracking-[0px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="w-[540px] relative aspect-square ">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="feeling"
          className="object-cover rounded-md"
          fill
        />
      </div>
    </div>
  );
}

export default SharedSubFooter;

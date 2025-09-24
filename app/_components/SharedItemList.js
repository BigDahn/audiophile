import Image from "next/image";

function SharedItemList() {
  return (
    <div className="max-w-[1110px] flex w-full  mx-auto justify-between h-[284px] items-end  my-[3em]">
      <div className="bg-[#F1F1F1] rounded-md  w-[350px] h-[204px] flex flex-col items-center justify-evenly  relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="headphone"
          width="210"
          height="160"
          className="absolute mb-[8em]"
        />
        <div className=" mt-[6em] flex flex-col gap-2">
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            HeadPhones
          </h3>
          <div className=" flex gap-2 items-center justify-center ">
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                width={5}
                alt="here"
                height={10}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] rounded-md  w-[350px] h-[204px] flex flex-col items-center justify-center relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="speakers"
          width="210"
          height="160"
          className="absolute mb-[8em]"
        />
        <div className=" mt-[6em] flex flex-col gap-2">
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            speakers
          </h3>
          <div className=" flex gap-2 items-center justify-center ">
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                width={5}
                alt="here"
                height={10}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] rounded-md  w-[350px] h-[204px] flex flex-col items-center justify-center relative">
        <Image
          src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="earphones"
          width="210"
          height="160"
          className="absolute mb-[8em]"
        />
        <div className=" mt-[6em] flex flex-col gap-2">
          <h3 className="font-bold text-[18px] text-black tracking-[1.29px] text-center uppercase">
            earphones
          </h3>
          <div className=" flex gap-2 items-center justify-center ">
            <p className="font-bold text-black text-[13px] tracking-[1px] uppercase">
              shop
            </p>
            <span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                width={5}
                alt="here"
                height={10}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedItemList;

import Loading from "@/app/loading";
import { Suspense } from "react";
import HeadPhoneContent from "../_components/HeadPhoneContent";

function page() {
  return (
    <main className="grid gap-[4em] pb-[4em]  ">
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
        <HeadPhoneContent />
      </Suspense>
    </main>
  );
}

export default page;

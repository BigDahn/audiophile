import { getAllEarPhones } from "../_lib/services";
import { Suspense } from "react";
import Loading from "../loading";
import EarPhoneContent from "../_components/EarPhoneContent";

function page() {
  return (
    <main className="grid gap-[5em] pb-[4em]  ">
      <div className="relative h-[336px]  flex items-center justify-start ">
        <div className="absolute inset-0 w-full h-[300px] ">
          <div className="bg-black w-full object-cover h-[336px] text-white flex text-center items-center justify-center">
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] mt-20">
              EARPHONES
            </h2>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <EarPhoneContent />
      </Suspense>
    </main>
  );
}

export default page;

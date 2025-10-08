import NavigateBack from "@/app/_components/NavigateBack";
import SingleProductDetails from "@/app/_components/SingleProductDetails";
import { getHeadPhoneBySlugName } from "@/app/_lib/services";
import Loading from "@/app/loading";
import React, { Suspense } from "react";

async function Page({ params }) {
  const data = await params;

  const speaker = await getHeadPhoneBySlugName(data.headPhoneSlug);
  return (
    <main className=" max-w-[328px] lg:max-w-[1110px]   items-center justify-center mx-auto lg:mx-auto flex flex-col w-full  h-full mt-[10em] gap-[3em] pb-[2em]  ">
      <NavigateBack />
      <Suspense fallback={<Loading />}>
        <SingleProductDetails data={speaker} />
      </Suspense>
    </main>
  );
}

export default Page;

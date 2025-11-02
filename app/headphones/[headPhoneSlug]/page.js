import NavigateBack from "@/app/_components/NavigateBack";
import SingleProductDetails from "@/app/_components/SingleProductDetails";
import { getHeadPhoneBySlugName } from "@/app/_lib/services";
import Loading from "@/app/loading";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const data = await params;

  const { name } = await getHeadPhoneBySlugName(data.headPhoneSlug);
  return {
    title: `${name}`,
  };
}

async function Page({ params }) {
  const data = await params;

  const headphone = await getHeadPhoneBySlugName(data.headPhoneSlug);
  return (
    <main className=" max-w-[328px]  md:max-w-[750px] lg:max-w-[1110px]   mx-auto flex flex-col w-full  h-full mt-[10em] gap-[3em] pb-[2em]  ">
      <NavigateBack />
      <Suspense fallback={<Loading />}>
        <SingleProductDetails data={headphone} />
      </Suspense>
    </main>
  );
}

export default Page;

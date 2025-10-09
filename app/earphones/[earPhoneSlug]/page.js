import NavigateBack from "@/app/_components/NavigateBack";
import SharedItemList from "@/app/_components/SharedItemList";
import SharedSubFooter from "@/app/_components/SharedSubFooter";
import SingleProductDetails from "@/app/_components/SingleProductDetails";
import useGoBack from "@/app/_hooks/useGoBack";
import { getEarphoneSlugName } from "@/app/_lib/services";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function Page({ params }) {
  const data = await params;

  const earPhone = await getEarphoneSlugName(data.earPhoneSlug);

  return (
    <main className=" max-w-[328px]  md:max-w-[750px] lg:max-w-[1110px]   mx-auto flex flex-col w-full  h-full mt-[10em] gap-[3em] pb-[2em]  ">
      <NavigateBack />
      <Suspense fallback={<Loading />}>
        <SingleProductDetails data={earPhone} />
      </Suspense>
    </main>
  );
}

export default Page;

import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./_components/Hero"), {
  loading: () => <Loading />,
});

const SharedItemList = dynamic(() => import("./_components/SharedItemList"), {
  loading: () => <Loading />,
});
const SharedSubFooter = dynamic(() => import("./_components/SharedSubFooter"), {
  loading: () => <Loading />,
});
const HomePageComponents = dynamic(
  () => import("./_components/HomePageComponents"),
  {
    loading: () => <Loading />,
  }
);

function page() {
  return (
    <div className="grid gap-[4em] lg:gap-[2em] pb-[2em] lg:pb-2 ">
      <Hero />
      <div className=" lg:max-w-[1110px] md:max-w-screen  flex-col flex items-center mx-auto">
        <SharedItemList />
        <HomePageComponents />

        <SharedSubFooter style=" max-w-[370px] md:max-w-[750px] lg:max-w-[1110px]  w-full  mx-auto  lg:h-[588px] h-[698px] md:h-[633px] rounded-md lg:flex lg:flex-row lg:gap-[9em] my-[2em] md:my-[2em] lg:my-[4em] flex flex-col gap-[1em] md:gap-[3em] " />
      </div>
    </div>
  );
}

export default page;

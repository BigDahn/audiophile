import Link from "next/link";

function NotFound() {
  return (
    <main>
      <section className="max-w-[328px] md:max-w-[750px] lg:max-w-[1110px]  mx-auto flex flex-col  py-[9em] gap-[3em] justify-center items-center">
        <h1 className="text-3xl font-semibold">This page could not be found</h1>
        <Link
          href="/"
          className="uppercase bg-[#D87D4A] text-white w-[160px] h-[48px] flex items-center justify-center font-bold leading-normal tracking-[1px] text-[13px] hover:bg-[#f5b591] transition-all ease-linear delay-100"
        >
          Go back home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;

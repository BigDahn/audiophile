import Image from "next/image";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Cart from "./Cart";

function Heading() {
  return (
    <>
      <header className=" fixed z-[9999]  w-full bg-black  ">
        <div className="flex  justify-between pb-[2.5em] pt-[2em]  border-b-[#ffff] border-b-2 max-w-[1110px] mx-auto z-[99999]">
          <Logo />
          <Navigation />
          <Cart />
        </div>
      </header>
    </>
  );
}

export default Heading;
{
  /* */
}

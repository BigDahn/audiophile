import NavigateBack from "../_components/NavigateBack";
import CartCheckout from "../_components/CartCheckout";

export const metadata = {
  title: "CheckOut",
};

function page() {
  return (
    <main className="w-screen  bg-[#F2F2F2] min-h-screen">
      <section className="max-w-[328px] md:max-w-[750px] lg:max-w-[1110px]  mx-auto flex flex-col  py-[9em] gap-[3em]">
        <NavigateBack />
        <CartCheckout />
      </section>
    </main>
  );
}

export default page;

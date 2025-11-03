"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "../_context/CartContainer";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Loading from "../loading";

const SharedItemList = dynamic(() => import("./SharedItemList"), {
  loading: () => <Loading />,
  ssr: false,
});

const SharedSubFooter = dynamic(() => import("./SharedSubFooter"), {
  loading: () => <Loading />,
  ssr: false,
});

function SingleProductDetails({ data }) {
  const { count, cart, dispatch } = useCart();
  const router = useRouter();

  const {
    id,
    slug,
    description,
    name,
    new: isNew,
    image,
    price,
    features,
    includes,
    gallery,
    others,
  } = data;
  const { desktop, mobile, tablet } = image;
  const { first, second, third } = gallery;

  const checks = cart?.find((s) => s.name === name)
    ? cart?.filter((s) => s.name === name)[0]?.quantity
    : count;

  const cartConfirm = cart?.find((s) => s.name === name);

  return (
    <section
      className="max-w-[328px] md:min-w-[750px] lg:max-w-[1110px] mx-auto flex flex-col w-full 
      h-full gap-[3em] md:gap-[7em]  "
    >
      {/* product details */}
      <div
        className={
          "w-full h-[560px]rounded-md flex flex-col md:flex-row   items-center justify-center  gap-[2em] lg:gap-[125px]"
        }
      >
        <Image
          src={desktop}
          alt={slug}
          width={540}
          height={560}
          className="rounded-md hidden lg:flex"
        />
        <Image
          src={tablet}
          alt={slug}
          width={281}
          height={480}
          className="rounded-md hidden md:flex lg:hidden"
        />
        <Image
          src={mobile}
          alt={slug}
          width={327}
          height={327}
          className="rounded-md flex md:hidden"
        />
        <div className="max-w-[445px]  flex flex-col gap-[3em]">
          <div className="flex flex-col gap-2 md:gap-[2em]">
            <h1 className="font-normal text-[#D87D4A] text-[14px]">
              {isNew && "NEW PRODUCT"}
            </h1>
            <h2 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] uppercase">
              {name}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-medium leading-[25px]">
              {description}
            </p>
            <p className="font-semibold">
              {" "}
              $ {new Intl.NumberFormat().format(price)}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[120px] h-[48px] bg-[#F1F1F1] flex items-center justify-between px-3">
              <button
                onClick={() => {
                  dispatch({ type: "decrease/cart", payload: name });
                  cartConfirm && toast.info(`${name} quantity decreased`);
                }}
              >
                -
              </button>
              <h2>{checks}</h2>
              <button
                onClick={() => {
                  dispatch({ type: "increase/cart", payload: name });
                  cartConfirm && toast.info(`${name} quantity increased`);
                }}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
              onClick={() => {
                const toastId = toast("", {
                  autoClose: false,
                  className: "invisible-toast",
                  hideProgressBar: true,
                  closeButton: false,
                });
                setTimeout(() => {
                  toast.dismiss(toastId);
                  toast.success(
                    cartConfirm
                      ? `${name} is removed from the cart`
                      : `${name} is added to the cart`
                  );
                  dispatch({
                    type: cartConfirm ? "remove/cart" : "add/cart",
                    payload: {
                      name: name,
                      quantity: count,
                      image: desktop,
                      price: price,
                    },
                  });
                }, 0);
                router.prefetch("/checkout");
              }}
            >
              {cartConfirm ? "Remove from cart" : " Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {/* Features and Includes */}

      <div className="flex flex-col lg:flex-row items-start gap-[1em] lg:gap-[120px] ">
        <article className="max-w-[635px] md:max-w-[750px] flex flex-col gap-[2em]">
          <h3 className="uppercase font-bold text-[32px] leading-[36px] tracking-[1.14px]">
            Features
          </h3>

          <div className="flex flex-col gap-3">
            {features.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </article>

        <div className="flex flex-col md:flex-row lg:flex-col md:justify-between  md:pr-[3em] pr-0 w-full gap-[2em]">
          <h2 className="uppercase font-bold text-[32px] leading-[36px] tracking-[1.14px]">
            In the box
          </h2>
          <div className="flex flex-col gap-[0.7em]">
            {includes.map((s) => {
              const { quantity, item } = s;

              return (
                <div key={item} className="flex gap-[0.5em] items-center">
                  <h3 className=" h-[25px] w-[18px text-[#D87D4A] text-[15px] font-bold leading-[25px]">
                    {quantity}x
                  </h3>
                  <h4 className="text-[15px] font-medium leading-[25px] text-black/70">
                    {item}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* preview */}

      <div className="grid md:grid-cols-[330px_600px] lg:grid-cols-[445px_auto] md:grid-rows-[177px_177px_368px] lg:grid-rows-[280px_280px_592px]  max-h-[756px] md:max-h-[370px] lg:max-h-[592px] gap-[1em]   lg:gap-[2em] ">
        <div className="md:row-start-1 ">
          <Image
            src={first.desktop}
            alt="first"
            width={445}
            height={280}
            className="rounded-md hidden lg:flex"
          />
          <Image
            src={first.mobile}
            alt="first"
            width={327}
            height={174}
            className="rounded-md flex md:hidden"
          />
          <Image
            src={first.tablet}
            alt="first"
            width={277}
            height={177}
            className="rounded-md hidden md:flex lg:hidden"
          />
        </div>
        <div className="">
          <Image
            src={second.desktop}
            alt="first"
            width={445}
            height={280}
            className="rounded-md hidden lg:flex"
          />
          <Image
            src={second.mobile}
            alt="first"
            width={327}
            height={174}
            className="rounded-md flex md:hidden"
          />
          <Image
            src={second.tablet}
            alt="first"
            width={277}
            height={177}
            className="rounded-md hidden md:flex lg:hidden"
          />
        </div>
        <div className="md:row-start-1 md:row-span-2 ">
          <Image
            src={third.desktop}
            alt="first"
            width={635}
            height={400}
            className="rounded-md hidden lg:flex"
          />
          <Image
            src={third.mobile}
            alt="first"
            width={327}
            height={368}
            className="rounded-md flex md:hidden"
          />
          <Image
            src={third.tablet}
            alt="first"
            width={395}
            height={368}
            className="rounded-md hidden md:flex lg:hidden"
          />
        </div>
      </div>

      {/* may also like */}

      <div className="grid md:grid-cols-3 gap-[2em]">
        {others.map((s) => {
          const { name, image, slug } = s;
          const { desktop, mobile, tablet } = image;

          const ser = slug.split("-");
          const set = ser[ser.length - 1];

          return (
            <div key={name} className="flex flex-col max-h-[471px] gap-6">
              <Image
                alt={name}
                src={desktop}
                width={350}
                height={318}
                className="hidden lg:flex"
              />
              <Image
                alt={name}
                src={tablet}
                width={223}
                height={318}
                className="hidden md:flex lg:hidden"
              />
              <Image
                alt={name}
                src={mobile}
                width={370}
                height={120}
                className="flex md:hidden"
              />
              <div className="flex flex-col justify-center items-center gap-4">
                <h3 className="font-bold text-[24px] tracking-[1.71px]">
                  {name}
                </h3>
                <Link
                  href={`/${set === "speaker" ? "speakers" : set}/${slug}`}
                  className="w-[160px] h-[48px] bg-[#D87D4A] text-white uppercase text-[13px] font-bold tracking-[1px] flex items-center justify-center"
                >
                  see product
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* shared sub-footer */}
      <SharedItemList />
      <SharedSubFooter style=" max-w-[370px] md:max-w-[750px] lg:max-w-[1110px]  w-full  mx-auto  lg:h-[588px] h-[698px] md:h-[633px] rounded-md lg:flex lg:flex-row lg:gap-[9em] my-[2em] md:my-[2em] lg:my-[4em] flex flex-col gap-[1em] md:gap-[3em] " />
    </section>
  );
}

export default SingleProductDetails;

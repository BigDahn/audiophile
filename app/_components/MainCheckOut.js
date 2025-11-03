"use client";
import dynamic from "next/dynamic";
import Loading from "../loading";

const CartCheckout = dynamic(() => import("../_components/CartCheckout"), {
  loading: () => <Loading />,
  ssr: false,
});

function MainCheckOut() {
  return <CartCheckout />;
}

export default MainCheckOut;

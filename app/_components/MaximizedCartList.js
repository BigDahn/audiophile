import Image from "next/image";
import React from "react";

function MaximizedCartList({ cart }) {
  return (
    <div>
      {cart.map((cart, index) => {
        const { image, name, quantity, price } = cart;
        const ItemName = name.split(" ");
        return (
          <div
            key={name}
            className="flex  items-start justify-between lg:gap-[3em] py-3  "
          >
            <div className="flex gap-1">
              <Image alt="property" src={image} width={50} height={50} />
              <div>
                <h3 className="font-bold">
                  {ItemName.splice(0, ItemName.length - 1).join(" ")}
                </h3>
                <h5 className="font-bold text-[14px] leading-[25px] tracking-[0px] text-gray-400">
                  $ {new Intl.NumberFormat().format(price)}
                </h5>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[15px] leading-[25px]">
                x{quantity}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MaximizedCartList;

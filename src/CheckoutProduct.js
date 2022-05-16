import React from "react";
import { useStateValue } from "./StateProvider.js";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  };

  return (
    <div className="flex mt-5 mb-5">
      <img className="object-contain w-1/2 h-48" src={image} alt="" />

      <div className="pl-5">
        <p className="text-lg font-bold">{title}</p>
        <p className="checkoutProduct__price">
          <small>₦</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromCart}
          className="mt-2.5 mb-2.5 transition ease-in-out delay-100 font-semibold text-white py-2 px-3 hover:translate-y-1 hover:scale-105 bg-sky-600 border-none w-1/2 p-4 hover:text-white hover:bg-red-500 hover:shadow-2xl duration-300"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

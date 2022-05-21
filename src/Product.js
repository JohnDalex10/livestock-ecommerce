import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch item into data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="flex flex-col bg-zinc-900 z-1 items-center justify-end m-2.5 p-5 w-full max-h-105 text-white  hover:font-bold hover:-translate-y-1 hover:scale-105 sm:border-4 border-zinc-700">
      <div className="h-full mb-4">
        <p className="font-semibold">{title}</p>
        <p className="mt-1.5">
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
      </div>

      <img className="max-h-48 w-full object-contain mb-4" src={image} alt="" />

      <button
        onClick={addToCart}
        className="mt-2.5 transition ease-in-out delay-100 text-white py-2 px-3 hover:animate-bounce bg-sky-600 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-zinc-700 hover:shadow-2xl duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;

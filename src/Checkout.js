import React from "react";
import Header from "./Header.js";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="flex flex-space p-5 bg-gray-400 h-max justify-between">
        <div className="checkout__left">
          <div>
            <h2 className="mr-2.5 mb-2.5 p-2.5 border-2 border-gray-500 font-semibold hover:translate-y-1 hover:scale-100">
              Your Shopping Cart
            </h2>

            <div className="checkout__right">
              <Subtotal />
            </div>

            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

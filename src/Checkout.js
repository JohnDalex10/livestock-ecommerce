import React from "react";
import Header from "./Header.js";
import Subtotal from "./Subtotal.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div>
      <Header />
      <div className="flex flex-space p-5 bg-gray-400 h-max justify-between">
        <div className="checkout__left">
          <div>
            <h3 className="font-bold text-lg font-serif mb-1">Hello, {user?.email}</h3>
            <h2 className="mr-2.5 mb-2.5 p-2.5 border-2 border-gray-500 font-semibold font-serif hover:cursor-pointer">
              Your Shopping Cart <ShoppingCartIcon></ShoppingCartIcon>
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
                rating={item.rating}
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

import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col justify-between w-76 h-full p-5 bg-gray-300 border border-zinc-400 rounded">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="mb-2.5">
              Subtotal ({cart.length} items);
              <strong> {value} </strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"}
      />

      <button className="bg-sky-400 hover:bg-green-500 font-bold rounded w-full border-none p-5  hover:translate-y-1 hover:scale-105 transiton hover:transition-all ease-in-out duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;

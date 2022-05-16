// import { ShoppingBasketOutlined } from "@mui/icons-material";
import React from "react";
import Search from "./Search.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="h-14 flex items-center bg-gray-900 sticky top-0 z-100">
      <Link to="/">
        <img
          className="w-24 object-contain my-0 ml-5 mr-5"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="web"
        />
      </Link>

      <div className="font-serif flex flex-1">
        <input
          className="flex flex-1 items-center rounded-sm p-5 h-6"
          type="text"
          placeholder="search for items..."
        ></input>
        <Search />
      </div>

      <div className="font-serif flex justify-evenly">
        <Link to="/login">
          <div className="flex flex-col ml-2.5 mr-2.5 text-white">
            <span className="text-xs">Hello Guest</span>
            <span className="text-sm font-bold">Sign In</span>
          </div>
        </Link>

        <div className="flex flex-col ml-2.5 mr-2.5 text-white">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>

        <div className="flex flex-col ml-2.5 mr-2.5 text-white">
          <span className="text-xs">Your</span>
          <span className="text-sm font-bold">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="flex items-center text-white">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo ml-2.5 mr-2.5">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

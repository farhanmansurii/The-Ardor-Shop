import Link from "next/link";
import { BsBag, BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  return (
    <div className="navbar bg-secondary/20 backdrop-blur-sm z-50 fixed  font-ibm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <div
            className="menu menu-compact dropdown-content mt-3 p-2 rounded-box   bg-base-100  w-52"
          >
            <li className="border-b-2">
              <Link href={"/"}>home</Link>
            </li>
            <li className="border-b-2">
              <Link href={"/login"}>login</Link>
            </li>
            <li>
              <Link href={"/cart"}>cart</Link>
            </li>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={"/"}
          className=" normal-case text-whyte font-normal text-xl"
        >
          ARDOR
        </Link>
      </div>
      <div className="navbar-end">
        <Link href={"/login"}>
          <button className="btn btn-ghost btn-circle">
            <BsPerson className="h-5 w-5" />
          </button>
        </Link>
        <Link href={"/cart"}>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsBag className="h-5 w-5" />
              <span className="badge badge-xs badge-primary py-2 indicator-item">
                {products.length}
              </span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}

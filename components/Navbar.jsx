import Link from 'next/link';
import { BsBag, BsPerson } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartSlice';
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  return (
    <div className="navbar bg-base-100  font-ibm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href={'/'}>home</Link>
            </li>
            <li>
              <Link href={'/login'}>login</Link>
            </li>
            <li>
              <Link href={'/cart'}>cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">ArdorStore</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <BsPerson className="h-5 w-5" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <Link href={'/cart'}>
            <div className="indicator">
              <BsBag className="h-5 w-5" />
              <span className="badge badge-xs badge-primary indicator-item">{products.length}</span>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartSlice';
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  return (
    <nav className="fixed w-full h-16 border-b-2  text-lg border-accent bg-black/60  backdrop-blur-[5px] uppercase z-[10] p-3  mx-auto filter-blur backdrop-blur-xs  flex justify-between items-center">
      <div className=" flex justify-between   gap-3 w-11/12 mx-auto">
        <div className="my-auto">
          <Link href={'/'}>
            <span className="text-accent">Ardor</span>
            store
          </Link>
        </div>
        <div className="flex gap-4 place-self-end my-auto ">
          <Link href={'/'} className="my-auto">
            Home
          </Link>
          <Link href={'/login'} className="my-auto">
            Login
          </Link>
          {products.length > 0 ? (
            <Link href={'/cart'} className="my-auto">
              <div className="border-[2px] border-white py-2 px-3">Cart : {products.length}</div>
            </Link>
          ) : (
            <Link href={'/cart'} className="my-auto">
              Cart
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

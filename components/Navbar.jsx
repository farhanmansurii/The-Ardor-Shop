import Link from 'next/link';
import { useSelector } from 'react-redux';
import LoginModal from './LoginModal';
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="sticky w-10/12 bg-gray-200/50 z-[1] filter-blur backdrop-blur-sm dark:bg-gray-1000/40 my-4 md:top-4 max-w-2xl px-4 py-2  rounded-md mx-auto flex justify-between items-center">
      <div className="flex flex-row gap-2 text-black text-tertiary">
        <Link href="/">
           <div className='text-black'>
          Home
          </div>
           </Link>
        <Link href="/cart">
           <div className='text-black'>
          Cart
          </div>
           </Link>
        <Link href="/login">
           <div className='text-black'>
          Login
          </div>
           </Link>
      </div>
      <LoginModal />
      <div className="flex flex-row items-center space-x-4">
        <div>{products.length}</div>
        <button aria-label="Toggle Dark Mode" type="button" className="flex items-center justify-center transition-all bg-gray-200/40 rounded-lg w-9 h-9 dark:bg-gray-600 hover:ring-2 ring-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-800 dark:text-gray-200">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

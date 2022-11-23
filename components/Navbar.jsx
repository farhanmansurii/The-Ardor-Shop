import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="sticky my-4   w-10/12  bg-gray-900/50 z-[1] p-3  mx-auto filter-blur backdrop-blur-sm   rounded-md flex justify-between items-center">
      <div className=" flex justify-between  gap-3 w-10/12 mx-auto">
      <Link href={'/'} >

        <Text size={20} color="white" weight="semibold">
          Logo
        </Text>
      </Link>
        <div className="flex gap-4 place-self-end my-auto">
          <Link href={'/'} className="my-auto">
            <AiOutlineHome className="text-white w-5 h-5" />
          </Link>
          <Link href={'/login'} className="my-auto">
            <MdPersonOutline className="text-white  w-5 h-5" />
          </Link>
          <Link href={'/cart'} className="">
            <AiOutlineShoppingCart className="text-white w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

import { Button, Popover, Text } from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdClear, MdPersonOutline, MdShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
export default function Navbar() {
  const products = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="fixed w-full h-16 bg-gradient-to-tr from-red-600/70 to-yellow-500/70 z-[10] p-3  mx-auto filter-blur backdrop-blur-sm  flex justify-between items-center">
      <div className=" flex justify-between  gap-3 w-11/12 mx-auto">
        <Link href={'/'}>
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

          <Popover placement="bottom">
            <Popover.Trigger>
              <button>
                <MdShoppingCart className="text-white  w-5 h-5" />
              </button>
            </Popover.Trigger>
            <Popover.Content>
              {products.length < 1 ? (
                <Text  className="p-3 ">
                  No products in your cart
                </Text>
              ) : (
                <>
                  <div className="p-3">
                    {products.map((e) => (
                      <div className="border-b p-2 border-red-500 m-2">
                        <div>{e.title}</div>
                        <div className="flex justify-between">
                          <div>
                            ${e.price} x {e.cartQuantity}
                          </div>
                          <MdClear className="w-5 h-5 text-white bg-red-500 rounded-full " />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button css={{ linearGradient: '45deg, $yellow600 -20%, $red600 100%' }} auto className="flex flex-row-reverse m-2">
                    <Link href="/cart" className="text-white">
                      Go to Cart
                    </Link>
                  </Button>
                </>
              )}
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </nav>
  );
}

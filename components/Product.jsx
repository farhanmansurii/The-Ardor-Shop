import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
export default function Product({ e }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div key={e.id} className="flex flex-col py-2   mx-auto  ">
      <Link href={`/${e.id}`}>
        <img src={e.images[0]} alt={e.title} className="  " />
        <div className=" text-sm lg:text-xl flex p-1   ">{e.title}</div>
      </Link>
      <div className="flex m-2 gap-3    flex-row">
        <Button auto bordered>
          ${e.price}
        </Button>
        <Button shadow auto onClick={() => {handleAdd(e)}}>
          <TbShoppingCartPlus />
        </Button>
      </div>
    </div>
  );
}

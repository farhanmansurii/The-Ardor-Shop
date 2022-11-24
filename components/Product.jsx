import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
export default function Product({ e }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div key={e.id} className="flex flex-col py-2  font-semibold mx-auto font-whyte hover:scale-[98%] duration-200">
      <Link href={`/${e.id}`}>
        <Image width={300} height={200} src={e.images[0]} alt={e.title} className=" my-2 " />
        <div className=" text-sm lg:text-xl flex px-1  mt-2  uppercase line-clamp-1  w-11/12 ">{e.title}</div>
        <div className=" px-1  my-2 text-sm font-light text-accent">₹{e.price * 6}</div>
      </Link>
    </div>
  );
}

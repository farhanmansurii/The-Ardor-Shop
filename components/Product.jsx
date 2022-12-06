import Image from 'next/image';
import Link from 'next/link';
import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
export default function Product({ e }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <div key={e.id} className="flex flex-col pb-2 max-h-[220px] lg:max-h-[300px] hover:bg-secondary/30 ease-linear  h border-primary font-light   mx-auto font-ibm  duration-200">
      <Link href={`/${e.id}`}>
          <div className=" absolute  flex flex-auto  place-content-end text-black p-2 place-self-end ">
            <BiHeart/></div>
        <Image width={300} height={200} src={e.images[0]} alt='' className=" mb-2 "/>
        <div className=" text-sm lg:text-xl flex px-1  mt-2   line-clamp-1  w-11/12 ">{e.title}</div>
        <div className=" px-1  my-2 text-sm font-light text-secondary ">₹{e.price * 6}</div>
      </Link>
    </div>
  );
}

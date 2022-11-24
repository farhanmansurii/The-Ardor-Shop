import Image from 'next/image';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
export default function ProductDetails({ deets }) {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const [selectedImage, setSelectedImage] = useState(deets.images[0]);
  return (
    <div className="flex flex-col lg:flex-row w-[96%] mx-auto  mt-2 font-whyte">
      <div className="lg:w-8/12 mb-4">
        <Image src={selectedImage} alt={deets.title} width={640} height={480} className="mx-auto" />

        <div className="flex-row w-fit gap-1  mt-2 h-12 flex mx-auto">
          {deets.images.map((e, i) => (
            <Image key={i} onClick={() => setSelectedImage(e)} src={e} alt={deets.title} width={64} height={48} className="mx-auto" />
          ))}
        </div>
      </div>
      <div className="mx-auto  gap-4 h-11/12 my-auto py-4">
        <div className="text-3xl lg:text-5xl w-10/12 mx-auto uppercase">{deets.title}</div>
        <div>
          <div className="flex gap-2 w-10/12 mx-auto my-3 font-semibold">
            <div className="border-2 border-primary w-fit px-3 hover:text-yellow-500 hover:border-yellow-500  hover:scale-105 duration-200 py-1">S</div>
            <div className="border-2 border-primary w-fit px-3 hover:text-yellow-500 hover:border-yellow-500 hover:scale-105 duration-200 py-1">M</div>
            <div className="border-2 border-primary w-fit px-3  hover:text-yellow-500 hover:border-yellow-500 hover:scale-105 duration-200 py-1">L</div>
            <div className="border-2 border-primary w-fit px-3  hover:text-yellow-500 hover:border-yellow-500 hover:scale-105 duration-200 py-1">XL</div>
          </div>
          <div className="my-5 flex justify-between w-10/12   mx-auto">
            <div className=" btn rounded-none text-yellow-500 border-0 btn-ghost hover:bg-black font-normal font-xl "> ₹{deets.price * 6}</div>
            <button className=" btn rounded-none text-base-100 bg-yellow-500 border-0 font-semibold font-xl hover:text-yellow-500 " onClick={() => handleAdd(deets)}>
              Add to Cart
            </button>
          </div>
          <div className="mx-auto text-md lg:text-lg w-10/12   my-2 ">
          
            <span className="text-yellow-500"> Product Description </span> - {deets.description}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const id = context.query.slug;
  const deets = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => res.json());

  return {
    props: {
      deets,
    },
  };
}

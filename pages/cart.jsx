import Image from 'next/image';
import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartSlice';
export default function cart() {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const handleRemove = (cartItem) => {
    dispatch(remove(cartItem));
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="font-whyte  font-bold text-4xl uppercase py-2  my-6 flex ">Cart<FiArrowDownRight color='yellow' /></div>

      {products.length > 0 ? (
        products.map((e) => (
          <div key={e.id} className="flex my-3 flex-row gap-3 justify-between">
            <div className="flex gap-4 w-full">
              <Image width={80} height={60} src={e.images[0]}  alt={e.title}/>
              <div className="text-xl uppercase text-white my-auto">{e.title}</div>
            </div>
            <div className="flex  w-fit gap-3 ">
              <div className="text-xl text-yellow-500 font-bold my-auto">₹{e.price * 6}</div>
              <div className="text-xl text-white my-auto">X{e.cartQuantity}</div>
            </div>
            <button onClick={() => handleRemove(e)} className="btn btn-circle p-2 text-black bg-rose-500 my-auto btn-sm w-fit ">
              <MdClear />
            </button>
          </div>
        ))
      ) : (
        <div className="font-whyte  font-bold text-2xl mx-auto uppercase py-2 align-center ">No items in cart</div>
      )}
      {products.length > 0 && <div className="my-3 place-self-end btn rounded-none bg-yellow-500 text-black font-bold">CHECKOUT</div>}
    </div>
  );
}

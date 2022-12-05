import Image from 'next/image';
import React from 'react';
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
      <div className="font-ibm  font-bold text-2xl  py-2  my-6 flex ">
        Cart
      </div>

      {products.length > 0 ? (
        products.map((e) => (
          <div key={e.id} className="flex my-3 flex-row gap-3 justify-between pb-4 border-b-[1px] border-accent">
            <div className="flex gap-4 w-full">
              <Image width={80} height={60} src={e.images[0]} alt={e.title} />
              <div className="text-xl  my-auto">{e.title}</div>
            </div>
            <div className="flex  w-fit gap-3 ">
              <div className="text-xl text-primary font-bold my-auto">₹{e.price * 6}</div>
              <div className="text-xl my-auto">X{e.cartQuantity}</div>
            </div>
            <button onClick={() => handleRemove(e)} className="btn btn-circle p-2 text-black bg-rose-500 my-auto btn-sm w-fit ">
              <MdClear />
            </button>
          </div>
        ))
      ) : (
        <div className="font-ibm  font-bold text-2xl mx-auto  py-2 align-center ">No items in cart</div>
      )}
      {products.length > 0 && (
        <>
          <div className="font-ibm font-bold text-2xl     mt-6 mb-3 flex "> Subtotal :  ₹{products.reduce((sum, i) => (sum += i.cartQuantity * i.price * 6), 0)}.00</div>
          <button className="   text-black  w-fit py-2  px-10 rounded-none hover:bg-black hover:text-accent font-semibold">checkout</button>
        </>
      )}
    </div>
  );
}

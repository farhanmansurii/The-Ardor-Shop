import React from 'react';
import { useSelector } from 'react-redux';

export default function cart() {
  const products = useSelector((state) => state.cart.cartItems);
  return (
    <div>{products.map((e)=><div key={e.id}>{e.title} x {e.cartQuantity}</div>)} hi</div>
  )
}

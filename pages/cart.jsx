import { Button, Text } from '@nextui-org/react';
import React from 'react';
import { useSelector } from 'react-redux';
import CartTable from '../components/CartTable';

export default function cart() {
  const products = useSelector((state) => state.cart.cartItems);
  return (
    <div className="w-11/12 mx-auto">
      <Text
        h1
        size={50}
        css={{
          textGradient: '45deg, $yellow600 -20%, $red600 100%',
        }}
        weight="bold"
      >
        Cart.
      </Text>

      <CartTable products={products} />
    <Button className='my-3 place-self-end ' css={{ linearGradient: '45deg, $yellow600 -20%, $red600 100%',}} >CHECKOUT</Button>

    </div>
  );
}

import { Button, Text } from '@nextui-org/react';
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
    <div className="flex flex-col lg:flex-row w-10/12 mx-auto mb-10 gap-4 mt-4">
      <div>
        <Image src={selectedImage} alt={deets.title} width={640} height={480} className="mx-auto" />

        <div className="flex-row  lg:w-9/12 my-2 flex mx-auto">
          {deets.images.map((e, i) => (
            <Image key={i} onClick={() => setSelectedImage(e)} src={e} alt={deets.title} width={100} height={80} className="mx-auto" />
          ))}
        </div>
      </div>
      <div className="mx-auto w-10/12 my-auto">
        <Text
          h1
          size={40}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight="bold"
        >
          {deets.title}
        </Text>
        <div>
          <Text className="mx-auto" weight='semibold'>{deets.description} </Text>
        </div>
        <div className="my-3 flex gap-2 mx-auto">
          <div className="my-auto mx-4 text-xl font-semibold text-yellow-500"> ${deets.price}</div>
          <Button
            css={{
              linearGradient: '45deg, $yellow600 -20%, $red600 100%',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 1,
                borderRadius: '$pill',
                transition: 'all 0.4s ease',
              },
              '&:hover': {
                transform: 'translateY(-5px)',
                '&:after': {
                  transform: 'scaleX(1.5) scaleY(1.6)',
                  opacity: 0,
                },
              },
              '&:active': {
                transform: 'translateY(-2px)',
              },
            }}
            auto
            onClick={() => handleAdd(deets)}
          >
            Add to Cart
          </Button>
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

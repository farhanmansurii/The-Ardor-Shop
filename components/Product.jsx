import { Button, Text } from '@nextui-org/react';
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
    <div key={e.id} className="flex flex-col py-2  mx-auto  ">
      <Link href={`/${e.id}`}>
        <img src={e.images[0]} alt={e.title} className="  " />
        <div className=" text-sm lg:text-xl flex p-1  line-clamp-1  ">
          <Text css={{ width: '100%', color: '$blue900' }} weight="semibold">
            {e.title}
          </Text>
        </div>
      </Link>
      <div className="flex m-2 gap-3     flex-row">
        <Button auto bordered css={{  border: ' $red600'}}>
         <Text weight={'semibold'}   css={{ textGradient: '45deg, $yellow600 -20%, $red600 100%',}}>
           ${e.price}
          </Text>
        </Button>
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
          onClick={() => {
            handleAdd(e);
          }}
        >
          <TbShoppingCartPlus />
        </Button>
      </div>
    </div>
  );
}

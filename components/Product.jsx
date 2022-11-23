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
    <div key={e.id} className="flex flex-col py-2   mx-auto  ">
      <Link href={`/${e.id}`}>
        <img src={e.images[0]} alt={e.title} className="  " />
        <div className=" text-sm lg:text-xl flex p-1  line-clamp-1  ">
        <Text
          css={{ width: '100%',
          color: '$blue900'
          }}
          weight="semibold"
        >
        {e.title} 
        </Text>
        </div>
      </Link>
      <div className="flex m-2 gap-3    flex-row">
        <Button auto bordered css={{ width: '100%',
           color: '$blue900' , borderColor : '$blue900'
          }} >
          ${e.price}
        </Button>
        <Button shadow   css={{ width: '100%',
           backgroundColor: '$blue900',
          }} auto onClick={() => {handleAdd(e)}}>
          <TbShoppingCartPlus />
        </Button>
      </div>
    </div>
  );
}

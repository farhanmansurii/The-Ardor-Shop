import { Text } from '@nextui-org/react';
import Product from '../components/Product';
export default function ProductRow({data ,title}) {
  return (
    <>
      <div className="flex w-11/12   lg:w-10/12 mx-auto pt-6 font-semibold   text-2xl uppercase   ">
      <Text
          h1 w
          css={{ width: '100%',
            textGradient: '25deg, $purple300 -20%, $black 100%',
          }}
          weight="bold"
        >
        {title} 
        </Text>  </div>

      <div className="  mx-auto gap-3 grid w-11/12 lg:w-10/12 grid-cols-2 lg:grid-cols-3">
        {data.map((e) => (
          <Product e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}

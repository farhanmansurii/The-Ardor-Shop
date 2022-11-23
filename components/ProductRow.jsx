import { Text } from '@nextui-org/react';
import Product from '../components/Product';
export default function ProductRow({data ,title}) {
  return (
    <>
      <div className="flex w-11/12    mx-auto pt-6 font-semibold   text-2xl uppercase   ">
      <Text
         h1
         size={50}
         css={{
           textGradient: '45deg, $yellow600 -20%, $red600 100%',
         }}
         weight="bold"
         >
        {title}.
        </Text>  </div>

      <div className="  mx-auto gap-3 grid w-11/12  grid-cols-2 lg:grid-cols-3">
        {data.map((e) => (
          <Product e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}

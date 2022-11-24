import { FiArrowDownRight } from 'react-icons/fi';
import Product from '../components/Product';
export default function ProductRow({ data, title }) {
  return (
    <>
      <div className="font-whyte font-bold text-4xl uppercase py-2 w-11/12 mx-auto mt-10 my-4 flex ">{title}<FiArrowDownRight color='yellow' /></div>

      <div className="  mx-auto gap-1 grid w-[98%]   grid-cols-2 lg:grid-cols-4">
        {data.map((e) => (
          <Product e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}

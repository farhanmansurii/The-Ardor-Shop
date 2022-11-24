import { FiArrowDownRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import CarousalProducts from '../components/CarousalProducts';
import ProductRow from '../components/ProductRow';
export default function Home({ data }) {
  const products = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mx-auto w-11/12">
        <div className="font-whyte font-bold text-4xl uppercase py-2  mt-4 mb-3 flex ">
          Home
          <FiArrowDownRight color="yellow" />
        </div>
      </div>
      <CarousalProducts products={data} />
      <ProductRow data={data} title="All Products" />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.escuelajs.co/api/v1/products?limit=20&offset=0`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

import { Text } from '@nextui-org/react';
import CarousalProducts from '../components/CarousalProducts';
import ProductRow from '../components/ProductRow';
export default function Home({ data }) {
  return (
    <>
      <div className="mx-auto w-11/12">
        <Text
          h1
          size={50}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight="bold"
        >
          Home.
        </Text>
      </div>
      <CarousalProducts products={data} />
      <ProductRow data={data} title={'All Products'} />
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

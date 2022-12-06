import Product from '../components/Product';
export default function ProductRow({ data, title }) {
  return (
    <>

      <div className="font-ibm font-bold text-2xl uppercase py-2 w-11/12 mx-auto mt-10 my-4 flex ">{title}</div>
      <div className="  mx-auto  grid  w-11/12 gap-[3px]  grid-cols-2 lg:grid-cols-4">
        {data.map((e) => (
          <Product e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}

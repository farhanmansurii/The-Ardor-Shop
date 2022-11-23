import Product from '../components/Product';
export default function ProductRow({data ,title}) {
  return (
    <>
      <div className="flex w-11/12  border-t-2 border-black  lg:w-10/12 mx-auto pt-6 font-semibold   text-2xl uppercase   ">
        {title} </div>

      <div className="  mx-auto gap-3 grid w-11/12 lg:w-10/12 grid-cols-2 lg:grid-cols-3">
        {data.map((e) => (
          <Product e={e} />
        ))}
      </div>
    </>
  );
}

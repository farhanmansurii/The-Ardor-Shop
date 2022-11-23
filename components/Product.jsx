import React from 'react';

export default function Product({ e }) {
  return (
    <div key={e.id} className="flex flex-col py-2   mx-auto  ">
      <img src={e.images[0]} alt={e.title} className="  " />
      <div className=" text-sm lg:text-xl flex p-1 line-clamp-1 uppercase  ">{e.title}</div>
      <div className="flex m-2 gap-3    flex-row">
        <div className="btn btn-sm bg-black border-1 rounded-none my-auto   font-normal ">${e.price}</div>
        <button className="  bg-white border-1  hover:border-black/20 px-4  border-black rounded-none  font-semibold "></button>
      </div>
    </div>
  );
}

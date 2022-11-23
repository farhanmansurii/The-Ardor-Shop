import React from 'react';

export default function ProductDetails({deets }) {
  console.log(deets)
  return (
    <div>ProductDetails: {deets.id}</div>
  )
}
export async function getServerSideProps(context) {
  const id = context.query.slug;
  const deets = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  ).then((res) => res.json());



  return {
    props: {
      deets 
    },
  };
}

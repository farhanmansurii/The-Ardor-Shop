import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
export default function login() {
  return (
    <>
      <div className="font-whyte font-bold text-4xl mx-auto w-11/12 uppercase py-2  my-6 flex ">Login<FiArrowDownRight color='yellow' /></div>
      <div className="form-control rounded-none w-11/12 mx-auto">
        <label className="label ">
          <span className="label-text text-accent">What is your e-mail ?</span>
        </label>
        <input type="email" placeholder="elonmusk@kanye.com" className="input h-12 input-md placeholder:text-md  rounded-none  border-white input-ghost  w-full max-w-xs" />
        <label className="label ">
          <span className="label-text text-accent mt-4 ">What is your password ?</span>
        </label>
        <input type="password" placeholder="password"  className="input  h-12 placeholder:text-md input-md   rounded-none  border-white input-ghost  w-full max-w-xs" />
        <label className="label cursor-pointer w-fit gap-6 mt-2 ">
          <span className="label-text text-accent">Remember me</span>
          <input type="checkbox"  className=" checkbox" />
        </label>
        <button className=" bg-accent mt-5 text-black  w-fit py-2 uppercase px-10 rounded-none hover:bg-black hover:text-accent font-semibold">Login.</button>
      </div>
    </>
  );
}

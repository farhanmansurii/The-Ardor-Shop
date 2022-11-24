import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';
export default function login() {
  return (
    <>
      <div className="font-whyte font-bold text-4xl mx-auto w-11/12 uppercase py-2  my-6 flex ">Login<FiArrowDownRight color='yellow' /></div>
      <div className="form-control rounded-none w-11/12 mx-auto">
        <label className="label ">
          <span className="label-text">What is your e-mail ?</span>
        </label>
        <input type="email" placeholder="elonmusk@kanye.com" className="input  rounded-none border-b-3 border-white input-ghost  w-full max-w-xs" />
        <label className="label ">
          <span className="label-text mt-4">What is your password ?</span>
        </label>
        <input type="password" placeholder="password" className="input  rounded-none border-b-3 border-white input-ghost  w-full max-w-xs" />
        <label className="label cursor-pointer w-fit gap-6 mt-2 ">
          <span className="label-text">Remember me</span>
          <input type="checkbox"  className="checkbox" />
        </label>{' '}
        <button className="btn bg-yellow-500 mt-5 text-black font-bold w-fit px-10 rounded-none">Login.</button>
      </div>
    </>
  );
}

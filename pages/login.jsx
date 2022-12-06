import React from 'react';
export default function login() {
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  return (
    <>
      <div className="font-ibm font-bold text-2xl mx-auto w-11/12 uppercase py-2  my-6 flex ">Login</div>
      <div className="form-control rounded-none w-11/12 mx-auto">
        <label className="label ">
          <span className="label-text ">What is your e-mail ?</span>
        </label>
        <input type="email" placeholder="elonmusk@kanye.com" className="input h-12 input-md placeholder:text-md  rounded-none  border-primary input-ghost  w-full max-w-xs" />
        <label className="label ">
          <span className="label-text  mt-4 ">What is your password ?</span>
        </label>
        <input type="password" placeholder="password" className="input  h-12 placeholder:text-md input-md   rounded-none  border-primary input-ghost  w-full max-w-xs" />
        <label className="label cursor-pointer w-fit gap-6 mt-2 ">
          <span className="label-text ">Remember me ?</span>
          <input type="checkbox" className=" checkbox" />
        </label>
        {isButtonLoading ? (
          <button className="btn w-fit loading rounded-none bg-primary text-base-100 font-normal uppercase">loading</button>
        ) : (
          <button
            onClick={() => {
              setIsButtonLoading(true);
              setTimeout(() => {
                setIsButtonLoading(false);
              }, 1000);
            }}
            className=" font-normal  bg-primary text-base-100 hover:bg-base-100 hover:text-primary   uppercase  w-fit py-2  px-10 rounded-none border-[1px]  border-primary "
          >
            Login
          </button>
        )}
      </div>
    </>
  );
}

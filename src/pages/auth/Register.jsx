import React from "react";
import RegistrMini from "../../assets/images/registr-mini.png";
import RegistrMain from "../../assets/images/registr-main.png";
import RegistrGoogle from "../../assets/images/registr-google.png";
import RegistrGithub from "../../assets/images/registr-github.png";

const Register = () => {
  return (
    <div>
      <div className="registr-container">
        <div className="registr-wrapper flex items-center justify-between">
          <div className="registr-left"></div>
          <div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4">
                <img src={RegistrMini} className="" alt="" />
                <h2 className="text-3xl text-white">CodeSquid</h2>
              </div>
              <img src={RegistrMain} className="w-[400px] pt-16 pb-12" alt="" />
              <h2 className="text-3xl text-white max-w-[380px] text-center mb-4">
                Online Community For Front-end Developers
              </h2>
              <p className="text-[16px] text-gray-100 text-center max-w-[380px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-semibold max-w-[400px] text-center">
                Join & Connect the Fastest Growing Online Community
              </h2>
              <div className="flex gap-2 py-8">
                <button className="flex items-center gap-1 border border-[#eeeeee] rounded-[48px] bg-[#fafafa] py-3 px-6 text-sm text-gray-700 hover:bg-[#f4f4f4]">
                  <img src={RegistrGoogle} alt="" /> Sign up with Google
                </button>
                <button className="flex items-center gap-1 border border-[#eeeeee] rounded-[48px] bg-[#fafafa] py-3 px-6 text-sm text-gray-700 hover:bg-[#f4f4f4]">
                  <img src={RegistrGithub} alt="" /> Sign up with Github
                </button>
              </div>
              <form className="flex flex-col w-[380px] gap-6">
                <label>
                  <input
                    placeholder="Username"
                    type="text"
                    className=" border-b-2 outline-none focus:border-b-indigo-400 w-full text-[16px] py-1 placeholder:text-sm"
                  />
                </label>
                <label>
                  <input
                    placeholder="Email"
                    type="text"
                    className=" border-b-2 outline-none focus:border-b-indigo-400 w-full text-[16px] py-1 placeholder:text-sm"
                  />
                </label>
                <label>
                  <input
                    placeholder="Password"
                    type="password"
                    className=" border-b-2 outline-none focus:border-b-indigo-400 w-full text-[16px] py-1 placeholder:text-sm"
                  />
                </label>
                <div className="flex items-center justify-between">
                  <label className=" text-gray-500 text-[14px] flex items-center gap-1">
                    <input type="checkbox" />I accept the terms & Condition
                  </label>

                  <button className="bg-indigo-500 text-white rounded-[56px] py-3 px-8 hover:bg-indigo-400">
                    Sign up
                  </button>
                </div>
              </form>
              <p className="text-gray-600 text-sm mt-12">
                Own an Account?{" "}
                <a href="" className="text-black font-medium">
                  JUMP RIGHT IN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

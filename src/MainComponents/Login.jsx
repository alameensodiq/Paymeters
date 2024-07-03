import React from "react";
import Cover from "../assets/LoginCover.png";
import { ReactComponent as Crust } from "../assets/crustlogo.svg";
import InputLabel from "./Reusables/InputLabel";
import LoginButton from "./Reusables/LoginButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-row h-[100vh]">
      <div className="hidden lg:flex lg:w-[45%] h-[100vh] bg-cover bg-center bg-route-color">
        {/* <img
          src={Cover}
          alt="cover"
          className="lg:w-full h-[100vh] bg-cover bg-center"
        /> */}
      </div>
      <div className="lg:w-[55%] md:w-[100%] md:items-center sm:w-[100%] sm:items-center flex flex-col  h-[100vh] items-center gap-4 pt-40">
        {/* <Crust /> */}
        <span className="text-route-color text-[30px] font-bold">Paymeter</span>
        <span className="font-inter text-[18px] font-medium leading-[28.8px] tracking-[0.15px] text-left">
          Welcome to Paymeter
        </span>
        <InputLabel placeholder='Enter your username/email address' label='Username/Email'/>
        <InputLabel placeholder='Enter your Password' label='Password'/>
        <LoginButton name='Login' onClick={() => navigate('/dashboard')} />
        {/* <span className="font-inter text-custom-bg text-[14px]">Didn't Forget Password? <span className="text-button-bg font-medium">sign in</span></span> */}
      </div>
    </div>
  );
};

export default Login;

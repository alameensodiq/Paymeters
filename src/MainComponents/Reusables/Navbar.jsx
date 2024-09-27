import React, { useEffect } from "react";
import { ReactComponent as Notice } from "./../../assets/Notice.svg";
import { ReactComponent as Prof } from "./../../assets/Prof.svg";
import { ReactComponent as Carat } from "./../../assets/Carat.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Balance } from "../Store/Apis/Balance";

const Navbar = ({ title, balance }) => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (sessionStorage.getItem("token")) {
  //     dispatch(Balance({status: true}));
  //     return;
  //   } else {
  //     navigate("/");
  //     toast.error("You aren't logged in");
  //   }
  // }, []);

  // const { balance, authenticatingbalance } = useSelector(
  //   (state) => state?.balance
  // );
  // console.log(balance);
  return (
    <div className="flex flex-row justify-between w-[100%] h-[20vh] bg-gradient-to-r from-gradient-blue to-gradient-to pt-5 px-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <span className="text-white text-[18px]">{title}</span>
          <div className="flex flex-row items-center text-white text-[10px] gap-2">
            <span> >> </span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="text-white text-[12px]">
          Hi, Welcome to your {title} Overview
        </div>
        <div style={{ color: "#ffffff" }}>Balance: {balance ? balance : 0}</div>
      </div>
      <div className="flex flex-row gap-9">
        <span>
          <Notice />
        </span>
        <div className="flex flex-row gap-4 pt-2">
          <Prof />
          <span className=" text-white text-[12px] text-medium pt-1">
            Tobi Alebiosu
          </span>
          <span className="pt-2">
            <Carat />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

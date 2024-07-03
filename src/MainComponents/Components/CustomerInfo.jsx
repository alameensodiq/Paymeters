import React, { useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";

const CustomerInfo = ({title}) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);

  const White = () => {
    setWhitecrust(true);
    setOther(false);
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
  };

  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const datePickerRef = useRef(null);

  const dateChanger = (date) => {
    console.log(date);
    setEndDate(date);
  };

  const PickDate = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          <div className="flex flex-row justify-between">
            <span className="text-route-name text-[28px] font-semibold">
              Meters Under Ikeja Discos
            </span>
            <div className="relative flex flex-row w-[50%]">
              <div className="absolute top-3 left-4">
                <Search />
              </div>
              <input
                className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                placeholder="Search by name, customerID, account number, transaction reference"
              />
              <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-end gap-4 px-3">
              {/* <div className="flex flex-col">
                <div className="flex flex-row gap-4 text-[14px] items-center text-route-noncolor font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Paymeter Account
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    To Other banks
                  </span>
                </div>
                <div className="gap-4">
                  {whitecrust && (
                    <div className="w-[150px] h-[2px] bg-route-color" />
                  )}
                  {other && (
                    <div className="w-[100px] h-[2px] bg-route-color ml-[62%]" />
                  )}
                </div>
              </div> */}
              <div className="flex flex-row justify-between gap-4 px-3">
                <div className="position:relative w-[120px] h-[35px] rounded-custom px-[5px] flex flex-row border items-center">
                  {/* <input className='input' type='date' /> */}
                  <DatePicker
                    className="text-[8px] outline-none"
                    selected={endDate}
                    onChange={(date) => dateChanger(date)}
                    ref={datePickerRef}
                    showTimeSelect={false}
                    dateFormat="MMM d yyyy" // Use format tokens to represent "Oct 13 2023"
                    placeholderText="13 Oct 2023"
                    popperPlacement="bottom-start"
                  />
                  <Calendar
                    className="text-[10px]"
                    onClick={() => PickDate()}
                  />
                </div>
                {/* <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                />
                <input
                  type="date"
                  className="border-input-color border-[1px] rounded-custom  w-[117px] h-[36px] outline-none px-[10px] text-[11px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                /> */}
                <button className="px-2 flex flex-row gap-1 items-center bg-route-color w-[50%] rounded-custom text-white font-semibold text-[11px]">
                  Download Report <Download />
                </button>
              </div>
            </div>
            <Tables transfers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

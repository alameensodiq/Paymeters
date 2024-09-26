import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Reusables/Sidebar";
import Navbar from "../Reusables/Navbar";
import Tables from "../Reusables/Table";
import { ReactComponent as Search } from "./../../assets/Search.svg";
import { ReactComponent as Download } from "./../../assets/Download.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as Calendar } from "../../assets/calendar.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Transactions } from "../Store/Apis/Transactions";
import toast from "react-hot-toast";
import Pagination from "../Reusables/Pagination";
import { Payment } from "../Store/Apis/Payment";
import { Shift } from "../Store/Apis/Shift";
import { Retrieval } from "../Store/Apis/Retrieval";
import AppUserModal from "../../Modal/AppUserModal";

const PaymentRetrieval = ({ title }) => {
  const [whitecrust, setWhitecrust] = useState(true);
  const [other, setOther] = useState(false);
  const [searcher, setSearcher] = useState("");
  const [show, setShow] = useState("");
  const [step, setStep] = useState(0);
  const [startDate, setStartDate] = useState(new Date("2022-01-01"));
  const [startDater, setStartDater] = useState(new Date("2022-01-01"));
  const [endDate, setEndDate] = useState(new Date("2022-01-01"));
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const White = () => {
    setWhitecrust(true);
    setOther(false);
    setSearcher("");
  };

  const Othering = () => {
    setWhitecrust(false);
    setOther(true);
    setSearcher("");
    setStartDater("");
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      return;
    } else {
      navigate("/");
      toast.error("You aren't logged in");
    }

    //eslint-disable-next-line
  }, []);

  const { retrieval, authenticatingretrieval } = useSelector(
    (state) => state?.retrieval
  );
  console.log(retrieval?.data);

  useEffect(() => {
    if (retrieval?.status && !authenticatingretrieval && show) {
      setStep(13);
    }
    if (reload) {
      setReload(false);
    }
  }, [retrieval?.status, authenticatingretrieval, reload, show]);

  const Downloading = () => {
    dispatch(Retrieval({ requestID: searcher }));
    setShow(true);
  };

  const retrievalEntries = retrieval ? Object.entries(retrieval?.data) : [];
  console.log(retrievalEntries);

  return (
    <div className="flex flex-row">
      <div className="w-[15%] h-[100%]">
        <Sidebar />
      </div>
      <AppUserModal
        retrieval={retrievalEntries}
        setStep={setStep}
        step={step}
        setReload={setReload}
        setShow={setShow}
      />
      <div className="flex flex-col w-[85%] h-[100%]">
        <div className="w-[100%] h-[20%]">
          <Navbar title={title} />
        </div>
        <div className="w-[100%] py-9 px-5 flex flex-col gap-10">
          {whitecrust ? (
            <>
              <div className="flex flex-row justify-between">
                <span className="text-route-name text-[28px] font-semibold">
                  Retrieval payment
                </span>
                <div className="relative flex flex-row w-[50%]">
                  <div className="absolute top-3 left-4">
                    <Search />
                  </div>
                  <input
                    className="border-input-color border-[1px] rounded-tl-custom rounded-bl-custom w-[85%] outline-none pl-[60px] text-[13px]"
                    placeholder="Search by Customer reference"
                    value={searcher}
                    onChange={(e) => setSearcher(e.target.value)}
                  />
                  <button
                    onClick={() => Downloading()}
                    className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]"
                  >
                    {authenticatingretrieval ? "Searching" : "Search"}
                  </button>
                </div>
              </div>
              {/* <div className="flex h-[40px] gap-[10px] flex-row justify-end w-[100%]">
                <div className="flex flex-col w-[15%] h-[70px]">
                  <span>Start Date</span>
                  <input
                    className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[100%] outline-none pl-[20px] h-[40px] text-[13px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    value={startDater}
                    type="date"
                    format="YYYY-MM-DD"
                    onChange={handleStartDateChange}
                  />
                </div>
                <div className="flex flex-col w-[15%] h-[70px]">
                  <span>End Date</span>
                  <input
                    className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[100%] outline-none pl-[20px] h-[40px] text-[13px]"
                    placeholder="Search by name, customerID, account number, transaction reference"
                    value={setEndDate}
                    type="date"
                    format="YYYY-MM-DD"
                    disabled
                    onChange={handleStartDateChange}
                  />
                </div>
              </div> */}
            </>
          ) : other ? (
            <div className="flex flex-row justify-between">
              <span className="text-route-name text-[28px] font-semibold">
                Shift
              </span>
              <div className="relative flex flex-row justify-end w-[40%]">
                {/* <div className="absolute top-3 left-4">
                  <Search />
                </div> */}
                <input
                  className="border-input-color border-[1px] rounded-tr-custom rounded-tl-custom rounded-bl-custom rounded-br-custom w-[35%] outline-none pl-[20px] text-[13px]"
                  placeholder="Search by name, customerID, account number, transaction reference"
                  value={startDate}
                  type="date"
                  format="YYYY-MM-DD"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                {/* <button className="bg-route-color w-[15%] rounded-tr-custom rounded-br-custom text-white font-semibold text-[12px]">
                  Search
                </button> */}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* <div className="flex flex-col border-input-color border-[1px] rounded-custom py-4 gap-6">
            <div className="flex flex-row justify-between gap-4 px-3">
              <div className="flex flex-col">
                <div className="flex flex-row gap-4 justify-center text-[14px] items-center text-route-noncolor pt-[10px] font-medium">
                  <span
                    onClick={() => White()}
                    className={`${
                      whitecrust
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Meter Payment
                  </span>
                  <span
                    onClick={() => Othering()}
                    className={`${
                      other
                        ? "text-route-color cursor-pointer"
                        : "text-route-noncolor cursor-pointer"
                    }`}
                  >
                    Shift
                  </span>
                </div>
                <div className="gap-6">
                  {whitecrust && (
                    <div className="w-[105px] h-[2px] bg-route-color" />
                  )}
                  {other && (
                    <div className="w-[60px] h-[2px] bg-route-color ml-[74%]" />
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-end gap-4 px-3">
                {whitecrust ? (
                  <button
                    onClick={() => Downloading()}
                    className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]"
                  >
                    Download Report <Download />
                  </button>
                ) : other ? (
                  <button
                    onClick={() => Downloading2()}
                    className="px-2 h-[35px] flex flex-row gap-1 items-center bg-route-color w-[100%] rounded-custom text-white font-semibold text-[11px]"
                  >
                    Download Report <Download />
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {whitecrust && payment?.data?.length >= 1 ? (
              <>
                <Tables payment data={payment?.data} />
              </>
            ) : other && shift?.data?.length >= 1 ? (
              <>
                <Tables shift data={shift?.data} />
              </>
            ) : (
              ""
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PaymentRetrieval;

import React, { useState } from "react";
import { ReactComponent as Crust } from "./../../assets/crustlogoside.svg";
import { ReactComponent as Dashboard } from "./../../assets/Dashboard.svg";
import { ReactComponent as DashboardColor } from "./../../assets/DashboardColor.svg";
import { ReactComponent as Customers } from "./../../assets/Customers.svg";
import { ReactComponent as CustomersColor } from "./../../assets/CustomersColor.svg";
import { ReactComponent as Transfers } from "./../../assets/Transfers.svg";
import { ReactComponent as TransfersColor } from "./../../assets/TransfersColor.svg";
import { ReactComponent as Investments } from "./../../assets/Investments.svg";
import { ReactComponent as InvestmentsColor } from "./../../assets/InvestmentsColor.svg";
import { ReactComponent as Loan } from "./../../assets/Loan.svg";
import { ReactComponent as LoanColor } from "./../../assets/Loan.svg";
import { ReactComponent as Logout } from "./../../assets/logout.svg";

import { Link, useLocation } from "react-router-dom";
import { LogOutAuthentication } from "./LogOutAuthentication";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [show, setShow] = useState(false);
  const router = useLocation();
  return (
    <div className="bg-white flex flex-col border-r border pt-3 h-[100vh]">
      <div className="flex flex-row pt-[65px] justify-center">
        <span className="text-route-color font-bold text-[10px] lg:text-[30px] md:text-[30px]">Paymeter</span>
      </div>
      <div className="flex flex-col py-16 gap-4 px-4">
        <Link
          to="/dashboard"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/dashboard"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {router.pathname === "/dashboard" || isHovered ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/dashboard" || isHovered ? (
            <DashboardColor
              className={`${
                router.pathname === "/dashboard"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Dashboard
              className={`${
                router.pathname === "/dashboard"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/dashboard"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Overview
          </p>
        </Link>
        {/* <Link
          to="/customers"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/customers"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id"   ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/customers" || isHovered1 || router.pathname === "/customers/:id" ? (
            <CustomersColor
              className={`${
                router.pathname === "/customers"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Customers
              className={`${
                router.pathname === "/customers" || router.pathname === "/customers/:id"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/customers" || router.pathname === "/customers/:id"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Customers
          </p>
        </Link> */}

        <Link
          to="/institutions"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/institutions"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          {router.pathname === "/institutions" || isHovered3 ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/institutions" || isHovered3 ? (
            <InvestmentsColor
              className={`${
                router.pathname === "/institutions"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Investments
              className={`${
                router.pathname === "/institutions"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/institutions"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Institution
          </p>
        </Link>
        <Link
          to="/discos"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/discos" || router.pathname === '/discos/:id'
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          {router.pathname === "/discos" || isHovered4 ||  router.pathname === '/discos/:id' ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/discos" || isHovered4 || router.pathname === '/discos/:id' ? (
            <LoanColor
              className={`${
                router.pathname === "/discos" || router.pathname === '/discos/:id'
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Loan
              className={`${
                router.pathname === "/discos" || router.pathname === '/discos/:id'
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/discos" || router.pathname === '/discos/:id'
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Discos
          </p>
        </Link>
        <Link
          to="/transactions"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/transactions"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          {router.pathname === "/transactions" || isHovered2 ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/transactions" || isHovered2 ? (
            <TransfersColor
              className={`${
                router.pathname === "/transactions"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Transfers
              className={`${
                router.pathname === "/transactions"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/transactions"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Transactions
          </p>
        </Link>
        {/* <Link
          onClick={() => setShow(!show)}
          className={`flex flex-row h-[35px] ${
            router.pathname === "/airtime" || router.pathname === "/data" || router.pathname === "/cable" || router.pathname === "/electricity"
              ? "bg-route-bg gap-4 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-3 rounded-custom-router"
          }`}
        >
          {router.pathname === "/airtime" || router.pathname === "/data" || router.pathname === "/cable" || router.pathname === "/electricity" ? (
            <Bill
              className={`${
                router.pathname === "/airtime" || router.pathname === "/data" || router.pathname === "/cable" || router.pathname === "/electricity"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Bill
              className={`${
                router.pathname === "/airtime" || router.pathname === "/data" || router.pathname === "/cable" || router.pathname === "/electricity"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
            //   router.pathname === "/airtime" || router.pathname === "/data" || router.pathname === "/cable" || router.pathname === "/electricity"
            //     ? "text-route-color my-[9px] text-[12px] font-medium" :
                 " text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Bill Payments
          </p>
          <div className="items-center my-[15px] ml-[10px] hidden sm:block md:block">
            <Under />
          </div>
        </Link>
        {show && (
          <div className="flex flex-col pl-[10px] gap-2">
            <Link
              to="/airtime"
              className={`flex flex-row h-[33px] ${
                router.pathname === "/airtime"
                  ? "bg-route-bg gap-2 rounded-custom-router"
                  : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
              }`}
              onMouseEnter={() => setIsHovered8(true)}
              onMouseLeave={() => setIsHovered8(false)}
            >
              {router.pathname === "/airtime" || isHovered8 ? (
                <div
                  className={`w-[3px] ${"bg-route-color rounded-t-l"}`}
                ></div>
              ) : (
                <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
              )}
              {router.pathname === "/airtime" || isHovered8 ? (
                <AirtimeColor
                  className={`${
                    router.pathname === "/airtime"
                      ? "fill-current text-route-color my-[9px] hidden sm:block md:block"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px] hidden sm:block md:block"
                  }`}
                />
              ) : (
                <Airtime
                  className={`${
                    router.pathname === "/airtime"
                      ? "fill-current text-route-color my-[9px] hidden sm:block md:block"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px] hidden sm:block md:block"
                  }`}
                />
              )}

              <p
                className={`${
                  router.pathname === "/airtime"
                    ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                    : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
                }`}
              >
                Airtime
              </p>
            </Link>
            <Link
              to="/data"
              className={`flex flex-row h-[33px] ${
                router.pathname === "/data"
                  ? "bg-route-bg gap-2 rounded-custom-router"
                  : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
              }`}
              onMouseEnter={() => setIsHovered9(true)}
              onMouseLeave={() => setIsHovered9(false)}
            >
              {router.pathname === "/data" || isHovered9 ? (
                <div
                  className={`w-[3px] ${"bg-route-color rounded-t-l"}`}
                ></div>
              ) : (
                <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
              )}
              {router.pathname === "/data" || isHovered9 ? (
                <DataColor
                  className={`${
                    router.pathname === "/data"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              ) : (
                <Data
                  className={`${
                    router.pathname === "/data"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              )}

              <p
                className={`${
                  router.pathname === "/data"
                    ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                    : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
                }`}
              >
                Data
              </p>
            </Link>
            <Link
              to="/cable"
              className={`flex flex-row h-[33px] ${
                router.pathname === "/cable"
                  ? "bg-route-bg gap-2 rounded-custom-router"
                  : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
              }`}
              onMouseEnter={() => setIsHovered10(true)}
              onMouseLeave={() => setIsHovered10(false)}
            >
              {router.pathname === "/cable" || isHovered10 ? (
                <div
                  className={`w-[3px] ${"bg-route-color rounded-t-l"}`}
                ></div>
              ) : (
                <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
              )}
              {router.pathname === "/cable" || isHovered10 ? (
                <CableColor
                  className={`${
                    router.pathname === "/cable"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              ) : (
                <Cable
                  className={`${
                    router.pathname === "/cable"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              )}

              <p
                className={`${
                  router.pathname === "/cable"
                    ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                    : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
                }`}
              >
                Cable
              </p>
            </Link>
            <Link
              to="/electricity"
              className={`flex flex-row h-[33px] ${
                router.pathname === "/electricity"
                  ? "bg-route-bg gap-2 rounded-custom-router"
                  : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
              }`}
              onMouseEnter={() => setIsHovered11(true)}
              onMouseLeave={() => setIsHovered11(false)}
            >
              {router.pathname === "/electricity" || isHovered11 ? (
                <div
                  className={`w-[3px] ${"bg-route-color rounded-t-l"}`}
                ></div>
              ) : (
                <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
              )}
              {router.pathname === "/electricity" || isHovered11 ? (
                <ElectricityColor
                  className={`${
                    router.pathname === "/electricity"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              ) : (
                <Electricity
                  className={`${
                    router.pathname === "/electricity"
                      ? "fill-current text-route-color my-[9px]"
                      : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
                  }`}
                />
              )}

              <p
                className={`${
                  router.pathname === "/electricity"
                    ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                    : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
                }`}
              >
               Electricity
              </p>
            </Link>
          </div>
        )}
        <Link
          to="/audit"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/audit"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
        >
          {router.pathname === "/audit" || isHovered5 ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/audit" || isHovered5 ? (
            <AuditIconColor
              className={`${
                router.pathname === "/audit"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <AuditIcon
              className={`${
                router.pathname === "/audit"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/audit"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Audit Trail
          </p>
        </Link>
        <Link
          to="/report"
          className={`flex flex-row h-[33px] ${
            router.pathname === "/report"
              ? "bg-route-bg gap-2 rounded-custom-router"
              : "bg-white hover:bg-route-bg gap-2 rounded-custom-router"
          }`}
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
        >
          {router.pathname === "/report" || isHovered6 ? (
            <div className={`w-[3px] ${"bg-route-color rounded-t-l"}`}></div>
          ) : (
            <div className={`w-[3px] ${" bg-white rounded-t-l"}`}></div>
          )}
          {router.pathname === "/report" || isHovered6 ? (
            <ReportColor
              className={`${
                router.pathname === "/report"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          ) : (
            <Report
              className={`${
                router.pathname === "/report"
                  ? "fill-current text-route-color my-[9px]"
                  : "hover:fill-current hover:text-route-color fill-current text-white my-[9px]"
              }`}
            />
          )}

          <p
            className={`${
              router.pathname === "/report"
                ? "text-route-color my-[9px] text-[12px] font-medium hidden sm:block md:block"
                : "hover:text-route-color text-route-noncolor my-[9px] text-[12px] font-medium hidden sm:block md:block"
            }`}
          >
            Report
          </p>
        </Link> */}
      </div>
      <div
        onClick={() => LogOutAuthentication()}
        className='px-[20px] flex flex-row justify-between text-[14px] border-t-2 py-[15px] cursor-pointer'
      >
        <div className="real">
          <span className="logbut">Log Out</span>
        </div>
        <div className="buttonlogout">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

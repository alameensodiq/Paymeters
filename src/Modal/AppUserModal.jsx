import React, { useEffect, useRef, useState } from "react";
import AppModal from "./AppModal";
import ModalInputText from "../bits/ModalInputText";
import { LargeSignInButton } from "../bits/LargeSignInButton";
// import { ReactComponent as Success } from "../assets/successful.svg";
import toast from "react-hot-toast";
// import { CreateBusinessRepCorporate } from "../Store/Apis/CreateBusinessRepCorporate";
import { useDispatch, useSelector } from "react-redux";
import { CreateBank } from "../MainComponents/Store/Apis/CreateBank";
import { CreatedDisco } from "../MainComponents/Store/Apis/CreatedDisco";
import { ChangePasswords } from "../MainComponents/Store/Apis/Change";
import { CreatePartner } from "../MainComponents/Store/Apis/CreatePartner";
import ModalInputSelect from "../bits/ModalInputSelect";
import ModalInputSelectTwo from "../bits/ModalInputSelectTwo";

const AppUserModal = ({ setStep, step, setReload, retrieval, setShow }) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [bustate3, setBusstate3] = useState(false);
  const [bustate4, setBusstate4] = useState(false);
  const [itemers, setItemer] = useState("");
  const [partner, setPartner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    password_confirmation: ""
  });
  const [regbus, setRegbus] = useState({
    name: "",
    code: "",
    ussd: ""
  });
  const [disc, setDisc] = useState({
    name: "",
    shortName: ""
  });

  const [password, setPassword] = useState("");

  const { createdbank, authenticatingcreatedbank } = useSelector(
    (state) => state?.createdbank
  );
  console.log(createdbank);

  const { createdisc, authenticatingcreatedisc } = useSelector(
    (state) => state?.createdisc
  );
  console.log(createdisc);

  const { changepassword, authenticatingchangepassword } = useSelector(
    (state) => state?.changepassword
  );
  console.log(changepassword);

  const { createpartner, authenticatingcreatepartner } = useSelector(
    (state) => state?.createpartner
  );
  console.log(createpartner);

  useEffect(() => {
    if (bustate && createdbank?.status) {
      setStep(3);
    }
    if (bustate2 && createdisc?.status) {
      setStep(6);
    }
    if (bustate3 && changepassword?.status) {
      setStep(8);
    }
    if (bustate4 && createpartner?.status) {
      setStep(10);
    }

    console.log(update);
  }, [
    update,
    bustate,
    bustate2,
    createdbank?.status,
    createdisc?.status,
    bustate3,
    changepassword?.status,
    createpartner?.status,
    bustate4
  ]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
      [name]: value
    });
  };

  const ChangePartner = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPartner({
      ...partner,
      [name]: value
    });
  };

  const ChangeDisc = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setDisc({
      ...disc,
      [name]: value
    });
  };

  const ChangePass = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setPassword(e.target.value);
  };

  const datePickerRef = useRef(null);

  const SendDetailsBank = () => {
    const { name, code, ussd } = regbus;
    dispatch(
      CreateBank({
        name,
        code,
        ussd
      })
    );
    setBusstate(true);
  };

  const SendDetailsDisco = () => {
    const { name, shortName } = disc;
    dispatch(
      CreatedDisco({
        name,
        shortName
      })
    );
    setBusstate2(true);
  };

  const SendPassword = () => {
    dispatch(
      ChangePasswords({
        password
      })
    );
    setBusstate3(true);
  };

  const SendPartner = () => {
    const { name, email, phone, address, password, password_confirmation } =
      partner;
    dispatch(
      CreatePartner({
        name,
        email,
        phone,
        address,
        password,
        password_confirmation
      })
    );
    setBusstate4(true);
  };

  const handleCloseModal4 = () => {
    setReload(true);
    setStep(0);
    setRegbus({
      name: "",
      code: "",
      ussd: ""
    });
    setPartner({
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      password_confirmation: ""
    });
    setDisc({
      name: "",
      shortName: ""
    });
    setBusstate(false);
    setBusstate2(false);
    setBusstate3(false);
    setPassword("");
    if (setShow) {
      setShow(false);
    }
  };

  const handleSubmit = () => {
    // Destructure partner object
    const { name, email, phone, address, password, password_confirmation } =
      partner;
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !password ||
      !password_confirmation
    ) {
      toast.error("Input all variables");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Add @ to your email input");
      return;
    }
    if (password !== password_confirmation) {
      toast.error("Password and Confirm Password must be the same");
      return;
    }

    // Proceed to next step if all validations pass
    setStep(10);
  };

  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case
      .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize the first letter
  };

  return (
    <div>
      <AppModal
        step={1}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Bank"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => Change(e)}
          name="name"
          value={regbus?.name}
          placeholder={`${`Enter Bank Name`}`}
        />
        <ModalInputText
          label="Code"
          onChange={(e) => Change(e)}
          name="code"
          value={regbus?.code}
          placeholder={`${`Enter Bank Code`}`}
        />
        <ModalInputText
          label="USSD"
          onChange={(e) => Change(e)}
          name="ussd"
          value={regbus?.ussd}
          placeholder={`${`Enter Bank Ussd`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(2)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={2}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Bank, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsBank()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={3}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Business Rep</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={4}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Discos"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangeDisc(e)}
          name="name"
          value={disc?.name}
          placeholder={`${`Enter Disco Name`}`}
        />
        <ModalInputText
          label="Short Name"
          onChange={(e) => ChangeDisc(e)}
          name="shortName"
          value={disc?.shortName}
          placeholder={`${`Enter Disco Short Name`}`}
        />
        <LargeSignInButton
          onClick={() => setStep(5)}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={5}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Disco, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendDetailsDisco()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={6}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Account Created
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Added a new Disco</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={7}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
        wide
        heading="Change Password"
      >
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePass(e)}
          name="password"
          value={password}
          placeholder={`${`Enter New Password`}`}
        />
        <LargeSignInButton
          onClick={() => SendPassword()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={8}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* <Success /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Password Changed
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You have successfully Changed Password</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={9}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="Add Partner"
      >
        <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        />
        <LargeSignInButton
          onClick={() => handleSubmit()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={10}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Confirm Changes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#667085"
            }}
          >
            <span>You are about to add a Partner, Are you sure the</span>
            <span>details are accurate?</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Cancel"
              large
              onClick={() => setStep(0)}
            />
            <LargeSignInButton
              title="Confirm"
              onClick={() => SendPartner()}
              large
              background
              color
            />
          </div>
        </div>
      </AppModal>
      <AppModal
        step={11}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="COMMISSION"
      >
        {/* <ModalInputSelect
          label="User Type"
          options={["Agent", "Api-Partner"]}
        /> */}
        <ModalInputSelectTwo
          label="Commission Type"
          options={["Fixed", "Percentage"]}
          itemer={itemers}
          big
          setItemer={setItemer}
        />
        {itemers === "Fixed" ? (
          <ModalInputText
            label="Fixed"
            // onChange={(e) => ChangePartner(e)}
            name=""
            // value={partner?.email}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemers === "Percentage" ? (
          <ModalInputText
            label="Percentage"
            // onChange={(e) => ChangePartner(e)}
            name=""
            // value={partner?.email}
            placeholder={`${`Enter Percentage Commission`}`}
          />
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          // onClick={() => handleSubmit()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={12}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()

        heading="COMMISSION"
      >
        <ModalInputSelect label="Disco" options={["Eko", "Ikeja"]} />
        <ModalInputSelect
          label="User Type"
          options={["Agent", "Api-Partner"]}
        />
        <ModalInputSelectTwo
          label="Commission Type"
          options={["Fixed", "Percentage"]}
          itemer={itemers}
          big
          setItemer={setItemer}
        />
        {itemers === "Fixed" ? (
          <ModalInputText
            label="Fixed"
            // onChange={(e) => ChangePartner(e)}
            name=""
            // value={partner?.email}
            placeholder={`${`Enter Fixed Commission`}`}
          />
        ) : itemers === "Percentage" ? (
          <>
            <ModalInputText
              label="Percentage"
              // onChange={(e) => ChangePartner(e)}
              name=""
              // value={partner?.email}
              placeholder={`${`Enter Percentage Commission`}`}
            />
            <span style={{ color: "red", fontSize: "10px" }}>
              Note:Percentage Must be less than or equal to Disco Percentage
              with Paymeter
            </span>
            <ModalInputText
              label="Cap Fee"
              // onChange={(e) => ChangePartner(e)}
              name=""
              // value={partner?.email}
              placeholder={`${`Enter Cap Fee`}`}
            />
          </>
        ) : (
          ""
        )}
        {/* <ModalInputText
          label="Name"
          onChange={(e) => ChangePartner(e)}
          name="name"
          value={partner?.name}
          placeholder={`${`Enter Partner Name`}`}
        />
        <ModalInputText
          label="Email"
          onChange={(e) => ChangePartner(e)}
          name="email"
          value={partner?.email}
          placeholder={`${`Enter Email Address`}`}
        />
        <ModalInputText
          label="Phone Number"
          onChange={(e) => ChangePartner(e)}
          name="phone"
          value={partner?.phone}
          placeholder={`${`Enter Phone Number`}`}
        />
        <ModalInputText
          label="Address"
          onChange={(e) => ChangePartner(e)}
          name="address"
          value={partner?.address}
          placeholder={`${`Enter Address`}`}
        />
        <ModalInputText
          label="Password"
          onChange={(e) => ChangePartner(e)}
          name="password"
          value={partner?.password}
          placeholder={`${`Enter Password`}`}
        />
        <ModalInputText
          label="Confirm Password"
          onChange={(e) => ChangePartner(e)}
          name="password_confirmation"
          value={partner?.password_confirmation}
          placeholder={`${`Confirm Passowrd`}`}
        /> */}
        <LargeSignInButton
          // onClick={() => handleSubmit()}
          bigger
          title={"Submit"}
          background
          color
        />
      </AppModal>
      <AppModal
        step={13}
        currentStep={step}
        closeModal={handleCloseModal4}
        // updateUserListData(update);
        // window.location.reload()
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {retrieval?.map(([key, value]) => {
            // Check if the value is an array and has more than 1 item
            if (Array.isArray(value) && value.length > 1) {
              return (
                <div key={key}>
                  <strong>{formatKey(key)}:</strong>
                  <table
                    style={{ marginLeft: "20px", borderCollapse: "collapse" }}
                  >
                    <thead>
                      <tr>
                        {Object.keys(value[0]).map((subKey) => (
                          <th
                            key={subKey}
                            style={{
                              border: "1px solid black",
                              padding: "5px"
                            }}
                          >
                            {formatKey(subKey)} {/* Format the key here */}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {value.map((item, index) => (
                        <tr key={`${key}-${index}`}>
                          {Object.values(item).map((subValue, subIndex) => (
                            <td
                              key={`${key}-${index}-${subIndex}`}
                              style={{
                                border: "1px solid black",
                                padding: "5px"
                              }}
                            >
                              {subValue}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            } else if (typeof value === "object" && value !== null) {
              return (
                <div key={key}>
                  <strong>{formatKey(key)}:</strong>
                  <span>{JSON.stringify(value)}</span>
                </div>
              );
            } else {
              return (
                <div
                  key={key}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0px"
                  }}
                >
                  <strong>{formatKey(key)}:</strong>
                  <span>{value}</span>
                </div>
              );
            }
          })}
          {/* <Success /> */}
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            Password Changed
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            <LargeSignInButton
              title="Close"
              onClick={() => handleCloseModal4()}
              big
              background
              color
            />
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default AppUserModal;

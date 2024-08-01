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

const AppUserModal = ({ setStep, step, setReload }) => {
  const dispatch = useDispatch();
  const [hide, sethide] = useState(false);
  const [uploadfile, setupload] = useState("");
  const [update, setUpdate] = useState("");
  const [bustate, setBusstate] = useState(false);
  const [bustate2, setBusstate2] = useState(false);
  const [bustate3, setBusstate3] = useState(false);
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

    console.log(update);
  }, [
    update,
    bustate,
    bustate2,
    createdbank?.status,
    createdisc?.status,
    bustate3,
    changepassword?.status
  ]);

  const Change = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setRegbus({
      ...regbus,
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
      ChangePasswords({
        password
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
    const { name, shortName } = disc;
    dispatch(
      CreatedDisco({
        name,
        shortName
      })
    );
    setBusstate3(true);
  };

  const handleCloseModal4 = () => {
    setStep(0);
    setRegbus({
      name: "",
      code: "",
      ussd: ""
    });
    setDisc({
      name: "",
      shortName: ""
    });
    setBusstate(false);
    setBusstate2(false);
    setBusstate3(false);
    setReload(true);
    setPassword("");
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
    </div>
  );
};

export default AppUserModal;

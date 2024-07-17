import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme, styled } from "@mui/material";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Tables = ({
  customers,
  transfers,
  investments,
  loans,
  audit,
  airtime,
  overview,
  data,
  meter
}) => {
  const navigate = useNavigate();
  console.log(data);
  const theme = createTheme({
    typography: {
      fontFamily: ["inter"].join(",")
    }
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // fontFamily: `Inter sans-serif`,
      fontWeight: 600,
      fontSize: "10px",
      lineHeight: "13px",
      // fontFamily: "Exo 2, !important",
      /* identical to box height, or 150% */
      alignItems: "center",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "rgba(104, 113, 130, 1)",
      borderBottom: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      backgroundColor: "rgba(249, 250, 251, 1)",
      fontFamily: theme?.typography?.fontFamily
      //   alignItems: 'center',
      //   textTransform: 'uppercase',
      // border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: theme?.typography?.fontFamily,
      border: 0,
      color: "rgba(90, 99, 118, 1)",
      flexWrap: "wrap"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    "&:nth-of-type(odd)": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));
  return (
    <div>
      {customers ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  DATE OF BIRTH
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  FULL NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  USERNAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  GENDER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell style={{ width: "5%" }}>1</StyledTableCell>
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <p
                    className="text-route-color"
                    onClick={() => navigate("/customers/:id")}
                  >
                    View
                  </p>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "5%" }}>2</StyledTableCell>
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <p
                    className="text-route-color"
                    onClick={() => navigate("/customers/:id")}
                  >
                    View
                  </p>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "5%" }}>3</StyledTableCell>
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <p
                    className="text-route-color"
                    onClick={() => navigate("/customers/:id")}
                  >
                    View
                  </p>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : transfers ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  METER TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>RRN</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PAYMENT TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PAYMENT DATE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  TRANSACTION REFERENCE
                </StyledTableCell>
                <StyledTableCell style={{ width: "5%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  BANK NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  BANK USSD
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DISCOS
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "5%" }}>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.type}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.rrn}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentType}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">{item?.paymentTime}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.txRef}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "5%" }}>
                    {item?.amount?.AMOUNT}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.bank?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.bank?.ussd}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.account?.disco?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.paymentStatus === "successfull" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : investments ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "20%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  INSTITUTION NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  INSTITUTION USSD
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DATE ADDED
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  AMOUNT RECEIVED
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "20%" }}
                  >
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.ussd}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/04/1975
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    200,000
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : loans ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "20%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DISCOS NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  SHORT NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE ADDED
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%", textAlign: "center" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>1</StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    29a, berkeley
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.shortName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    12/05/2024
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button
                      onClick={() => navigate(`/discos/${item?.id}`)}
                      className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                    >
                      View
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : audit ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "20%" }}>
                  DATE & TIME
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>USER</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  ACTION
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DEVICE USED
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  BROWSER USED
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975 09:11:04
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Create User
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Macbook Pro 2020
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Chrome
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975 09:11:04
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Create User
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Macbook Pro 2020
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Chrome
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975 09:11:04
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Create User
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Macbook Pro 2020
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Chrome
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : airtime ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SENDER'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  SENDER'S ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BENEFICIARY'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SERVICE PROVIDER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  TRANSACTION ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0040759354
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>GLO</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                    Successful
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AIRTEL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ETISALAT
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : overview ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ACCOUNT NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  FULL NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE OF BIRTH
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE JOINED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>1</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-successbg h-[30px] w-[70%] rounded-full text-successtext font-semibold text-[9px]">
                    Successful
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>2</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>3</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>4</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button className="bg-pendingbg h-[30px] w-[70%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : meter ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  METER TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ACCOUNT NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BANK
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DISCO SHORT NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  CUSTOMER REFERENCE
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.type}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.accountName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.address}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.bank?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.disco?.shortName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    <Moment format="DD-MM-YYYY">{item?.createdAt}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.customerReference}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tables;

import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./Reducers/Login";
import { BanksSlice } from "./Reducers/Banks";
import { DiscosSlice } from "./Reducers/Discos";
import { TransactionSlice } from "./Reducers/Transactions";
import { CreateBankSlice } from "./Reducers/CreateBank";
import { CreatesDiscSlice } from "./Reducers/CreatedDisc";
import { DiscometerSlice } from "./Reducers/Discometer";
import { DashboardSlice } from "./Reducers/Dashboard";
import { PaymentSlice } from "./Reducers/Payments";
import { ShiftSlice } from "./Reducers/Shift";
import { ForgotSlice } from "./Reducers/ForgotPassword";
import { ChangePasswordsSlice } from "./Reducers/ChangePassword";
import { ApiAgentRoleSlice } from "./Reducers/ApiagentRole";
import { CreatePartnerSlice } from "./Reducers/CreatePartner";
import { RetrievalSlice } from "./Reducers/Retrieval";
import { BalanceSlice } from "./Reducers/Balance";

export default configureStore({
  reducer: {
    login: LoginSlice?.reducer,
    banks: BanksSlice?.reducer,
    discos: DiscosSlice?.reducer,
    transactions: TransactionSlice?.reducer,
    createdbank: CreateBankSlice?.reducer,
    createdisc: CreatesDiscSlice?.reducer,
    discometer: DiscometerSlice?.reducer,
    dashboard: DashboardSlice?.reducer,
    payment: PaymentSlice?.reducer,
    shift: ShiftSlice?.reducer,
    forgot: ForgotSlice?.reducer,
    changepassword: ChangePasswordsSlice?.reducer,
    apiagentrole: ApiAgentRoleSlice?.reducer,
    createpartner: CreatePartnerSlice?.reducer,
    retrieval: RetrievalSlice?.reducer,
    balance: BalanceSlice?.reducer
  }
});

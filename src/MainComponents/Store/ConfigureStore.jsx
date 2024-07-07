import { configureStore } from '@reduxjs/toolkit';
import { LoginSlice } from './Reducers/Login';
import { BanksSlice } from './Reducers/Banks';
import { DiscosSlice } from './Reducers/Discos';
import { TransactionSlice } from './Reducers/Transactions';
import { CreateBankSlice } from './Reducers/CreateBank';
import { CreatesDiscSlice } from './Reducers/CreatedDisc';




export default configureStore({
    reducer: {
        login: LoginSlice?.reducer,
        banks: BanksSlice?.reducer,
        discos: DiscosSlice?.reducer,
        transactions: TransactionSlice?.reducer,
        createdbank: CreateBankSlice?.reducer,
        createdisc: CreatesDiscSlice?.reducer

    }
});
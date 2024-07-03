import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './MainComponents/Login';
import Dashboard from './MainComponents/Components/Dashboard';
import Customers from './MainComponents/Components/Customers';
import Investments from './MainComponents/Components/Investments';
import Transfers from './MainComponents/Components/Transfers';
import Loans from './MainComponents/Components/Loans';
import Audit from './MainComponents/Components/Audit';
import Report from './MainComponents/Components/Report';
import Electricity from './MainComponents/Components/Electricity';
import Cable from './MainComponents/Components/Cable';
import Data from './MainComponents/Components/Data';
import Airtime from './MainComponents/Components/Airtime';
import CustomerInfo from './MainComponents/Components/CustomerInfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard title={'Dashboard'}/>} />
      <Route path='/customers' element={<Customers/>} />
      <Route path='/discos/:id' element={<CustomerInfo title={'Meter under Discos'}/>} />
      <Route path='/institutions' element={<Investments title={'Institutions'}/>} />
      <Route path='/transactions' element={<Transfers title={'Transactions'}/>} />
      <Route path='/discos' element={<Loans title={'Discos'}/>} />
      {/* <Route path='/audit' element={<Audit/>} />
      <Route path='/airtime' element={<Airtime/>} />
      <Route path='/data' element={<Data/>} />
      <Route path='/cable' element={<Cable/>} />
      <Route path='/electricity' element={<Electricity/>} />
      <Route path='/report' element={<Report/>} /> */}
    </Routes>
  );
}

export default App;

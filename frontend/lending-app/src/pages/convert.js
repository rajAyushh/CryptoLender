import React, { useState } from 'react';
import './convert.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './Components/appbar'
import { cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#009da1',
    },
  },
  text: {
      primary: {
          main: '#FFFFFF',
      },
  }
});

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [rcoin, setRcoin] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [otp, setOtp] = useState('');

  const convertToRcoin = () => {
    const rcoinAmount = rupees * 0.99;
    setRcoin(rcoinAmount);
  };

  const handleRupeesChange = (event) => {
    setRupees(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleBankAccountChange = (event) => {
    setBankAccount(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    // submit payment details to the server
    // reset payment form fields
    setCardNumber('');
    setCvv('');
    setBankAccount('');
    setOtp('');
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <AppBar/>
    <div>
    <Typography variant='h3' marginTop={11} marginBottom={4}>Currency Converter</Typography>
    <div>
    <Typography variant='h5' marginBottom={2}>Rupees:</Typography>
          <TextField label="Amount in rupees" variant="outlined" marginBottom={5}
            value={rupees} onChange={handleRupeesChange}/>
    </div>
        {/* <input type="number" value={rupees} onChange={handleRupeesChange} /> */}
       <Button variant='contained' margin={5} onClick={convertToRcoin}>Convert to RCOIN</Button>
       <Typography variant='h5' margin={2}>RCoins: {rcoin}</Typography>
       <Divider/>
             <form onSubmit={handlePaymentSubmit}>
        <label>
          Card Number:
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </label>
        <label>
          CVV:
          <input type="password" value={cvv} onChange={handleCvvChange} />
        </label>
        <label>
          Bank Account:
          <input type="text" value={bankAccount} onChange={handleBankAccountChange} />
        </label>
        <label>
          OTP:
          <input type="password" value={otp} onChange={handleOtpChange} />
        </label>
        <Button variant='contained' margin={5} type='submit'>Submit</Button>
      </form>
    </div>
    </ThemeProvider>
  );
}

export default CurrencyConverter;

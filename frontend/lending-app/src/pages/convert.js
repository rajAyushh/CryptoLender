import React, { useState } from 'react';
import './convert.css';

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
    <div>
      <h1>Currency Converter</h1>
      <label>
        Rupees:
        <input type="number" value={rupees} onChange={handleRupeesChange} />
      </label>
      <button onClick={convertToRcoin}>Convert to RCOIN</button>
      <div>Rcoin: {rcoin}</div>
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
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;

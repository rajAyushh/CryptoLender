import React, { useState } from 'react';

function EmiCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEmi = () => {
    const p = parseInt(principal);
    const r = parseFloat(interestRate) / (12 * 100);
    const n = parseInt(duration);

    if (p && r && n) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emi.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Monthly EMI Calculator</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="principal">Principal Amount:</label>
          <input type="number" id="principal" name="principal" required
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate:</label>
          <input type="number" id="interestRate" name="interestRate" required
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in months):</label>
          <input type="number" id="duration" name="duration" required
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button type="submit" onClick={calculateEmi}>Calculate EMI</button>
      </form>
      {emi && (
        <div>
          <h3>EMI: {emi} per month</h3>
          <p>Total Interest Payable: {(emi * duration - principal).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default EmiCalculator;

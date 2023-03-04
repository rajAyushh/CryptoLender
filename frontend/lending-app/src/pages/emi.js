import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './Components/appbar';
import Typography from '@mui/material/Typography';

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
    <ThemeProvider theme={mdTheme}>
    <div>
      <AppBar/>
      <Typography variant='h3' marginTop={11} marginBottom={4}> Monthly EMI Calculator</Typography>
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
    </ThemeProvider>
  );
}

export default EmiCalculator;

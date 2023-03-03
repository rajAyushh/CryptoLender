import React, { useState } from 'react';
import './listing.css';
import AppBar from './Components/appbar'
import { blue, cyan } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

const mdTheme = createTheme({
    palette: {
      primary: {
        main: '#009da1',
      },
      secondary: {
        main: cyan[500],
      },
    },
    text: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: cyan[500],
        }
    }
  });


function CreateListingPage() {
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [savedListings, setSavedListings] = useState([]);

  const handleSaveListing = (event) => {
    event.preventDefault();
    const newListing = { amount, duration, interestRate };
    setSavedListings([...savedListings, newListing]);
    setAmount('');
    setDuration('');
    setInterestRate('');
  };

  return (
    <ThemeProvider theme={mdTheme}>
    <div>
      <div className="container">
        <div>
          <AppBar/>
          <Typography
              component="h5"
              variant="h6"
              color='#009da1'
              noWrap
              marginTop={5}
              fontWeight={700}
              fontSize={50}
              sx={{ flexGrow: 0, mb: 2 }}
            >
              Welcome to P2P
          </Typography>
    <div>
      <h1>Create a Listing</h1>
      <form onSubmit={handleSaveListing}>
        <label>
          Amount to be Lent:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <label>
          Duration (in months):
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br />
        <label>
          Interest Rate:
          <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
        <br />
        <button type="submit">Save Listing</button>
      </form>
      <h2>Saved Listings:</h2>
      <ul>
        {savedListings.map((listing, index) => (
          <li key={index}>
            <p>Amount: {listing.amount}</p>
            <p>Duration: {listing.duration} months</p>
            <p>Interest Rate: {listing.interestRate}%</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
    </ThemeProvider>
  );
}


export default CreateListingPage;

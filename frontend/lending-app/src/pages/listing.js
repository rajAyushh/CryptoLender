import React, { useState } from 'react';
import './listing.css';
import AppBar from './Components/appbar'
import { cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';


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
    <div>
      <Typography 
          component="h2"
          variant="h4"
          color='#13293D'
          noWrap
          marginTop={5}
          fontWeight={700}
          sx={{ flexGrow: 0, mb: 3 }}>
      Create a Listing
      </Typography>
      <Divider/>
      <form onSubmit={handleSaveListing} width='100%'>
      <Typography component="h4"
          variant="h6"
          color='#247BA0'
          noWrap
          marginTop={2}
          marginBottom={2}>
          Amount to be Lent:
          </Typography>
          <TextField id="amount-lent" label="Amount" variant="outlined" value={amount} width='100%' onChange={(e) => setAmount(e.target.value)}/>
        <br />
        <Typography component="h4"
          variant="h6"
          color='#247BA0'
          noWrap
          marginTop={1}
          marginBottom={2}>
              Duration(in months)
          </Typography>
          <TextField id="duration" label="Duration" variant="outlined" value={duration} onChange={(e) => setDuration(e.target.value)}/>
        <br />
        <Typography component="h4"
          variant="h6"
          color='#247BA0'
          noWrap
          marginTop={1}
          marginBottom={2}>
              Interest Rate
          </Typography>
          <TextField id="interest-rate" label="Interest Rate" variant="outlined" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}/>
          <Button variant="contained" type="submit" marginTop={8}>Save Listing</Button>
        <br />
      </form>

      
      {/* <h2>Saved Listings:</h2>
      <ul>
        {savedListings.map((listing, index) => (
          <li key={index}>
            <p>Amount: {listing.amount}</p>
            <p>Duration: {listing.duration} months</p>
            <p>Interest Rate: {listing.interestRate}%</p>
          </li>
        ))}
      </ul> */}
    </div>
    </div>
    </div>
    </div>
    </ThemeProvider>
  );
}


export default CreateListingPage;

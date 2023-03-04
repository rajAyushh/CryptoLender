import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import './borrow.css'; // import the CSS file
import AppBar from './Components/appbar'
import { blue, cyan } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';  
import Button from '@mui/material/Button';  


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


export default function Borrow() {
  const [opt, setOpt] = React.useState('');

  const handleChange = (event) => {
    setOpt(event.target.value);
  };
  
  return (
    <ThemeProvider theme={mdTheme}>
    <div className='main'>
      <div className="container">
        <div>
          <AppBar/>
          <FormControl sx={{width: 500, mb:2, mt:6}}>
            <InputLabel id="sort by">Sort By</InputLabel>
            <Select
              labelId="sort by"
              id="sorter"
              value={opt}
              label="options"
              onChange={handleChange}
            >
              <MenuItem value={10}>Amount</MenuItem>
              <MenuItem value={20}>Interest Rate</MenuItem>
              <MenuItem value={30}>Payback Period</MenuItem>
              <MenuItem value={40}>Price: High to Low</MenuItem>
              <MenuItem value={50}>Price: Low to High</MenuItem>
            </Select>
          </FormControl>
          <div className='postings'>
            <div className="posting">
              {/* <img src="https://via.placeholder.com/150" alt="Posting Image" /> */}
              <div>
                <h4>Posting By: ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad</h4>
                <p>Amount: 1000</p>
                <p>Duration: 2months</p>
                <p>Interest Rate: 12%</p>
                <div>
                  <Button variant="contained" sx={{mr: 3, backgroundColor: '#009da1'}}>Borrow</Button>
                  <Button variant="contained" >Save</Button>
                </div>
              </div>
            </div>
            <div className="posting">
              {/* <img src="https://via.placeholder.com/150" alt="Posting Image" /> */}
              <div>
                <h4>Posting By: b4d1efd97cb2483c9c25df53981be395acad99720c3d1bdf0259b1b349ee53fe</h4>
                <p>Amount: 1500</p>
                <p>Duration: 2months</p>
                <p>Interest Rate: 13%</p>
                <div>
                  <Button variant="contained" sx={{mr: 3}}>Borrow</Button>
                  <Button variant="contained">Save</Button>
                </div>
              </div>
            </div>
            <div className="posting">
              {/* <img src="https://via.placeholder.com/150" alt="Posting Image" /> */}
              <div>
                <h4>Posting By: 9060f0c21ceab31936f5e6bde6165ca36ca156319bbaf89b075cc82588bad811</h4>
                <p>Amount: 2000</p>
                <p>Duration: 3months</p>
                <p>Interest Rate: 15%</p>
                <div>
                  <Button variant="contained" sx={{mr: 3}}>Borrow</Button>
                  <Button variant="contained">Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}


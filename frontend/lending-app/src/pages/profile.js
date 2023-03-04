import React, { useState } from 'react';
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

function Wallet() {
  const [walletAmount, setWalletAmount] = useState(1000);
  const [showTransactions, setShowTransactions] = useState(false);
  const [transactionList, setTransactionList] = useState([]);
  const [transaction, setTransaction] = useState({ amount: '', type: '', description: '' });

  const handleTransaction = (transaction) => {
    if (transaction.type === 'credit') {
      setWalletAmount(prevAmount => prevAmount + transaction.amount);
    } else {
      setWalletAmount(prevAmount => prevAmount - transaction.amount);
    }
    setTransactionList(prevList => [transaction, ...prevList]);
    setTransaction({ amount: '', type: '', description: '' });
  };

  return (
    <ThemeProvider theme={mdTheme}>
    <AppBar/>
    <div>
      <div>
       <Typography variant='h3' marginTop={11}>My Wallet</Typography>
        <Typography variant='h5' margin={2}>Current Balance: ${walletAmount}</Typography>
        <Button variant="contained" marginBottom={2} onClick={() => setShowTransactions(prev => !prev)}>
          {showTransactions ? 'Hide Transactions' : 'Show Transactions'}
        </Button>
      </div>
      {/* {showTransactions && (
        <TransactionList transactionList={transactionList} />
      )} */}
      <Divider/>
      <div className="transaction-form">
        <h2>Make a Transaction</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div >
          <Typography variant='h5' marginBottom={2}>Amount to transfer:</Typography>
            <TextField id="outlined-basic" label="Amount" variant="outlined" marginBottom={2}
            value={transaction.amount}
            onChange={(e) => setTransaction({...transaction, amount: parseInt(e.target.value)})}/>
            {/* <input type="number" id="amount" name="amount" required
              value={transaction.amount}
              onChange={(e) => setTransaction({...transaction, amount: parseInt(e.target.value)})}
            /> */}
          </div>
          <div>
            {/* <label htmlFor="type">Type:</label> */}
            <Typography variant='h5' marginBottom={2} marginTop={4}>Type of transaction:</Typography>
            <FormControl fullWidth marginBottom={2}>
                
                <InputLabel id="type">Select type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="type"
                    value={transaction.type}
                    label="Type"
                    onChange={(e) => setTransaction({...transaction, type: e.target.value})}
                >
                <MenuItem value={1}>Credit</MenuItem>
                <MenuItem value={2}>Debit</MenuItem>
                </Select>
            </FormControl>
            {/* <select id="type" name="type" required
              value={transaction.type}
              onChange={(e) => setTransaction({...transaction, type: e.target.value})}
            >
              <option value="">Select a type</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select> */}
          </div>
          <div className="form-group">
          <Typography variant='h5' marginBottom={2} marginTop={2}>Description:</Typography>
            <TextField id="outlined-basic" label="Description" variant="outlined" marginBottom={4}
                value={transaction.description}
                onChange={(e) => setTransaction({...transaction, description: e.target.value})}/>
            {/* <input type="text" id="description" name="description" required
              value={transaction.description}
              onChange={(e) => setTransaction({...transaction, description: e.target.value})}
            /> */}
          </div>
          <Button variant="contained" type="submit" marginTop={2} onClick={() => handleTransaction(transaction)}>Submit</Button>
        </form>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default Wallet;
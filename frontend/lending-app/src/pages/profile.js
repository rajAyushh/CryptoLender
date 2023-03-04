import React, { useState } from 'react';
// import './wallet.css';
// import TransactionList from './TransactionList';

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
    <div className="wallet-container">
      <div className="wallet-header">
        <h1>My Wallet</h1>
        <p>Current Balance: ${walletAmount}</p>
        <button onClick={() => setShowTransactions(prev => !prev)}>
          {showTransactions ? 'Hide Transactions' : 'Show Transactions'}
        </button>
      </div>
      {/* {showTransactions && (
        <TransactionList transactionList={transactionList} />
      )} */}
      <div className="transaction-form">
        <h2>Make a Transaction</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" required
              value={transaction.amount}
              onChange={(e) => setTransaction({...transaction, amount: parseInt(e.target.value)})}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" required
              value={transaction.type}
              onChange={(e) => setTransaction({...transaction, type: e.target.value})}
            >
              <option value="">Select a type</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" required
              value={transaction.description}
              onChange={(e) => setTransaction({...transaction, description: e.target.value})}
            />
          </div>
          <button type="submit" onClick={() => handleTransaction(transaction)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Wallet;
const SHA256 = require("crypto-js/sha256");
class CryptoBlock {
  constructor(height, merkleRoot, previousHash = " ") {
    this.height = height;
    this.timestamp = Date.now();
    this.merkleRoot = merkleRoot;
    this.previousHash = previousHash;
    this.currentHash = this.computeHash();
    this.nonce = 0;
    this.difficulty = 4;
  }

  computeHash() {
    return SHA256(
      this.height +
        this.previousHash +
        this.timestamp +
        this.merkleRoot +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
  startGenesisBlock() {
    return new CryptoBlock(0, "Initial Block in the Chain", "0");
  }
  //first put genesis block to the table
  //   checkChainValidity(lastBlockHeight, ) {
  //     for (let i = 1; i < lastBlockHeight; i++) {
  //       const currentBlock = this.blockchain[i];
  //       const precedingBlock = this.blockchain[i - 1];

  //       if (currentBlock.hash !== currentBlock.computeHash()) {
  //         return false;
  //       }
  //       if (currentBlock.previousHash !== precedingBlock.hash) return false;
  //     }
  //     return true;
  //   }
}

// class CryptoBlockchain {
//   constructor() {
//     this.blockchain = [this.startGenesisBlock()];
//     this.difficulty = 4;
//   }
//   startGenesisBlock() {
//     return new CryptoBlock(0, "Initial Block in the Chain", "0");
//   }
//   obtainLatestBlock() {
//     return this.blockchain[this.blockchain.length - 1];
//     //use mongoDB to get the last block height
//   }
//   addNewBlock(newBlock) {
//     newBlock.previousHash = this.obtainLatestBlock().hash;
//     //newBlock.hash = newBlock.computeHash();
//     newBlock.proofOfWork(this.difficulty);
//     this.blockchain.push(newBlock);
//   }

  
// }
// class rupeeCOINTransaction {
//   constructor(sender, recipient, quantity, interestRate) {
//     this.txnId=Date.now().toString(36) + Math.random().toString(36).substr(2);
//     this.sender = sender;
//     this.recipient = recipient;
//     this.quantity = quantity;
//     this.interestRate = interestRate;
//   }
//   //push transaction data in db +++ the hash of txn
//   computeTransactionHash() {
//     return SHA256(
//       this.sender + "sent"+
//         this.recipient + 
//         + this.quantity+
//         "rupeeCOIN at"+ this.interestRate+ "on"+
//         this.timestamp + "txnID" + this.txnId
//     ).toString();
//   }

// }
// let txn = new rupeeCOINTransaction();
let rupeeCOIN = new CryptoBlockchain();

console.log("rupeeCOIN mining in progress....");
// rupeeCOIN.addNewBlock(
//   new CryptoBlock(1, "01/06/2020", {
//     sender: "Iris Ljesnjanin",
//     recipient: "Cosima Mielke",
//     quantity: 50,
//   })
// );

// rupeeCOIN.addNewBlock(
//   new CryptoBlock(2, "01/07/2020", {
//     sender: "Vitaly Friedman",
//     recipient: "Ricardo Gimenes",
//     quantity: 100,
//   })
// );

// console.log(JSON.stringify(rupeeCOIN, null, 4));
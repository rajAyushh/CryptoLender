class rupeeCOINTransaction {
  constructor(sender, recipient, quantity, interestRate) {
    this.txnId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    this.sender = sender;
    this.recipient = recipient;
    this.quantity = quantity;
    this.interestRate = interestRate;
  }
  //push transaction data in db +++ the hash of txn
  computeTransactionHash() {
    return SHA256(
      this.sender +
        "sent" +
        this.recipient +
        +this.quantity +
        "rupeeCOIN at" +
        this.interestRate +
        "on" +
        this.timestamp +
        "txnID" +
        this.txnId
    ).toString();
  }
}
let txn = new rupeeCOINTransaction();
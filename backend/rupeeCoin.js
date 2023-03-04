const SHA256 = require("crypto-js/sha256");
const { MerkleTree } = require("merkletreejs");
class MerkleTree{
    computeMerkleRoot(txnHashArray){
        const tree = new MerkleTree(txnHashArray, SHA256);
        return tree.getRoot().toString("hex");
    }
    // verifyLeaf(leafHash){
    //     const leaves = ["a", "b", "c"].map((x) => SHA256(x));
    //     const tree = new MerkleTree(leaves, SHA256);
    //     const root = tree.getRoot().toString("hex");
    //     const leaf = SHA256("a");
    //     const proof = tree.getProof(leaf);
    //     console.log(tree.verify(proof, leaf, root));
    // }
}
class CryptoBlock {
  constructor(prevHeight,txnHashArray , merkleRoot, previousHash = " ") {
    this.height = prevHeight++;
    this.timestamp = Date.now();
    this.merkleRoot = MerkleTree.computeMerkleRoot(txnHashArray);
    this.previousHash = previousHash;
    this.nonce = 0;
    this.difficulty = 4;
    this.currentHash = this.computeHash();
  }

  computeHash() {
    return SHA256(
      this.height +
        this.previousHash +
        this.timestamp +
        this.merkleRoot +
        this.nonce + this.difficulty
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
  }}
  //first put genesis block to the table
const rupeeCOIN = new CryptoBlock();
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
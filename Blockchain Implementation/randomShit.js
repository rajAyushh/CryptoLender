let cc = Date.now();
const SHA256 = require("crypto-js/sha256");
const { MerkleTree } = require("merkletreejs");
let kk = SHA256("ayush");
console.log("Welcome to Programiz!" + cc + "  \n" + typeof cc);
console.log("\n. " + kk + "\n" + typeof(kk));
function computeMerkleRoot(txnHashArray) {
    const tree = new MerkleTree(txnHashArray, SHA256);
    return tree.getRoot().toString("hex");}
console.log(
  "\nMerkle root is: \n" +
    computeMerkleRoot(["a", "b", "c", "d", "e"]) +
    "\n" +
    typeof computeMerkleRoot(["a", "b", "c", "d", "e"])
);

import contractInstance from "./abi.js";
const web3 = new Web3(window.ethereum);
let userAccount;

const button = document.getElementById("wallet_btn");
button.addEventListener("click", async () => {
  if (typeof web3 !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => {
          userAccount = accounts[0];
          console.log("Address of Account", userAccount);
        });
      await web3.eth.getBalance(userAccount, (error, balance) => {
        if (!error) {
          console.log("Balance:", web3.utils.fromWei(balance, "ether"), "ETH");
        }
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("You need to install metamask");
  }
});

console.log(contractInstance);

const input_field1= document.getElementById("inputField1");
input_field1.addEventListener("input", async (event) => {
  const a = event.target.value;
  console.log("Value of a = ", a);
});

const setA = document.getElementById("Set_A");
setA.addEventListener("click", async () => {
  const valueOf_a = parseInt(input_field1.value);

  try {
    // Estimate gas required for the transaction
    const gasEstimate = await contractInstance.methods
      .setA(valueOf_a)
      .estimateGas({ from: userAccount });

    console.log("Estimated gas cost:", gasEstimate);

    // Send the transaction with the estimated gas
    const a = await contractInstance.methods
      .setA(valueOf_a)
      .send({ from: userAccount }); // Adjust gasPrice if needed

    console.log(a);
  } catch (err) {
    console.error("Deposit funds transaction failed:", err.message);
  }
});

const input_field2 = document.getElementById("inputField2");
input_field2.addEventListener("input", async (event) => {
  const b = event.target.value;
  console.log("Value of b = ", b);
});
const setB = document.getElementById("Set_B");
setB.addEventListener("click", async () => {
  const valueOf_b = parseInt(input_field2.value);

  try {
    // Estimate gas required for the transaction
    const gasEstimate = await contractInstance.methods
      .setB(valueOf_b)
      .estimateGas({ from: userAccount });

    console.log("Estimated gas cost:", gasEstimate);

    // Send the transaction with the estimated gas
    const b = await contractInstance.methods
      .setB(valueOf_b)
      .send({ from: userAccount }); // Adjust gasPrice if needed

    console.log(b);
  } catch (err) {
    console.error("Deposit funds transaction failed:", err.message);
  }
});
const getA = document.getElementById("Get_A");
getA.addEventListener("click",async () => {
  try {
    const data1 = await contractInstance.methods.geta().call();
    console.log("Values are a : ", data1);
  } catch (error) {
    console.log(error);
  }
  
})

const getB = document.getElementById("Get_B");
getB.addEventListener("click",async () => {
  try {
    const data2 = await contractInstance.methods.getb().call();
    console.log("Values are b : ", data2);
  } catch (error) {
    console.log(error);
  }
  
})

const sum = document.getElementById("Sum");
sum.addEventListener("click",  async () => {
  try {
    const sum = await contractInstance.methods.sum().call();
    console.log("sUM oF a and b = ", sum);
  } catch (err) {
    console.log("Transaction Failed", err);
  }
});

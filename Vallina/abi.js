const address = "0x1941eB3505a0E8c1b1E6f583Cb2666eD9Da9A02B";
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val_a",
        type: "uint256",
      },
    ],
    name: "setA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val_b",
        type: "uint256",
      },
    ],
    name: "setB",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "geta",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const web3 = new Web3(window.ethereum);
const contractInstance = new web3.eth.Contract(abi, address);

export default contractInstance;

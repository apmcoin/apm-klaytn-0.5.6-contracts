/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleNFT, SampleNFTInterface } from "../SampleNFT";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
      {
        name: "uri",
        type: "string",
      },
    ],
    name: "setVariableBaseUri",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "variableBaseUri",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256[]",
      },
    ],
    name: "batchMint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isPauser",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "tokensOfOwner",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mintLimit",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "setTokenUriIndex",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256[]",
      },
    ],
    name: "batchTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        name: "uri",
        type: "string",
      },
    ],
    name: "SetVariableBaseUri",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        name: "index",
        type: "uint256",
      },
    ],
    name: "SetTokenUriIndex",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x612710601155600a60809081527f53616d706c654e4654200000000000000000000000000000000000000000000060a052610100604052600360c09081527f4e4654000000000000000000000000000000000000000000000000000000000060e0528181620000957f01ffc9a70000000000000000000000000000000000000000000000000000000062000189602090811b901c565b620000ad6380ac58cd60e01b6200018960201b60201c565b620000c563780e9d6360e01b6200018960201b60201c565b8151620000da90600990602085019062000423565b508051620000f090600a90602084019062000423565b5062000109635b5e139f60e01b6200018960201b60201c565b505050506200011e336200025860201b60201c565b6200013663eab83e2060e01b6200018960201b60201c565b6200014733620002aa60201b60201c565b600e805460ff19169055620001837f4d5507ff0000000000000000000000000000000000000000000000000000000062000189602090811b901c565b620004c8565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200021b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b6200027381600c620002fc60201b620020ee1790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620002c581600d620002fc60201b620020ee1790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6200030e8282620003a060201b60201c565b156200037b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b03821662000403576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062002f0d6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200046657805160ff191683800117855562000496565b8280016001018555821562000496579182015b828111156200049657825182559160200191906001019062000479565b50620004a4929150620004a8565b5090565b620004c591905b80821115620004a45760008155600101620004af565b90565b612a3580620004d86000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80636352211e1161011a57806398650275116100ad578063abf4cf221161007c578063abf4cf221461073f578063ac3c995214610762578063b88d4fde146107e0578063c87b56dd146108a4578063e985e9c5146108c157610206565b806398650275146106db578063996517cf146106e3578063a22cb465146106eb578063aa271e1a1461071957610206565b80638456cb59116100e95780638456cb591461062f5780638462151c1461063757806395d89b41146106ad578063983b2d56146106b557610206565b80636352211e146105be5780636ef8d66d146105db57806370a08231146105e357806382dc1ec41461060957610206565b80632f745c591161019d5780634684d7e91161016c5780634684d7e9146104d857806346fbf68e146105565780634f558e791461057c5780634f6ccce7146105995780635c975abb146105b657610206565b80632f745c59146104425780633f4ba83a1461046e57806340c10f191461047657806342842e0e146104a257610206565b80630b52f847116101d95780630b52f8471461032a57806318160ddd146103d557806323b872dd146103ef57806325bf6cfb1461042557610206565b806301ffc9a71461020b57806306fdde0314610246578063081812fc146102c3578063095ea7b3146102fc575b600080fd5b6102326004803603602081101561022157600080fd5b50356001600160e01b0319166108ef565b604080519115158252519081900360200190f35b61024e610912565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610288578181015183820152602001610270565b50505050905090810190601f1680156102b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e0600480360360208110156102d957600080fd5b50356109a9565b604080516001600160a01b039092168252519081900360200190f35b6103286004803603604081101561031257600080fd5b506001600160a01b038135169060200135610a0e565b005b6103286004803603604081101561034057600080fd5b81359190810190604081016020820135600160201b81111561036157600080fd5b82018360208201111561037357600080fd5b803590602001918460018302840111600160201b8311171561039457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a6d945050505050565b6103dd610b71565b60408051918252519081900360200190f35b6103286004803603606081101561040557600080fd5b506001600160a01b03813581169160208101359091169060400135610b77565b61024e6004803603602081101561043b57600080fd5b5035610bd8565b6103dd6004803603604081101561045857600080fd5b506001600160a01b038135169060200135610c79565b610328610cfb565b6102326004803603604081101561048c57600080fd5b506001600160a01b038135169060200135610ddb565b610328600480360360608110156104b857600080fd5b506001600160a01b03813581169160208101359091169060400135610e95565b610328600480360360408110156104ee57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561051857600080fd5b82018360208201111561052a57600080fd5b803590602001918460208302840111600160201b8311171561054b57600080fd5b509092509050610eb0565b6102326004803603602081101561056c57600080fd5b50356001600160a01b0316610f2d565b6102326004803603602081101561059257600080fd5b5035610f46565b6103dd600480360360208110156105af57600080fd5b5035610f51565b610232610fba565b6102e0600480360360208110156105d457600080fd5b5035610fc3565b61032861101a565b6103dd600480360360208110156105f957600080fd5b50356001600160a01b0316611025565b6103286004803603602081101561061f57600080fd5b50356001600160a01b0316611090565b6103286110e3565b61065d6004803603602081101561064d57600080fd5b50356001600160a01b03166111bd565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610699578181015183820152602001610681565b505050509050019250505060405180910390f35b61024e61121d565b610328600480360360208110156106cb57600080fd5b50356001600160a01b031661127e565b6103286112ce565b6103dd6112d7565b6103286004803603604081101561070157600080fd5b506001600160a01b03813516906020013515156112dd565b6102326004803603602081101561072f57600080fd5b50356001600160a01b0316611338565b6103286004803603604081101561075557600080fd5b508035906020013561134b565b6103286004803603604081101561077857600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156107a257600080fd5b8201836020820111156107b457600080fd5b803590602001918460208302840111600160201b831117156107d557600080fd5b50909250905061142a565b610328600480360360808110156107f657600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561083057600080fd5b82018360208201111561084257600080fd5b803590602001918460018302840111600160201b8311171561086357600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061145a945050505050565b61024e600480360360208110156108ba57600080fd5b50356114af565b610232600480360360408110156108d757600080fd5b506001600160a01b038135811691602001351661165f565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561099e5780601f106109735761010080835404028352916020019161099e565b820191906000526020600020905b81548152906001019060200180831161098157829003601f168201915b505050505090505b90565b60006109b48261168d565b6109f257604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061297d602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600e5460ff1615610a5f5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610a6982826116aa565b5050565b610a7633611338565b610ab457604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b6000828152600f602090815260409091208251610ad3928401906126a2565b50604080516020808252835181830152835133937f0c0804bdd625299eb7a13fda032f42a9153e453628b00b207d895caf2987d0bd9386939092839283019185019080838360005b83811015610b33578181015183820152602001610b1b565b50505050905090810190601f168015610b605780820380516001836020036101000a031916815260200191505b509250505060405180910390a25050565b60075490565b600e5460ff1615610bc85760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610bd38383836117d7565b505050565b6000818152600f602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610c6d5780601f10610c4257610100808354040283529160200191610c6d565b820191906000526020600020905b815481529060010190602001808311610c5057829003601f168201915b50505050509050919050565b6000610c8483611025565b8210610cc457604051600160e51b62461bcd02815260040180806020018281038252602a8152602001806127dc602a913960400191505060405180910390fd5b6001600160a01b0383166000908152600560205260409020805483908110610ce857fe5b9060005260206000200154905092915050565b610d0433610f2d565b610d4257604051600160e51b62461bcd0281526004018080602001828103825260308152602001806127896030913960400191505060405180910390fd5b600e5460ff16610d9c5760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600e805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610de633611338565b610e2457604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b601154610e2f610b71565b10610e845760408051600160e51b62461bcd02815260206004820152601360248201527f4d696e74206c696d697420657863656564656400000000000000000000000000604482015290519081900360640190fd5b610e8e838361182a565b9392505050565b610bd38383836040518060200160405280600081525061145a565b610eb933611338565b610ef757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b60005b81811015610f2757610f1e84848484818110610f1257fe5b90506020020135610ddb565b50600101610efa565b50505050565b6000610f40600d8363ffffffff61188616565b92915050565b6000610f408261168d565b6000610f5b610b71565b8210610f9b57604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612952602b913960400191505060405180910390fd5b60078281548110610fa857fe5b90600052602060002001549050919050565b600e5460ff1690565b6000818152600160205260408120546001600160a01b031680610f4057604051600160e51b62461bcd0281526004018080602001828103825260288152602001806128576028913960400191505060405180910390fd5b611023336118f0565b565b60006001600160a01b03821661106f57604051600160e51b62461bcd0281526004018080602001828103825260298152602001806129016029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610f4090611938565b61109933610f2d565b6110d757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806127896030913960400191505060405180910390fd5b6110e08161193c565b50565b6110ec33610f2d565b61112a57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806127896030913960400191505060405180910390fd5b600e5460ff161561117b5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b600e805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b60606111c882611984565b805480602002602001604051908101604052809291908181526020018280548015610c6d57602002820191906000526020600020905b8154815260200190600101908083116111fe5750505050509050919050565b600a8054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561099e5780601f106109735761010080835404028352916020019161099e565b61128733611338565b6112c557604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b6110e08161199e565b611023336119e6565b60115481565b600e5460ff161561132e5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610a698282611a2e565b6000610f40600c8363ffffffff61188616565b61135433611338565b61139257604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b61139b8261168d565b6113d957604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061275b602e913960400191505060405180910390fd5b600082815260106020908152604091829020839055815184815290810183905281517fd85b3cae20d36fc349dc7b6970cebae524ecd9fd86e0b69cec3fb7ee4a8f5c00929181900390910190a15050565b60005b81811015610f2757611452338585858581811061144657fe5b90506020020135610b77565b60010161142d565b611465848484610b77565b61147184848484611afd565b610f2757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128d16030913960400191505060405180910390fd5b60606114ba8261168d565b6114f857604051600160e51b62461bcd02815260040180806020018281038252602e81526020018061275b602e913960400191505060405180910390fd5b6000828152601060209081526040808320548352600f82529182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156115975780601f1061156c57610100808354040283529160200191611597565b820191906000526020600020905b81548152906001019060200180831161157a57829003601f168201915b50505050509050806115a884611ee2565b6040516020018083805190602001908083835b602083106115da5780518252601f1990920191602091820191016115bb565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106116225780518252601f199092019160209182019101611603565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b60006116b582610fc3565b9050806001600160a01b0316836001600160a01b031614156117215760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061173d575061173d813361165f565b61177b57604051600160e51b62461bcd0281526004018080602001828103825260378152602001806129a86037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6117e13382611fa9565b61181f57604051600160e51b62461bcd02815260040180806020018281038252603081526020018061287f6030913960400191505060405180910390fd5b610bd3838383612048565b600061183533611338565b61187357604051600160e51b62461bcd0281526004018080602001828103825260308152602001806128066030913960400191505060405180910390fd5b61187d8383612067565b50600192915050565b60006001600160a01b0382166118d057604051600160e51b62461bcd0281526004018080602001828103825260228152602001806128af6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b611901600d8263ffffffff61208416565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b61194d600d8263ffffffff6120ee16565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b0316600090815260056020526040902090565b6119af600c8263ffffffff6120ee16565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6119f7600c8263ffffffff61208416565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b038216331415611a8f5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000806060611b14866001600160a01b0316612172565b611b2357600192505050611eda565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611baf578181015183820152602001611b97565b50505050905090810190601f168015611bdc5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310611c445780518252601f199092019160209182019101611c25565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611ca6576040519150601f19603f3d011682016040523d82523d6000602084013e611cab565b606091505b508051919350915015801590611ceb57508051600160e11b630a85bd01029060208084019190811015611cdd57600080fd5b50516001600160e01b031916145b15611cfb57600192505050611eda565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d87578181015183820152602001611d6f565b50505050905090810190601f168015611db45780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310611e1c5780518252601f199092019160209182019101611dfd565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611e7e576040519150601f19603f3d011682016040523d82523d6000602084013e611e83565b606091505b508051919350915015801590611ec357508051600160e01b636745782b029060208084019190811015611eb557600080fd5b50516001600160e01b031916145b15611ed357600192505050611eda565b6000925050505b949350505050565b606081611f0a57506040805180820190915260018152600160fc1b600302602082015261090d565b8160005b8115611f2257600101600a82049150611f0e565b6060816040519080825280601f01601f191660200182016040528015611f4f576020820181803883390190505b50859350905060001982015b8315611fa057600a840660300160f81b82828060019003935081518110611f7e57fe5b60200101906001600160f81b031916908160001a905350600a84049350611f5b565b50949350505050565b6000611fb48261168d565b611ff257604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806129df602b913960400191505060405180910390fd5b6000611ffd83610fc3565b9050806001600160a01b0316846001600160a01b031614806120385750836001600160a01b031661202d846109a9565b6001600160a01b0316145b80611eda5750611eda818561165f565b612053838383612178565b61205d83826122c2565b610bd382826123b7565b61207182826123f5565b61207b82826123b7565b610a698161252c565b61208e8282611886565b6120cc57604051600160e51b62461bcd0281526004018080602001828103825260218152602001806128366021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6120f88282611886565b1561214d5760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b826001600160a01b031661218b82610fc3565b6001600160a01b0316146121d357604051600160e51b62461bcd02815260040180806020018281038252602881526020018061292a6028913960400191505060405180910390fd5b6001600160a01b03821661221b57604051600160e51b62461bcd0281526004018080602001828103825260238152602001806127b96023913960400191505060405180910390fd5b61222481612570565b6001600160a01b0383166000908152600360205260409020612245906125ab565b6001600160a01b0382166000908152600360205260409020612266906125c2565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166000908152600560205260408120546122ec90600163ffffffff6125cb16565b600083815260066020526040902054909150808214612387576001600160a01b038416600090815260056020526040812080548490811061232957fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b03168152602001908152602001600020838154811061236757fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b03841660009081526005602052604090208054906123b0906000198301612720565b5050505050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b6001600160a01b0382166124535760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61245c8161168d565b156124b15760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b0387169081179091558352600390915290206124f0906125c2565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b6000818152600260205260409020546001600160a01b0316156110e057600090815260026020526040902080546001600160a01b0319169055565b80546125be90600163ffffffff6125cb16565b9055565b80546001019055565b6000610e8e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506000818484111561269a57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561265f578181015183820152602001612647565b50505050905090810190601f16801561268c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126e357805160ff1916838001178555612710565b82800160010185558215612710579182015b828111156127105782518255916020019190600101906126f5565b5061271c929150612740565b5090565b815481835581811115610bd357600083815260209020610bd39181019083015b6109a691905b8082111561271c576000815560010161274656fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a72305820e0ce5ac1ff4ef3e2693653384ae72e01177c7153c550d4a95ddb6007e0f14f250029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type SampleNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleNFT__factory extends ContractFactory {
  constructor(...args: SampleNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SampleNFT> {
    return super.deploy(overrides || {}) as Promise<SampleNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleNFT {
    return super.attach(address) as SampleNFT;
  }
  connect(signer: Signer): SampleNFT__factory {
    return super.connect(signer) as SampleNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleNFTInterface {
    return new utils.Interface(_abi) as SampleNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleNFT {
    return new Contract(address, _abi, signerOrProvider) as SampleNFT;
  }
}

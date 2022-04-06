/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP17FullMock, KIP17FullMockInterface } from "../KIP17FullMock";

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
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "uri",
        type: "string",
      },
    ],
    name: "setTokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
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
      {
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintWithTokenURI",
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
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "symbol",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
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
  "0x60806040523480156200001157600080fd5b506040516200282538038062002825833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b505092919050505081818181620000ef6301ffc9a760e01b620001c860201b60201c565b620001076380ac58cd60e01b620001c860201b60201c565b6200011f63780e9d6360e01b620001c860201b60201c565b81516200013490600990602085019062000410565b5080516200014a90600a90602084019062000410565b5062000163635b5e139f60e01b620001c860201b60201c565b5050505062000178336200029760201b60201c565b6200019063eab83e2060e01b620001c860201b60201c565b620001a863fac27f4660e01b620001c860201b60201c565b620001c06342966c6860e01b620001c860201b60201c565b5050620004b5565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200025a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b620002b281600c620002e960201b62001b451790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b620002fb82826200038d60201b60201c565b156200036857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b038216620003f0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620028036022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200045357805160ff191683800117855562000483565b8280016001018555821562000483579182015b828111156200048357825182559160200191906001019062000466565b506200049192915062000495565b5090565b620004b291905b808211156200049157600081556001016200049c565b90565b61233e80620004c56000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80634f6ccce7116100de578063983b2d5611610097578063aa271e1a11610071578063aa271e1a14610651578063b88d4fde14610677578063c87b56dd1461073d578063e985e9c51461075a57610173565b8063983b2d56146105f5578063986502751461061b578063a22cb4651461062357610173565b80634f6ccce71461045c57806350bb4e7f146104795780636352211e1461053457806370a08231146105515780638462151c1461057757806395d89b41146105ed57610173565b806323b872dd1161013057806323b872dd1461035e5780632f745c591461039457806340c10f19146103c057806342842e0e146103ec57806342966c68146104225780634f558e791461043f57610173565b806301ffc9a71461017857806306fdde03146101b3578063081812fc14610230578063095ea7b314610269578063162094c41461029757806318160ddd14610344575b600080fd5b61019f6004803603602081101561018e57600080fd5b50356001600160e01b031916610788565b604080519115158252519081900360200190f35b6101bb6107a7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f55781810151838201526020016101dd565b50505050905090810190601f1680156102225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61024d6004803603602081101561024657600080fd5b503561083e565b604080516001600160a01b039092168252519081900360200190f35b6102956004803603604081101561027f57600080fd5b506001600160a01b0381351690602001356108a3565b005b610295600480360360408110156102ad57600080fd5b813591908101906040810160208201356401000000008111156102cf57600080fd5b8201836020820111156102e157600080fd5b8035906020019184600183028401116401000000008311171561030357600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109d0945050505050565b61034c6109de565b60408051918252519081900360200190f35b6102956004803603606081101561037457600080fd5b506001600160a01b038135811691602081013590911690604001356109e4565b61034c600480360360408110156103aa57600080fd5b506001600160a01b038135169060200135610a3c565b61019f600480360360408110156103d657600080fd5b506001600160a01b038135169060200135610abe565b6102956004803603606081101561040257600080fd5b506001600160a01b03813581169160208101359091169060400135610b1a565b6102956004803603602081101561043857600080fd5b5035610b35565b61019f6004803603602081101561045557600080fd5b5035610b89565b61034c6004803603602081101561047257600080fd5b5035610b9a565b61019f6004803603606081101561048f57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156104bf57600080fd5b8201836020820111156104d157600080fd5b803590602001918460018302840111640100000000831117156104f357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c03945050505050565b61024d6004803603602081101561054a57600080fd5b5035610c6a565b61034c6004803603602081101561056757600080fd5b50356001600160a01b0316610cc1565b61059d6004803603602081101561058d57600080fd5b50356001600160a01b0316610d2c565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156105d95781810151838201526020016105c1565b505050509050019250505060405180910390f35b6101bb610d8d565b6102956004803603602081101561060b57600080fd5b50356001600160a01b0316610dee565b610295610e3e565b6102956004803603604081101561063957600080fd5b506001600160a01b0381351690602001351515610e49565b61019f6004803603602081101561066757600080fd5b50356001600160a01b0316610f18565b6102956004803603608081101561068d57600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156106c857600080fd5b8201836020820111156106da57600080fd5b803590602001918460018302840111640100000000831117156106fc57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f2b945050505050565b6101bb6004803603602081101561075357600080fd5b5035610f86565b61019f6004803603604081101561077057600080fd5b506001600160a01b0381358116916020013516611064565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b505050505090505b90565b600061084982611092565b61088757604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612286602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b60006108ae82610c6a565b9050806001600160a01b0316836001600160a01b0316141561091a5760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061093657506109368133611064565b61097457604051600160e51b62461bcd0281526004018080602001828103825260378152602001806122b16037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6109da82826110af565b5050565b60075490565b6109ee3382611115565b610a2c57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806121356030913960400191505060405180910390fd5b610a378383836111bc565b505050565b6000610a4783610cc1565b8210610a8757604051600160e51b62461bcd02815260040180806020018281038252602a815260200180612067602a913960400191505060405180910390fd5b6001600160a01b0383166000908152600560205260409020805483908110610aab57fe5b9060005260206000200154905092915050565b6000610ac933610f18565b610b0757604051600160e51b62461bcd0281526004018080602001828103825260308152602001806120916030913960400191505060405180910390fd5b610b1183836111db565b50600192915050565b610a3783838360405180602001604052806000815250610f2b565b610b3f3382611115565b610b7d57604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806121b7602f913960400191505060405180910390fd5b610b86816111f8565b50565b6000610b9482611092565b92915050565b6000610ba46109de565b8210610be457604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612237602b913960400191505060405180910390fd5b60078281548110610bf157fe5b90600052602060002001549050919050565b6000610c0e33610f18565b610c4c57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806120916030913960400191505060405180910390fd5b610c5684846111db565b610c6083836110af565b5060019392505050565b6000818152600160205260408120546001600160a01b031680610b9457604051600160e51b62461bcd0281526004018080602001828103825260288152602001806120e26028913960400191505060405180910390fd5b60006001600160a01b038216610d0b57604051600160e51b62461bcd0281526004018080602001828103825260298152602001806121e66029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610b949061120a565b6060610d378261120e565b805480602002602001604051908101604052809291908181526020018280548015610d8157602002820191906000526020600020905b815481526020019060010190808311610d6d575b50505050509050919050565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108335780601f1061080857610100808354040283529160200191610833565b610df733610f18565b610e3557604051600160e51b62461bcd0281526004018080602001828103825260308152602001806120916030913960400191505060405180910390fd5b610b8681611228565b610e4733611270565b565b6001600160a01b038216331415610eaa5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000610b94600c8363ffffffff6112b816565b610f368484846109e4565b610f4284848484611322565b610f8057604051600160e51b62461bcd0281526004018080602001828103825260308152602001806121876030913960400191505060405180910390fd5b50505050565b6060610f9182611092565b610fcf57604051600160e51b62461bcd02815260040180806020018281038252602e815260200180612016602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084529091830182828015610d815780601f1061103757610100808354040283529160200191610d81565b820191906000526020600020905b8154815290600101906020018083116110455750939695505050505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b6110b882611092565b6110f657604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061210a602b913960400191505060405180910390fd5b6000828152600b602090815260409091208251610a3792840190611f19565b600061112082611092565b61115e57604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806122e8602b913960400191505060405180910390fd5b600061116983610c6a565b9050806001600160a01b0316846001600160a01b031614806111a45750836001600160a01b03166111998461083e565b6001600160a01b0316145b806111b457506111b48185611064565b949350505050565b6111c7838383611705565b6111d1838261184f565b610a378282611944565b6111e58282611982565b6111ef8282611944565b6109da81611ab9565b610b8661120482610c6a565b82611afd565b5490565b6001600160a01b0316600090815260056020526040902090565b611239600c8263ffffffff611b4516565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b611281600c8263ffffffff611bc916565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b60006001600160a01b03821661130257604051600160e51b62461bcd0281526004018080602001828103825260228152602001806121656022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b6000806060611339866001600160a01b0316611c33565b611348576001925050506111b4565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156113d45781810151838201526020016113bc565b50505050905090810190601f1680156114015780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106114695780518252601f19909201916020918201910161144a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114cb576040519150601f19603f3d011682016040523d82523d6000602084013e6114d0565b606091505b50805191935091501580159061151057508051600160e11b630a85bd0102906020808401919081101561150257600080fd5b50516001600160e01b031916145b15611520576001925050506111b4565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156115ac578181015183820152602001611594565b50505050905090810190601f1680156115d95780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106116415780518252601f199092019160209182019101611622565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146116a3576040519150601f19603f3d011682016040523d82523d6000602084013e6116a8565b606091505b5080519193509150158015906116e857508051600160e01b636745782b0290602080840191908110156116da57600080fd5b50516001600160e01b031916145b156116f8576001925050506111b4565b5060009695505050505050565b826001600160a01b031661171882610c6a565b6001600160a01b03161461176057604051600160e51b62461bcd02815260040180806020018281038252602881526020018061220f6028913960400191505060405180910390fd5b6001600160a01b0382166117a857604051600160e51b62461bcd0281526004018080602001828103825260238152602001806120446023913960400191505060405180910390fd5b6117b181611c39565b6001600160a01b03831660009081526003602052604090206117d290611c74565b6001600160a01b03821660009081526003602052604090206117f390611c8b565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b03821660009081526005602052604081205461187990600163ffffffff611c9416565b600083815260066020526040902054909150808214611914576001600160a01b03841660009081526005602052604081208054849081106118b657fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b0316815260200190815260200160002083815481106118f457fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b038416600090815260056020526040902080549061193d906000198301611f97565b5050505050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b6001600160a01b0382166119e05760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6119e981611092565b15611a3e5760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020611a7d90611c8b565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b611b078282611cdd565b6000818152600b602052604090205460026000196101006001841615020190911604156109da576000818152600b602052604081206109da91611fbb565b611b4f82826112b8565b15611ba45760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b611bd382826112b8565b611c1157604051600160e51b62461bcd0281526004018080602001828103825260218152602001806120c16021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b3b151590565b6000818152600260205260409020546001600160a01b031615610b8657600090815260026020526040902080546001600160a01b0319169055565b8054611c8790600163ffffffff611c9416565b9055565b80546001019055565b6000611cd683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611d09565b9392505050565b611ce78282611da3565b611cf1828261184f565b6000818152600660205260408120556109da81611e7d565b60008184841115611d9b57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d60578181015183820152602001611d48565b50505050905090810190601f168015611d8d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b816001600160a01b0316611db682610c6a565b6001600160a01b031614611dfe57604051600160e51b62461bcd0281526004018080602001828103825260248152602001806122626024913960400191505060405180910390fd5b611e0781611c39565b6001600160a01b0382166000908152600360205260409020611e2890611c74565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600754600090611e9490600163ffffffff611c9416565b60008381526008602052604081205460078054939450909284908110611eb657fe5b906000526020600020015490508060078381548110611ed157fe5b60009182526020808320909101929092558281526008909152604090208290556007805490611f04906000198301611f97565b50505060009182525060086020526040812055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f5a57805160ff1916838001178555611f87565b82800160010185558215611f87579182015b82811115611f87578251825591602001919060010190611f6c565b50611f93929150611ffb565b5090565b815481835581811115610a3757600083815260209020610a37918101908301611ffb565b50805460018160011615610100020316600290046000825580601f10611fe15750610b86565b601f016020900490600052602060002090810190610b8691905b61083b91905b80821115611f93576000815560010161200156fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031374d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a72305820c9ccb710b20361bae3554bb5998dba83e12f320762e954bc2611e870db53f7d50029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type KIP17FullMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP17FullMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP17FullMock__factory extends ContractFactory {
  constructor(...args: KIP17FullMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17FullMock> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<KIP17FullMock>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): KIP17FullMock {
    return super.attach(address) as KIP17FullMock;
  }
  connect(signer: Signer): KIP17FullMock__factory {
    return super.connect(signer) as KIP17FullMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17FullMockInterface {
    return new utils.Interface(_abi) as KIP17FullMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17FullMock {
    return new Contract(address, _abi, signerOrProvider) as KIP17FullMock;
  }
}

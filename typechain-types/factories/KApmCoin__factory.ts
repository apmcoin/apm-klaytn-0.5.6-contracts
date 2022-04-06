/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KApmCoin, KApmCoinInterface } from "../KApmCoin";

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
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        name: "account",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isBlacklist",
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
        name: "account",
        type: "address",
      },
      {
        name: "amount",
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
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
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
        name: "amount",
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
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "registerBlacklist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "account",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "isOwner",
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
        name: "_manager",
        type: "address",
      },
    ],
    name: "setBlacklistManager",
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "account",
        type: "address",
      },
    ],
    name: "unregisterBlacklist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
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
    inputs: [],
    name: "blacklistManager",
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
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "claimTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
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
    name: "SetBlacklistManager",
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
    name: "RegisterBlacklist",
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
    name: "UnregisterBlacklist",
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
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        name: "claimedBalance",
        type: "uint256",
      },
    ],
    name: "ClaimedTokens",
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
        indexed: false,
        name: "value",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604080518082018252600881527f61704d20436f696e00000000000000000000000000000000000000000000000060208083019190915282518084018452600381527f41504d000000000000000000000000000000000000000000000000000000000091810191909152600080546001600160a01b03191633178082559351929391926012928591859185916001600160a01b03919091169085907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3620000ea6301ffc9a760e01b6200021c60201b60201c565b62000102636578737160e01b6200021c60201b60201c565b6200011333620002ee60201b60201c565b6200012b63eab83e2060e01b6200021c60201b60201c565b62000143633b5a0bf860e01b6200021c60201b60201c565b62000154336200034060201b60201c565b6007805460ff19169055620001907f4d5507ff000000000000000000000000000000000000000000000000000000006200021c602090811b901c565b8251620001a5906008906020860190620006f8565b508151620001bb906009906020850190620006f8565b50600a805460ff191660ff8316179055620001fd7fa219a025000000000000000000000000000000000000000000000000000000006200021c602090811b901c565b5050506200021233826200039260201b60201c565b505050506200079d565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620002ae57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152600160208190526040909120805460ff19169091179055565b620003098160056200043660201b62001cb71790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200035b8160066200043660201b62001cb71790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6001600160a01b0382166000908152600b602052604090205460ff16156200041b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f5065726d697373696f6e2064656e696564000000000000000000000000000000604482015290519081900360640190fd5b620004328282620004da60201b62001bc21760201c565b5050565b620004488282620005f960201b60201c565b15620004b557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001600160a01b0382166200055057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b6200056c816004546200067c60201b62001f251790919060201c565b6004556001600160a01b038216600090815260026020908152604090912054620005a191839062001f256200067c821b17901c565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b60006001600160a01b0382166200065c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620028fc6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b600082820183811015620006f157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200073b57805160ff19168380011785556200076b565b828001600101855582156200076b579182015b828111156200076b5782518255916020019190600101906200074e565b50620007799291506200077d565b5090565b6200079a91905b8082111562000779576000815560010162000784565b90565b61214f80620007ad6000396000f3fe608060405234801561001057600080fd5b50600436106102275760003560e01c8063715018a611610130578063a56c62cf116100b8578063d9dbf6571161007c578063d9dbf65714610729578063dd62ed3e14610731578063df8de3e71461075f578063eb79554914610785578063f2fde38b1461084057610227565b8063a56c62cf146105c5578063a9059cbb146105eb578063aa271e1a14610617578063b58812531461063d578063b88d4fde1461066357610227565b80638da5cb5b116100ff5780638da5cb5b146105635780638f32d59b1461058757806395d89b411461058f578063983b2d561461059757806398650275146105bd57610227565b8063715018a61461050157806379cc67901461050957806382dc1ec4146105355780638456cb591461055b57610227565b806340c10f19116101b357806346fbf68e1161018257806346fbf68e1461047f578063481313f3146104a55780635c975abb146104cb5780636ef8d66d146104d357806370a08231146104db57610227565b806340c10f19146103d4578063423f6cef1461040057806342842e0e1461042c57806342966c681461046257610227565b806323b872dd116101fa57806323b872dd1461032a5780633092afd514610360578063313ce56714610388578063333e99db146103a65780633f4ba83a146103cc57610227565b806301ffc9a71461022c57806306fdde0314610267578063095ea7b3146102e457806318160ddd14610310575b600080fd5b6102536004803603602081101561024257600080fd5b50356001600160e01b031916610866565b604080519115158252519081900360200190f35b61026f610885565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102a9578181015183820152602001610291565b50505050905090810190601f1680156102d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610253600480360360408110156102fa57600080fd5b506001600160a01b03813516906020013561091b565b610318610980565b60408051918252519081900360200190f35b6102536004803603606081101561034057600080fd5b506001600160a01b03813581169160208101359091169060400135610986565b6103866004803603602081101561037657600080fd5b50356001600160a01b03166109ed565b005b610390610a43565b6040805160ff9092168252519081900360200190f35b610253600480360360208110156103bc57600080fd5b50356001600160a01b0316610a4c565b610386610a6a565b610253600480360360408110156103ea57600080fd5b506001600160a01b038135169060200135610b4a565b6103866004803603604081101561041657600080fd5b506001600160a01b038135169060200135610ba6565b6103866004803603606081101561044257600080fd5b506001600160a01b03813581169160208101359091169060400135610bc4565b6103866004803603602081101561047857600080fd5b5035610be4565b6102536004803603602081101561049557600080fd5b50356001600160a01b0316610bee565b610386600480360360208110156104bb57600080fd5b50356001600160a01b0316610c07565b610253610cac565b610386610cb5565b610318600480360360208110156104f157600080fd5b50356001600160a01b0316610cc0565b610386610cdb565b6103866004803603604081101561051f57600080fd5b506001600160a01b038135169060200135610d6f565b6103866004803603602081101561054b57600080fd5b50356001600160a01b0316610d79565b610386610dc9565b61056b610ea3565b604080516001600160a01b039092168252519081900360200190f35b610253610eb2565b61026f610ec3565b610386600480360360208110156105ad57600080fd5b50356001600160a01b0316610f24565b610386610f74565b610386600480360360208110156105db57600080fd5b50356001600160a01b0316610f7d565b6102536004803603604081101561060157600080fd5b506001600160a01b03813516906020013561102e565b6102536004803603602081101561062d57600080fd5b50356001600160a01b031661108c565b6103866004803603602081101561065357600080fd5b50356001600160a01b031661109f565b6103866004803603608081101561067957600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156106b457600080fd5b8201836020820111156106c657600080fd5b803590602001918460018302840111640100000000831117156106e857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611141945050505050565b61056b61119d565b6103186004803603604081101561074757600080fd5b506001600160a01b03813581169160200135166111ac565b6103866004803603602081101561077557600080fd5b50356001600160a01b03166111d7565b6103866004803603606081101561079b57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156107cb57600080fd5b8201836020820111156107dd57600080fd5b803590602001918460018302840111640100000000831117156107ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611362945050505050565b6103866004803603602081101561085657600080fd5b50356001600160a01b03166113b7565b6001600160e01b03191660009081526001602052604090205460ff1690565b60088054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109115780601f106108e657610100808354040283529160200191610911565b820191906000526020600020905b8154815290600101906020018083116108f457829003601f168201915b5050505050905090565b60075460009060ff161561096f5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b610979838361140a565b9392505050565b60045490565b60075460009060ff16156109da5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6109e5848484611417565b949350505050565b6109f5610eb2565b610a375760408051600160e51b62461bcd02815260206004820181905260248201526000805160206120bf833981519152604482015290519081900360640190fd5b610a408161146e565b50565b600a5460ff1690565b6001600160a01b03166000908152600b602052604090205460ff1690565b610a7333610bee565b610ab157604051600160e51b62461bcd028152600401808060200182810382526030815260200180611fd26030913960400191505060405180910390fd5b60075460ff16610b0b5760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b6007805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610b553361108c565b610b9357604051600160e51b62461bcd02815260040180806020018281038252603081526020018061204a6030913960400191505060405180910390fd5b610b9d83836114b6565b50600192915050565b610bc0828260405180602001604052806000815250611362565b5050565b610bdf83838360405180602001604052806000815250611141565b505050565b610a403382611528565b6000610c0160068363ffffffff61161c16565b92915050565b600c546001600160a01b03163314610c605760408051600160e51b62461bcd02815260206004820152601160248201526001607a1b7014195c9b5a5cdcda5bdb8819195b9a595902604482015290519081900360640190fd5b6001600160a01b0381166000818152600b6020526040808220805460ff19166001179055517f30f118e5a88de7f2fe7f077d2112d8bcb6a98a62014fd5bfa85ada912ee651d99190a250565b60075460ff1690565b610cbe33611686565b565b6001600160a01b031660009081526002602052604090205490565b610ce3610eb2565b610d255760408051600160e51b62461bcd02815260206004820181905260248201526000805160206120bf833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b610bc082826116ce565b610d8233610bee565b610dc057604051600160e51b62461bcd028152600401808060200182810382526030815260200180611fd26030913960400191505060405180910390fd5b610a4081611713565b610dd233610bee565b610e1057604051600160e51b62461bcd028152600401808060200182810382526030815260200180611fd26030913960400191505060405180910390fd5b60075460ff1615610e615760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6007805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109115780601f106108e657610100808354040283529160200191610911565b610f2d3361108c565b610f6b57604051600160e51b62461bcd02815260040180806020018281038252603081526020018061204a6030913960400191505060405180910390fd5b610a408161175b565b610cbe3361146e565b600c546001600160a01b0316331480610f995750610f99610eb2565b610fe45760408051600160e51b62461bcd02815260206004820152601160248201526001607a1b7014195c9b5a5cdcda5bdb8819195b9a595902604482015290519081900360640190fd5b600c80546001600160a01b0319166001600160a01b0383169081179091556040517f2ed1b1d656ae9f80fe6c37da882cc878eeb04e57af27e7054232a864c7c8fa2790600090a250565b60075460009060ff16156110825760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61097983836117a3565b6000610c0160058363ffffffff61161c16565b600c546001600160a01b031633146110f85760408051600160e51b62461bcd02815260206004820152601160248201526001607a1b7014195c9b5a5cdcda5bdb8819195b9a595902604482015290519081900360640190fd5b6001600160a01b0381166000818152600b6020526040808220805460ff19169055517ff6f6591340df7cef8ea71abbf2673ef24690b370cb1cb48edf38d9977a3142f19190a250565b61114c848484610986565b50611159848484846117b0565b61119757604051600160e51b62461bcd02815260040180806020018281038252602e815260200180611fa4602e913960400191505060405180910390fd5b50505050565b600c546001600160a01b031681565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b6111df610eb2565b6112215760408051600160e51b62461bcd02815260206004820181905260248201526000805160206120bf833981519152604482015290519081900360640190fd5b60408051600160e01b6370a08231028152306004820152905182916000916001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561126f57600080fd5b505afa158015611283573d6000803e3d6000fd5b505050506040513d602081101561129957600080fd5b505160408051600160e01b63a9059cbb0281523360048201526024810183905290519192506001600160a01b0384169163a9059cbb916044808201926020929091908290030181600087803b1580156112f157600080fd5b505af1158015611305573d6000803e3d6000fd5b505050506040513d602081101561131b57600080fd5b50506040805182815290516001600160a01b0385169133917ff931edb47c50b4b4104c187b5814a9aef5f709e17e2ecf9617e860cacade929c9181900360200190a3505050565b61136c838361102e565b50611379338484846117b0565b610bdf57604051600160e51b62461bcd02815260040180806020018281038252602e815260200180611fa4602e913960400191505060405180910390fd5b6113bf610eb2565b6114015760408051600160e51b62461bcd02815260206004820181905260248201526000805160206120bf833981519152604482015290519081900360640190fd5b610a40816118e9565b6000610b9d33848461198c565b6000611424848484611a7e565b6001600160a01b03841660009081526003602090815260408083203380855292529091205461146491869161145f908663ffffffff611b1616565b61198c565b5060019392505050565b61147f60058263ffffffff611b5816565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b0382166000908152600b602052604090205460ff161561151e5760408051600160e51b62461bcd02815260206004820152601160248201526001607a1b7014195c9b5a5cdcda5bdb8819195b9a595902604482015290519081900360640190fd5b610bc08282611bc2565b6001600160a01b0382166115865760408051600160e51b62461bcd02815260206004820181905260248201527f4b4950373a206275726e2066726f6d20746865207a65726f2061646472657373604482015290519081900360640190fd5b600454611599908263ffffffff611b1616565b6004556001600160a01b0382166000908152600260205260409020546115c5908263ffffffff611b1616565b6001600160a01b0383166000818152600260209081526040808320949094558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35050565b60006001600160a01b03821661166657604051600160e51b62461bcd0281526004018080602001828103825260228152602001806120df6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61169760068263ffffffff611b5816565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b6116d88282611528565b6001600160a01b038216600090815260036020908152604080832033808552925290912054610bc091849161145f908563ffffffff611b1616565b61172460068263ffffffff611cb716565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61176c60058263ffffffff611cb716565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6000610b9d338484611a7e565b60006117c4846001600160a01b0316611d3b565b6117d0575060016109e5565b604051600160e11b634e8c461102815233600482018181526001600160a01b03888116602485015260448401879052608060648501908152865160848601528651600095928a1694639d188c229490938c938b938b939260a4019060208501908083838e5b8381101561184d578181015183820152602001611835565b50505050905090810190601f16801561187a5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561189c57600080fd5b505af11580156118b0573d6000803e3d6000fd5b505050506040513d60208110156118c657600080fd5b50516001600160e01b031916600160e11b634e8c46110214915050949350505050565b6001600160a01b03811661193157604051600160e51b62461bcd0281526004018080602001828103825260268152602001806120026026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166119d457604051600160e51b62461bcd0281526004018080602001828103825260238152602001806121016023913960400191505060405180910390fd5b6001600160a01b038216611a1c57604051600160e51b62461bcd028152600401808060200182810382526021815260200180611f836021913960400191505060405180910390fd5b6001600160a01b03808416600081815260036020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166000908152600b602052604090205460ff16158015611ac057506001600160a01b0382166000908152600b602052604090205460ff16155b611b0b5760408051600160e51b62461bcd02815260206004820152601160248201526001607a1b7014195c9b5a5cdcda5bdb8819195b9a595902604482015290519081900360640190fd5b610bdf838383611d41565b600061097983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611e8b565b611b62828261161c565b611ba057604051600160e51b62461bcd02815260040180806020018281038252602181526020018061207a6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b038216611c205760408051600160e51b62461bcd02815260206004820152601e60248201527f4b4950373a206d696e7420746f20746865207a65726f20616464726573730000604482015290519081900360640190fd5b600454611c33908263ffffffff611f2516565b6004556001600160a01b038216600090815260026020526040902054611c5f908263ffffffff611f2516565b6001600160a01b03831660008181526002602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b611cc1828261161c565b15611d165760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b6001600160a01b038316611d8957604051600160e51b62461bcd02815260040180806020018281038252602481526020018061209b6024913960400191505060405180910390fd5b6001600160a01b038216611dd157604051600160e51b62461bcd0281526004018080602001828103825260228152602001806120286022913960400191505060405180910390fd5b6001600160a01b038316600090815260026020526040902054611dfa908263ffffffff611b1616565b6001600160a01b038085166000908152600260205260408082209390935590841681522054611e2f908263ffffffff611f2516565b6001600160a01b0380841660008181526002602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611f1d57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ee2578181015183820152602001611eca565b50505050905090810190601f168015611f0f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156109795760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fdfe4b4950373a20617070726f766520746f20746865207a65726f20616464726573734b4950373a207472616e7366657220746f206e6f6e204b495037526563656976657220696d706c656d656e746572506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b4950373a207472616e7366657220746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b4950373a207472616e736665722066726f6d20746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4950373a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a7230582019bbdb25fffdcb6fff368814d17fdc51d6166399c901b2e49534ec15a8f9110b0029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type KApmCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KApmCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KApmCoin__factory extends ContractFactory {
  constructor(...args: KApmCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KApmCoin> {
    return super.deploy(overrides || {}) as Promise<KApmCoin>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KApmCoin {
    return super.attach(address) as KApmCoin;
  }
  connect(signer: Signer): KApmCoin__factory {
    return super.connect(signer) as KApmCoin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KApmCoinInterface {
    return new utils.Interface(_abi) as KApmCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KApmCoin {
    return new Contract(address, _abi, signerOrProvider) as KApmCoin;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37, KIP37Interface } from "../KIP37";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
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
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "amounts",
        type: "uint256[]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "accounts",
        type: "address[]",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
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
    constant: false,
    inputs: [
      {
        name: "operator",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
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
    constant: true,
    inputs: [
      {
        name: "account",
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
        name: "id",
        type: "uint256",
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
    inputs: [
      {
        name: "uri",
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
        name: "operator",
        type: "address",
      },
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
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
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
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001dcb38038062001dcb833981018060405260208110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b50509291905050506200009f6301ffc9a760e01b620000e760201b60201c565b620000b081620001b660201b60201c565b620000c8636433ca1f60e01b620000e760201b60201c565b620000e0630e89341c60e01b620000e760201b60201c565b5062000274565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200017957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b8051620001cb906004906020840190620001cf565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200021257805160ff191683800117855562000242565b8280016001018555821562000242579182015b828111156200024257825182559160200191906001019062000225565b506200025092915062000254565b5090565b6200027191905b808211156200025057600081556001016200025b565b90565b611b4780620002846000396000f3fe608060405234801561001057600080fd5b50600436106100925760003560e01c80634e1273f4116100665780634e1273f414610365578063a22cb465146104d8578063bd85b03914610506578063e985e9c514610523578063f242432a1461055157610092565b8062fdd58e1461009757806301ffc9a7146100d55780630e89341c146101105780632eb2c2d6146101a2575b600080fd5b6100c3600480360360408110156100ad57600080fd5b506001600160a01b03813516906020013561061a565b60408051918252519081900360200190f35b6100fc600480360360208110156100eb57600080fd5b50356001600160e01b03191661068c565b604080519115158252519081900360200190f35b61012d6004803603602081101561012657600080fd5b50356106ab565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016757818101518382015260200161014f565b50505050905090810190601f1680156101945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610363600480360360a08110156101b857600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101eb57600080fd5b8201836020820111156101fd57600080fd5b803590602001918460208302840111600160201b8311171561021e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561026d57600080fd5b82018360208201111561027f57600080fd5b803590602001918460208302840111600160201b831117156102a057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102ef57600080fd5b82018360208201111561030157600080fd5b803590602001918460018302840111600160201b8311171561032257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610743945050505050565b005b6104886004803603604081101561037b57600080fd5b810190602081018135600160201b81111561039557600080fd5b8201836020820111156103a757600080fd5b803590602001918460208302840111600160201b831117156103c857600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041757600080fd5b82018360208201111561042957600080fd5b803590602001918460208302840111600160201b8311171561044a57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a88945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104c45781810151838201526020016104ac565b505050509050019250505060405180910390f35b610363600480360360408110156104ee57600080fd5b506001600160a01b0381351690602001351515610bf5565b6100c36004803603602081101561051c57600080fd5b5035610ce7565b6100fc6004803603604081101561053957600080fd5b506001600160a01b0381358116916020013516610cf9565b610363600480360360a081101561056757600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156105a657600080fd5b8201836020820111156105b857600080fd5b803590602001918460018302840111600160201b831117156105d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d27945050505050565b60006001600160a01b03831661066457604051600160e51b62461bcd02815260040180806020018281038252602981526020018061196f6029913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107375780601f1061070c57610100808354040283529160200191610737565b820191906000526020600020905b81548152906001019060200180831161071a57829003601f168201915b50505050509050919050565b815183511461078657604051600160e51b62461bcd0281526004018080602001828103825260268152602001806119986026913960400191505060405180910390fd5b6001600160a01b0384166107ce57604051600160e51b62461bcd028152600401808060200182810382526023815260200180611a946023913960400191505060405180910390fd5b6107d6610f3c565b6001600160a01b0316856001600160a01b031614806108015750610801856107fc610f3c565b610cf9565b61083f57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806119be6030913960400191505060405180910390fd5b6000610849610f3c565b9050610859818787878787610a80565b60005b845181101561095a57600085828151811061087357fe5b60200260200101519050600085838151811061088b57fe5b602002602001015190506108f8816040518060600160405280602881526020016119ee602891396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610f409092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a168152205461092f9082610fda565b60009283526001602081815260408086206001600160a01b038d16875290915290932055500161085c565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156109e05781810151838201526020016109c8565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610a1f578181015183820152602001610a07565b5050505090500194505050505060405180910390a4610a4281878787878761103e565b610a8057604051600160e51b62461bcd028152600401808060200182810382526036815260200180611ab76036913960400191505060405180910390fd5b505050505050565b60608151835114610acd57604051600160e51b62461bcd0281526004018080602001828103825260278152602001806119486027913960400191505060405180910390fd5b60608351604051908082528060200260200182016040528015610afa578160200160208202803883390190505b50905060005b8451811015610bed5760006001600160a01b0316858281518110610b2057fe5b60200260200101516001600160a01b03161415610b7157604051600160e51b62461bcd02815260040180806020018281038252602f815260200180611aed602f913960400191505060405180910390fd5b60016000858381518110610b8157fe5b602002602001015181526020019081526020016000206000868381518110610ba557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610bda57fe5b6020908102919091010152600101610b00565b509392505050565b816001600160a01b0316610c07610f3c565b6001600160a01b03161415610c5057604051600160e51b62461bcd028152600401808060200182810382526027815260200180611a166027913960400191505060405180910390fd5b8060026000610c5d610f3c565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610ca1610f3c565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b60009081526003602052604090205490565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610d6f57604051600160e51b62461bcd028152600401808060200182810382526023815260200180611a946023913960400191505060405180910390fd5b610d77610f3c565b6001600160a01b0316856001600160a01b03161480610d9d5750610d9d856107fc610f3c565b610ddb57604051600160e51b62461bcd028152600401808060200182810382526027815260200180611a6d6027913960400191505060405180910390fd5b6000610de5610f3c565b9050610e05818787610df688611531565b610dff88611531565b87610a80565b610e52836040518060600160405280602881526020016119ee6028913960008781526001602090815260408083206001600160a01b038d168452909152902054919063ffffffff610f4016565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610e899084610fda565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610efe818787878787611575565b610a8057604051600160e51b62461bcd028152600401808060200182810382526030815260200180611a3d6030913960400191505060405180910390fd5b3390565b60008184841115610fd257604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f97578181015183820152602001610f7f565b50505050905090810190601f168015610fc45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156110375760408051600160e51b62461bcd02815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000806060611055876001600160a01b0316611941565b61106457600192505050611527565b866001600160a01b031663bc197c8160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156110f65781810151838201526020016110de565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561113557818101518382015260200161111d565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611171578181015183820152602001611159565b50505050905090810190601f16801561119e5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b6020831061120b5780518252601f1990920191602091820191016111ec565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461126d576040519150601f19603f3d011682016040523d82523d6000602084013e611272565b606091505b5080519193509150158015906112b257508051600160e01b63bc197c810290602080840191908110156112a457600080fd5b50516001600160e01b031916145b156112c257600192505050611527565b866001600160a01b0316639b49e33260e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561135457818101518382015260200161133c565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561139357818101518382015260200161137b565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156113cf5781810151838201526020016113b7565b50505050905090810190601f1680156113fc5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106114695780518252601f19909201916020918201910161144a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146114cb576040519150601f19603f3d011682016040523d82523d6000602084013e6114d0565b606091505b50805191935091501580159061151057508051600160e11b634da4f19902906020808401919081101561150257600080fd5b50516001600160e01b031916145b1561152057600192505050611527565b6000925050505b9695505050505050565b60408051600180825281830190925260609182919060208083019080388339019050509050828160008151811061156457fe5b602090810291909101015292915050565b600080606061158c876001600160a01b0316611941565b61159b57600192505050611527565b866001600160a01b031663f23a6e6160e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561162e578181015183820152602001611616565b50505050905090810190601f16801561165b5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106116c65780518252601f1990920191602091820191016116a7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611728576040519150601f19603f3d011682016040523d82523d6000602084013e61172d565b606091505b50805191935091501580159061176d57508051600160e01b63f23a6e6102906020808401919081101561175f57600080fd5b50516001600160e01b031916145b1561177d57600192505050611527565b866001600160a01b031663e78b332560e01b8a8a89898960405160240180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156118105781810151838201526020016117f8565b50505050905090810190601f16801561183d5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518082805190602001908083835b602083106118a85780518252601f199092019160209182019101611889565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461190a576040519150601f19603f3d011682016040523d82523d6000602084013e61190f565b606091505b50805191935091501580159061151057508051600160e01b63e78b332502906020808401919081101561150257600080fd5b3b15159056fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a165627a7a72305820fe65744ec86efafe12baf10375c54134890b84d8efc95ee5af85e4913a2928190029";

type KIP37ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP37ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP37__factory extends ContractFactory {
  constructor(...args: KIP37ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP37> {
    return super.deploy(uri, overrides || {}) as Promise<KIP37>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): KIP37 {
    return super.attach(address) as KIP37;
  }
  connect(signer: Signer): KIP37__factory {
    return super.connect(signer) as KIP37__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP37Interface {
    return new utils.Interface(_abi) as KIP37Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KIP37 {
    return new Contract(address, _abi, signerOrProvider) as KIP37;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IKApmNftVoucherLimitSale,
  IKApmNftVoucherLimitSaleInterface,
} from "../IKApmNftVoucherLimitSale";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "apmCoinAddress",
        type: "address",
      },
    ],
    name: "SetApmCoin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "apmCoinAddress",
        type: "address",
      },
    ],
    name: "SetNftVoucher",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "feeTo",
        type: "address",
      },
    ],
    name: "SetFeeTo",
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
    ],
    name: "SetTokenId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "apmPerNft",
        type: "uint256",
      },
    ],
    name: "SetApmPerNft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "step",
        type: "uint256",
      },
    ],
    name: "SetStep",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "step",
        type: "uint256",
      },
    ],
    name: "SetSaleLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "saleName",
        type: "string",
      },
    ],
    name: "SetSaleName",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "saleDescription",
        type: "string",
      },
    ],
    name: "SetSaleDescription",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "usingWhitelist",
        type: "bool",
      },
    ],
    name: "SetUsingWhitelist",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820c7e3ea180cae1b163e02f282937ff73a4d1c408d9e72824229f15224f3096e140029";

type IKApmNftVoucherLimitSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IKApmNftVoucherLimitSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IKApmNftVoucherLimitSale__factory extends ContractFactory {
  constructor(...args: IKApmNftVoucherLimitSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IKApmNftVoucherLimitSale> {
    return super.deploy(overrides || {}) as Promise<IKApmNftVoucherLimitSale>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IKApmNftVoucherLimitSale {
    return super.attach(address) as IKApmNftVoucherLimitSale;
  }
  connect(signer: Signer): IKApmNftVoucherLimitSale__factory {
    return super.connect(signer) as IKApmNftVoucherLimitSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IKApmNftVoucherLimitSaleInterface {
    return new utils.Interface(_abi) as IKApmNftVoucherLimitSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKApmNftVoucherLimitSale {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IKApmNftVoucherLimitSale;
  }
}

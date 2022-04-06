/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IKApmNftVoucherInterface extends utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "redeemVoucher(uint256,uint256,string)": FunctionFragment;
    "setVoucherDetail(uint256,string,string,uint256,uint256,bool)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "isBlacklist(address)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "isUuidBlacklist(string)": FunctionFragment;
    "voucherInfo(uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemVoucher",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVoucherDetail",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isBlacklist", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isUuidBlacklist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "voucherInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemVoucher",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVoucherDetail",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUuidBlacklist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voucherInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;

  events: {
    "SetBlacklistManager(address)": EventFragment;
    "RegisterBlacklist(address)": EventFragment;
    "UnregisterBlacklist(address)": EventFragment;
    "RegisterUuidBlacklist(string)": EventFragment;
    "UnregisterUuidBlacklist(string)": EventFragment;
    "SetVoucherDetail(uint256,string,string,uint256,uint256,bool)": EventFragment;
    "RedeemVoucher(uint256,uint256,uint256,string,uint256,uint256,address)": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetBlacklistManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnregisterBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisterUuidBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnregisterUuidBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetVoucherDetail"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemVoucher"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export type SetBlacklistManagerEvent = TypedEvent<
  [string],
  { account: string }
>;

export type SetBlacklistManagerEventFilter =
  TypedEventFilter<SetBlacklistManagerEvent>;

export type RegisterBlacklistEvent = TypedEvent<[string], { account: string }>;

export type RegisterBlacklistEventFilter =
  TypedEventFilter<RegisterBlacklistEvent>;

export type UnregisterBlacklistEvent = TypedEvent<
  [string],
  { account: string }
>;

export type UnregisterBlacklistEventFilter =
  TypedEventFilter<UnregisterBlacklistEvent>;

export type RegisterUuidBlacklistEvent = TypedEvent<[string], { uuid: string }>;

export type RegisterUuidBlacklistEventFilter =
  TypedEventFilter<RegisterUuidBlacklistEvent>;

export type UnregisterUuidBlacklistEvent = TypedEvent<
  [string],
  { uuid: string }
>;

export type UnregisterUuidBlacklistEventFilter =
  TypedEventFilter<UnregisterUuidBlacklistEvent>;

export type SetVoucherDetailEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, boolean],
  {
    tokenId: BigNumber;
    name: string;
    description: string;
    voucherFormatId: BigNumber;
    expireAt: BigNumber;
    redeemAvailable: boolean;
  }
>;

export type SetVoucherDetailEventFilter =
  TypedEventFilter<SetVoucherDetailEvent>;

export type RedeemVoucherEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber, BigNumber, string],
  {
    redeemId: BigNumber;
    tokenId: BigNumber;
    amount: BigNumber;
    userUuid: string;
    voucherFormatId: BigNumber;
    expireAt: BigNumber;
    sender: string;
  }
>;

export type RedeemVoucherEventFilter = TypedEventFilter<RedeemVoucherEvent>;

export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
  }
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
  }
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { account: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type URIEvent = TypedEvent<
  [string, BigNumber],
  { value: string; id: BigNumber }
>;

export type URIEventFilter = TypedEventFilter<URIEvent>;

export interface IKApmNftVoucher extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKApmNftVoucherInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    redeemVoucher(
      tokenId: BigNumberish,
      amount: BigNumberish,
      userUuid: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVoucherDetail(
      tokenId: BigNumberish,
      title: string,
      description: string,
      voucherFormatId: BigNumberish,
      expireAt: BigNumberish,
      redeemAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBlacklist(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    isUuidBlacklist(
      uuid: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    voucherInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber, boolean, boolean]>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  redeemVoucher(
    tokenId: BigNumberish,
    amount: BigNumberish,
    userUuid: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVoucherDetail(
    tokenId: BigNumberish,
    title: string,
    description: string,
    voucherFormatId: BigNumberish,
    expireAt: BigNumberish,
    redeemAvailable: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  isUuidBlacklist(uuid: string, overrides?: CallOverrides): Promise<boolean>;

  voucherInfo(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber, BigNumber, boolean, boolean]>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    redeemVoucher(
      tokenId: BigNumberish,
      amount: BigNumberish,
      userUuid: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVoucherDetail(
      tokenId: BigNumberish,
      title: string,
      description: string,
      voucherFormatId: BigNumberish,
      expireAt: BigNumberish,
      redeemAvailable: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    isBlacklist(account: string, overrides?: CallOverrides): Promise<boolean>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    isUuidBlacklist(uuid: string, overrides?: CallOverrides): Promise<boolean>;

    voucherInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber, BigNumber, boolean, boolean]>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetBlacklistManager(address)"(
      account?: string | null
    ): SetBlacklistManagerEventFilter;
    SetBlacklistManager(
      account?: string | null
    ): SetBlacklistManagerEventFilter;

    "RegisterBlacklist(address)"(
      account?: string | null
    ): RegisterBlacklistEventFilter;
    RegisterBlacklist(account?: string | null): RegisterBlacklistEventFilter;

    "UnregisterBlacklist(address)"(
      account?: string | null
    ): UnregisterBlacklistEventFilter;
    UnregisterBlacklist(
      account?: string | null
    ): UnregisterBlacklistEventFilter;

    "RegisterUuidBlacklist(string)"(
      uuid?: string | null
    ): RegisterUuidBlacklistEventFilter;
    RegisterUuidBlacklist(
      uuid?: string | null
    ): RegisterUuidBlacklistEventFilter;

    "UnregisterUuidBlacklist(string)"(
      uuid?: string | null
    ): UnregisterUuidBlacklistEventFilter;
    UnregisterUuidBlacklist(
      uuid?: string | null
    ): UnregisterUuidBlacklistEventFilter;

    "SetVoucherDetail(uint256,string,string,uint256,uint256,bool)"(
      tokenId?: BigNumberish | null,
      name?: null,
      description?: null,
      voucherFormatId?: BigNumberish | null,
      expireAt?: null,
      redeemAvailable?: null
    ): SetVoucherDetailEventFilter;
    SetVoucherDetail(
      tokenId?: BigNumberish | null,
      name?: null,
      description?: null,
      voucherFormatId?: BigNumberish | null,
      expireAt?: null,
      redeemAvailable?: null
    ): SetVoucherDetailEventFilter;

    "RedeemVoucher(uint256,uint256,uint256,string,uint256,uint256,address)"(
      redeemId?: null,
      tokenId?: BigNumberish | null,
      amount?: null,
      userUuid?: null,
      voucherFormatId?: BigNumberish | null,
      expireAt?: null,
      sender?: string | null
    ): RedeemVoucherEventFilter;
    RedeemVoucher(
      redeemId?: null,
      tokenId?: BigNumberish | null,
      amount?: null,
      userUuid?: null,
      voucherFormatId?: BigNumberish | null,
      expireAt?: null,
      sender?: string | null
    ): RedeemVoucherEventFilter;

    "TransferSingle(address,address,address,uint256,uint256)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null
    ): TransferSingleEventFilter;

    "TransferBatch(address,address,address,uint256[],uint256[])"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null
    ): TransferBatchEventFilter;

    "ApprovalForAll(address,address,bool)"(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "URI(string,uint256)"(
      value?: null,
      id?: BigNumberish | null
    ): URIEventFilter;
    URI(value?: null, id?: BigNumberish | null): URIEventFilter;
  };

  estimateGas: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemVoucher(
      tokenId: BigNumberish,
      amount: BigNumberish,
      userUuid: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVoucherDetail(
      tokenId: BigNumberish,
      title: string,
      description: string,
      voucherFormatId: BigNumberish,
      expireAt: BigNumberish,
      redeemAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBlacklist(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUuidBlacklist(
      uuid: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voucherInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemVoucher(
      tokenId: BigNumberish,
      amount: BigNumberish,
      userUuid: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVoucherDetail(
      tokenId: BigNumberish,
      title: string,
      description: string,
      voucherFormatId: BigNumberish,
      expireAt: BigNumberish,
      redeemAvailable: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBlacklist(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUuidBlacklist(
      uuid: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voucherInfo(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BatchRedeemVoucher",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BatchRedeemVoucher__factory>;
    getContractFactory(
      name: "IKApmCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKApmCoin__factory>;
    getContractFactory(
      name: "IKApmNftVoucher",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKApmNftVoucher__factory>;
    getContractFactory(
      name: "IKApmNftVoucherSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKApmNftVoucherSale__factory>;
    getContractFactory(
      name: "KApmCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KApmCoin__factory>;
    getContractFactory(
      name: "KApmNftVoucher",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KApmNftVoucher__factory>;
    getContractFactory(
      name: "KApmNftVoucherSale",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KApmNftVoucherSale__factory>;
    getContractFactory(
      name: "KBpmCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KBpmCoin__factory>;
    getContractFactory(
      name: "MinterRole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinterRole__factory>;
    getContractFactory(
      name: "PauserRole",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PauserRole__factory>;
    getContractFactory(
      name: "Context",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Context__factory>;
    getContractFactory(
      name: "IKIP13",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP13__factory>;
    getContractFactory(
      name: "KIP13",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP13__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "SelfDestructible",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfDestructible__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "ERC1155ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155ReceiverMock__factory>;
    getContractFactory(
      name: "ERC721ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ReceiverMock__factory>;
    getContractFactory(
      name: "KIP13InterfacesSupported",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP13InterfacesSupported__factory>;
    getContractFactory(
      name: "SupportsInterfaceWithLookupMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SupportsInterfaceWithLookupMock__factory>;
    getContractFactory(
      name: "KIP13CheckerMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP13CheckerMock__factory>;
    getContractFactory(
      name: "KIP13Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP13Mock__factory>;
    getContractFactory(
      name: "KIP17FullMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17FullMock__factory>;
    getContractFactory(
      name: "KIP17MintableBurnableImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17MintableBurnableImpl__factory>;
    getContractFactory(
      name: "KIP17Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Mock__factory>;
    getContractFactory(
      name: "KIP17PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17PausableMock__factory>;
    getContractFactory(
      name: "KIP17ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17ReceiverMock__factory>;
    getContractFactory(
      name: "KIP37BurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37BurnableMock__factory>;
    getContractFactory(
      name: "KIP37Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Mock__factory>;
    getContractFactory(
      name: "KIP37PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37PausableMock__factory>;
    getContractFactory(
      name: "KIP37ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37ReceiverMock__factory>;
    getContractFactory(
      name: "KIP37TokenMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37TokenMock__factory>;
    getContractFactory(
      name: "KIP7BurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7BurnableMock__factory>;
    getContractFactory(
      name: "KIP7MetadataMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7MetadataMock__factory>;
    getContractFactory(
      name: "KIP7MintableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7MintableMock__factory>;
    getContractFactory(
      name: "KIP7Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Mock__factory>;
    getContractFactory(
      name: "KIP7PausableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7PausableMock__factory>;
    getContractFactory(
      name: "MinterRoleMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MinterRoleMock__factory>;
    getContractFactory(
      name: "PauserRoleMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PauserRoleMock__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IKIP17",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17__factory>;
    getContractFactory(
      name: "IKIP17Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17Enumerable__factory>;
    getContractFactory(
      name: "IKIP17Full",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17Full__factory>;
    getContractFactory(
      name: "IKIP17Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17Metadata__factory>;
    getContractFactory(
      name: "IKIP17Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17Receiver__factory>;
    getContractFactory(
      name: "KIP17",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17__factory>;
    getContractFactory(
      name: "KIP17Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Burnable__factory>;
    getContractFactory(
      name: "KIP17Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Enumerable__factory>;
    getContractFactory(
      name: "KIP17Full",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Full__factory>;
    getContractFactory(
      name: "KIP17Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Metadata__factory>;
    getContractFactory(
      name: "KIP17MetadataMintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17MetadataMintable__factory>;
    getContractFactory(
      name: "KIP17Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Mintable__factory>;
    getContractFactory(
      name: "KIP17Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Pausable__factory>;
    getContractFactory(
      name: "KIP17Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP17Token__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IKIP37",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP37__factory>;
    getContractFactory(
      name: "IKIP37MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP37MetadataURI__factory>;
    getContractFactory(
      name: "IKIP37Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP37Receiver__factory>;
    getContractFactory(
      name: "KIP37",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37__factory>;
    getContractFactory(
      name: "KIP37Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Burnable__factory>;
    getContractFactory(
      name: "KIP37Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Holder__factory>;
    getContractFactory(
      name: "KIP37Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Mintable__factory>;
    getContractFactory(
      name: "KIP37Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Pausable__factory>;
    getContractFactory(
      name: "KIP37Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Receiver__factory>;
    getContractFactory(
      name: "KIP37Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP37Token__factory>;
    getContractFactory(
      name: "IKIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7__factory>;
    getContractFactory(
      name: "IKIP7Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7Receiver__factory>;
    getContractFactory(
      name: "KIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7__factory>;
    getContractFactory(
      name: "KIP7Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Burnable__factory>;
    getContractFactory(
      name: "KIP7Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Metadata__factory>;
    getContractFactory(
      name: "KIP7Mintable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Mintable__factory>;
    getContractFactory(
      name: "KIP7Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Pausable__factory>;
    getContractFactory(
      name: "KIP7Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7Token__factory>;
    getContractFactory(
      name: "KIP7TokenFull",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KIP7TokenFull__factory>;
    getContractFactory(
      name: "SampleNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleNFT__factory>;

    getContractAt(
      name: "BatchRedeemVoucher",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BatchRedeemVoucher>;
    getContractAt(
      name: "IKApmCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKApmCoin>;
    getContractAt(
      name: "IKApmNftVoucher",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKApmNftVoucher>;
    getContractAt(
      name: "IKApmNftVoucherSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKApmNftVoucherSale>;
    getContractAt(
      name: "KApmCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KApmCoin>;
    getContractAt(
      name: "KApmNftVoucher",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KApmNftVoucher>;
    getContractAt(
      name: "KApmNftVoucherSale",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KApmNftVoucherSale>;
    getContractAt(
      name: "KBpmCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KBpmCoin>;
    getContractAt(
      name: "MinterRole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinterRole>;
    getContractAt(
      name: "PauserRole",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PauserRole>;
    getContractAt(
      name: "Context",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Context>;
    getContractAt(
      name: "IKIP13",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP13>;
    getContractAt(
      name: "KIP13",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP13>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "SelfDestructible",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfDestructible>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "ERC1155ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155ReceiverMock>;
    getContractAt(
      name: "ERC721ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ReceiverMock>;
    getContractAt(
      name: "KIP13InterfacesSupported",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP13InterfacesSupported>;
    getContractAt(
      name: "SupportsInterfaceWithLookupMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SupportsInterfaceWithLookupMock>;
    getContractAt(
      name: "KIP13CheckerMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP13CheckerMock>;
    getContractAt(
      name: "KIP13Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP13Mock>;
    getContractAt(
      name: "KIP17FullMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17FullMock>;
    getContractAt(
      name: "KIP17MintableBurnableImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17MintableBurnableImpl>;
    getContractAt(
      name: "KIP17Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Mock>;
    getContractAt(
      name: "KIP17PausableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17PausableMock>;
    getContractAt(
      name: "KIP17ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17ReceiverMock>;
    getContractAt(
      name: "KIP37BurnableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37BurnableMock>;
    getContractAt(
      name: "KIP37Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Mock>;
    getContractAt(
      name: "KIP37PausableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37PausableMock>;
    getContractAt(
      name: "KIP37ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37ReceiverMock>;
    getContractAt(
      name: "KIP37TokenMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37TokenMock>;
    getContractAt(
      name: "KIP7BurnableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7BurnableMock>;
    getContractAt(
      name: "KIP7MetadataMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7MetadataMock>;
    getContractAt(
      name: "KIP7MintableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7MintableMock>;
    getContractAt(
      name: "KIP7Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Mock>;
    getContractAt(
      name: "KIP7PausableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7PausableMock>;
    getContractAt(
      name: "MinterRoleMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MinterRoleMock>;
    getContractAt(
      name: "PauserRoleMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PauserRoleMock>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IKIP17",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17>;
    getContractAt(
      name: "IKIP17Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17Enumerable>;
    getContractAt(
      name: "IKIP17Full",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17Full>;
    getContractAt(
      name: "IKIP17Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17Metadata>;
    getContractAt(
      name: "IKIP17Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17Receiver>;
    getContractAt(
      name: "KIP17",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17>;
    getContractAt(
      name: "KIP17Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Burnable>;
    getContractAt(
      name: "KIP17Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Enumerable>;
    getContractAt(
      name: "KIP17Full",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Full>;
    getContractAt(
      name: "KIP17Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Metadata>;
    getContractAt(
      name: "KIP17MetadataMintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17MetadataMintable>;
    getContractAt(
      name: "KIP17Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Mintable>;
    getContractAt(
      name: "KIP17Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Pausable>;
    getContractAt(
      name: "KIP17Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP17Token>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IKIP37",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP37>;
    getContractAt(
      name: "IKIP37MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP37MetadataURI>;
    getContractAt(
      name: "IKIP37Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP37Receiver>;
    getContractAt(
      name: "KIP37",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37>;
    getContractAt(
      name: "KIP37Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Burnable>;
    getContractAt(
      name: "KIP37Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Holder>;
    getContractAt(
      name: "KIP37Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Mintable>;
    getContractAt(
      name: "KIP37Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Pausable>;
    getContractAt(
      name: "KIP37Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Receiver>;
    getContractAt(
      name: "KIP37Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP37Token>;
    getContractAt(
      name: "IKIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7>;
    getContractAt(
      name: "IKIP7Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7Receiver>;
    getContractAt(
      name: "KIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7>;
    getContractAt(
      name: "KIP7Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Burnable>;
    getContractAt(
      name: "KIP7Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Metadata>;
    getContractAt(
      name: "KIP7Mintable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Mintable>;
    getContractAt(
      name: "KIP7Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Pausable>;
    getContractAt(
      name: "KIP7Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7Token>;
    getContractAt(
      name: "KIP7TokenFull",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KIP7TokenFull>;
    getContractAt(
      name: "SampleNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SampleNFT>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

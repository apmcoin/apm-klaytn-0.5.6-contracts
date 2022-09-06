import { ethers } from "hardhat";
const { parseUnits } = require("ethers/lib/utils");

//deploy New KApmNftVoucherLimitSale Contract
const testVault = '0xfee12041DCb1C482783c0F85c2f17B70E9fBB0f7';
const testBPM = '0x092748a9a8226db6b0fdee8d7708abc4bcf53f99';
const testNftVoucher = '0xc979Ebf3359EBCbD7925Be23320208925Cc6f71d';
const tokenAndVoucherId = 15;

async function main() {
  //DO ON CRYPRESS
  //const salePrice = parseUnits("1.0", "ether")
  const Sale = await ethers.getContractFactory("KApmNftVoucherLimitSale");
  const sale = await Sale.deploy(
      testBPM, //payable token
      testNftVoucher, //saled NFT Voucher
      testVault, //payable FeeTo
      10000,//saleLimit
      tokenAndVoucherId, //token id == voucher format id
      "Regular sales of bpM NFT e-Vouchers",
      "bpM sale desc\n\nBpM NFT e-Vouchers can be 'Unwrapped' to the apM Event e-Voucher on the FOMO Tech web via apM Members App.\n\napM Event e-Voucher is can freely redeem e-Voucher like cash at the three apM shopping malls.\n\n\n\nExpiration Date : 5 years.\n\nTransfer and refunds are not possible after when e-Vouchers are unwrapped.\n\n\n\nWrapped by FOMO Tech Limited."
    );
  await sale.deployed();
  console.log("Sale deployed to:", sale.address);

  //Mainnet APM todo : ADD Transfer Owner role to HW Wallet
  
  //After deploy, 
  // 1. add minter role to deployed sale contract
  // 2. Create & setVoucherDetail on nft contract
 
  //After sale, remove role!
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
import { ethers } from "hardhat";

async function main() {
  const testVault = '0xfee12041DCb1C482783c0F85c2f17B70E9fBB0f7';
  const testBPM = '0x092748a9a8226db6b0fdee8d7708abc4bcf53f99';
  const testNftVoucher = '0xc979Ebf3359EBCbD7925Be23320208925Cc6f71d';

  
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

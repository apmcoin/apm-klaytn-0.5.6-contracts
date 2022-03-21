# apm-klaytn-0.5.6-contracts
apM Klaytn contracts

## Environment
* solc 0.5.6
* Constantinople EVM
* vscode

## compile&test
```
npm i
npx hardhat compile
npx hardhat test
```

## KIP-7 apM Coin
* apM Token for Klaytn Mainnet
Code : `contracts/KApmNftCoin.sol`  
Mainnet :  


## KIP-37 NFT Voucher
* KIP37 standard NFT Voucher with on-chain metadata that can be transmitted to off-chain services.
Code : `contracts/KApmNftVoucher.sol`  
Mainnet:  


**Minting New Voucher type**
1. `create()` a new KIP-37 NFT
2. `setVoucherDetail()` to the created NFT

**Minting Additional Voucher**
1. `mint()`

**Transfer as an off-chain service**
1. `redeemVoucher()`


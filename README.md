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

## NFT Voucher
contracts/KApmNftVoucher.sol

**Issuing New Voucher**
1. `create()` a new KIP-37 NFT
2. `setVoucherDetail()` to the created NFT

**Issuing New Voucher**
1. `mint()`


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


**Creating & Minting New Voucher type**
```
    //Create New KIP-37 NFT Type
    create(
        0,          // id
        10000,      //initialSupply
        "endpoint"  //uri
    );
        
    //Update ON-Chain metadata
    setVoucherDetail(    
        0,                  //id
        "apM e-Voucher",    //name
        "apM NFT Voucher powered by FOMO Tech", //description
        "e-Voucher",        //type
        0,                  //voucherFormatId
        10000,              //faceValue
        "KRW",              //currencyCode
        2121792591,         //expireAt
        true                //redeemAvailable
    );
      
```

**Minting Additional Voucher**
1. `mint()`

**Transfer as an off-chain service**
1. `redeemVoucher()`


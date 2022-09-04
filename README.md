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
Code : `contracts/KApmCoin.sol`  
Mainnet : 0x4ec5e1c092f9c40d1e9be5744feddb23935232e9


## KIP-37 NFT Voucher
* KIP37 standard NFT Voucher with on-chain metadata that can be transmitted to off-chain services.
Code : `contracts/KApmNftVoucher.sol`  
Mainnet: 0xb98efc3e0899ba4e2f074317f45b9f8b9bcf7be0


**Creating & Minting New Voucher type**
```
    //Create New KIP-37 NFT Type
    create(
        2,          // id
        1,        //initialSupply
        "https://cdn.apm-coin.com/nft-voucher/apm-members-welcome-voucher.json"  //uri
    );
        
    //Update ON-Chain metadata
    setVoucherDetail(    
        2,                  //id
        "apM Members Welcome Voucher",    //name
        "Desc~\n\n\nWrapped by FOMO Tech Limited.", //description
        "2",                //voucherFormatId
        1653922800,         //expireAt
        true                //redeemAvailable
    );
      
```

**Minting Additional Voucher**
1. `mint()`

**Transfer as an off-chain service**
1. `redeemVoucher()`


**sale**
(Deprecated)KApmNftVoucherSale : 임직원 세일에 사용
KApmNftVoucherLimitSale : 화이트리스트 한정 세일에 사용
1.

1. `setStep(uint256)`
- 0 : waiting for sale
- 1 : sale
- 2 : sold out (Automatic setting when sold out)
2. Grant of minter role from NFT contract
3. SetBuyLimitPerNft



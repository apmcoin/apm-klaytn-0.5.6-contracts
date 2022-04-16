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
        2,          // id
        1,        //initialSupply
        "https://cdn.apm-coin.com/nft-voucher/apm-members-welcome-voucher.json"  //uri
    );
        
    //Update ON-Chain metadata
    setVoucherDetail(    
        2,                  //id
        "apM Members Welcome Voucher",    //name
        "apM 멤버스에서 사용할 수 있는 NFT 상품권입니다\n\n- 본 NFT를 상품권으로 교환 시 apM 멤버스 앱으로 이벤트 상품권이 지급됩니다.\n\n- 상품권의 사용처는 apM Members 이벤트 상품권과 동일합니다.\n\n\nWrapped by FOMO Tech Limited.", //description
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


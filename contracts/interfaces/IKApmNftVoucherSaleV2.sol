pragma solidity ^0.5.6;

import "./IKApmNftVoucher.sol";
import "./IKApmCoin.sol";

contract IKApmNftVoucherSale {
    event SetApmCoin(address indexed apmCoinAddress);
    event SetNftVoucher(address indexed apmCoinAddress);
    event SetFeeTo(address indexed feeTo);
    event SetTokenId(uint256 tokenId);
    event SetApmPerNft(uint256 apmPerNft);
    event SetStep(uint256 step);
    event SetSaleLimit(uint256 step);
    event SetSaleName(string saleName);
    event SetSaleDescription(string saleDescription);
}
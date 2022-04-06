pragma solidity ^0.5.6;

import "../klaytn-contracts/token/KIP37/IKIP37MetadataURI.sol";
import "../klaytn-contracts/token/KIP37/IKIP37Receiver.sol";

contract IKApmNftVoucher is IKIP37 {
    event SetBlacklistManager(address indexed account);
    event RegisterBlacklist(address indexed account);
    event UnregisterBlacklist(address indexed account);
    event RegisterUuidBlacklist(string indexed uuid);
    event UnregisterUuidBlacklist(string indexed uuid);
    event SetVoucherDetail(
        uint256 indexed tokenId,
        string name,
        string description,
        uint256 indexed voucherFormatId,
        uint256 expireAt,
        bool redeemAvailable
        );
    event RedeemVoucher(
        uint256 redeemId,
        uint256 indexed tokenId,
        uint256 amount,
        string userUuid,
        uint256 indexed voucherFormatId,
        uint256 expireAt,
        address indexed sender
        );

    //Transfer voucher to off-chain service using uuid
    function redeemVoucher(
        uint256 tokenId,
        uint256 amount,
        string calldata userUuid
    ) external;

    function setVoucherDetail(
        uint256 tokenId,
        string calldata title,
        string calldata description,
        uint256 voucherFormatId,
        uint256 expireAt,
        bool redeemAvailable
    ) external;

    function voucherInfo(uint256 tokenId)
        public
        view
        returns (
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            bool,
            bool
    );

    function isBlacklist(address account) public view returns (bool);
    function isUuidBlacklist(string memory uuid) public view returns (bool);
}
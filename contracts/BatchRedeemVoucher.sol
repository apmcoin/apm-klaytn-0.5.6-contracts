pragma solidity 0.5.6;
pragma experimental ABIEncoderV2;

import "./interfaces/IKApmNftVoucher.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/token/KIP37/IERC1155Receiver.sol";

/*
    contract for only testing.
    If you deposit an asset that is not specified in this contarct, it cannot be refund.
*/
contract BatchRedeemVoucher is Ownable{
    bytes4 private constant _KIP37_RECEIVED = 0xe78b3325;
    bytes4 private constant _ERC1155_RECEIVED = 0xf23a6e61;

    IKApmNftVoucher NFTVoucher;
    constructor(address _nftVoucher) public {
        NFTVoucher = IKApmNftVoucher(_nftVoucher);
    }

    function batchRedeemVoucher(
        uint256[] calldata tokenIds,
        uint256[] calldata amounts,
        string[] calldata userUuids) external onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i ++) {
            NFTVoucher.redeemVoucher(tokenIds[i], amounts[i], userUuids[i]);
        }
    }
}


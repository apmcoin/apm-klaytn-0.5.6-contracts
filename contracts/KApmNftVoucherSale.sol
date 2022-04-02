pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
import "./interfaces/IKApmNftVoucherSale.sol";
import "./interfaces/IKApmCoin.sol";

contract KApmNftVoucherSale is Ownable {
    using SafeMath for uint256;

    address public feeTo;
    IKApmNftVoucher private _nftVoucher;
    IKApmCoin private _apmCoin;
    uint256 private _tokenId;
    uint256 private _apmPerNft = 25 * 1e18;
    uint256 private _step = 0;
    uint256 private _saleLimit = 0;
    uint256 private _saleCount = 0;
    string private _saleName;
    string private _saleDescription;
    mapping(address => bool) private _whitelist;

    constructor(
        IKApmCoin apmCoinAddress,
        IKApmNftVoucher nftVoucherAddress,
        address feeToAddress,
        uint256 tokenIdValue,
        string memory saleNameValue,
        string memory saleDescriptionValue
        )
        public
    {
        _apmCoin = apmCoinAddress;
        _nftVoucher = nftVoucherAddress;
        feeTo = feeToAddress;
        _tokenId = tokenIdValue;
        _saleName = saleNameValue;
        _saleDescription = saleDescriptionValue;
    }

    function setFeeTo(address feeToAddress) external onlyOwner {
        feeTo = feeToAddress;
    }

    function getApmCoin() public view returns (IKApmCoin){
        return _apmCoin;
    }

    function setApmCoin(IKApmCoin apmCoinAddress) external onlyOwner {
        _apmCoin = apmCoinAddress;
    }

    function getNftVoucher() public view returns (IKApmNftVoucher){
        return _nftVoucher;
    }

    function setNftVoucher(IKApmNftVoucher nftVoucherAddress) external onlyOwner {
        _nftVoucher = nftVoucherAddress;
    }

    function getSaleTokenId() public view returns (uint256){
        return _tokenId;
    }

    function setSaleTokenId(uint256 nftTokenId) external onlyOwner {
        _tokenId = nftTokenId;
    }

    function getApmPerNft() public view returns (uint256){
        return _apmPerNft;
    }

    function setApmPerNft(uint256 apmPerNftValue) external onlyOwner {
        _apmPerNft = apmPerNftValue;
    }

    function getStep() public view returns (uint256){
        return _step;
    }

    function setStep(uint256 stepValue) external onlyOwner {
        _step = stepValue;
    }

    function getSaleLimit() public view returns (uint256){
        return _saleLimit;
    }

    function setSaleLimit(uint256 saleLimitValue) external onlyOwner {
        _saleLimit = saleLimitValue;
    }

    function getSaleCount() public view returns (uint256){
        return _saleCount;
    }

    function setSaleCount(uint256 saleCountValue) external onlyOwner {
        _saleCount = saleCountValue;
    }

    function getSaleName() public view returns (string memory){
        return _saleName;
    }

    function setSaleName(string calldata saleNameValue) external onlyOwner {
        _saleName = saleNameValue;
    }

    function getSaleDescription() public view returns (string memory){
        return _saleDescription;
    }

    function setSaleDescription(string calldata saleDescriptionValue) external onlyOwner {
        _saleDescription = saleDescriptionValue;
    }

    function isWhitelist(address wallet) public view returns (bool){
        return _whitelist[wallet];
    }

    function addWhitelist(address[] calldata wallets) external onlyOwner {
        for (uint256 i = 0; i < wallets.length; i = i.add(1)) {
            _whitelist[wallets[i]] = true;
        }
    }

    function removeWhitelist(address[] calldata wallets) external onlyOwner {
        for (uint256 i = 0; i < wallets.length; i = i.add(1)) {
            _whitelist[wallets[i]] = false;
        }
    }

    function buy(uint256 _buyCount, uint256 _apmAmount) external {
        require(_saleCount.add(_buyCount) <= _saleLimit, "buyCount is greater than the remaining sales quantity.");
        require(_buyCount.mul(_apmAmount) == _buyCount.mul(_apmPerNft), "Either apmPerNft has changed or the input price is invalid.");
        require(isWhitelist(msg.sender), "It's not on the whitelist.");

        //_apmCoin.transferFrom(msg.sender,
        //_saleCount = _saleCount.add(1);

/*
        uint256 totalSupply = nft.totalSupply();
        for (uint256 i = totalSupply; i < totalSupply.add(count); i = i.add(1)) {
            nft.mint(msg.sender, i);
        }
        feeTo.transfer(msg.value);
        limit = limit.sub(count);*/
    }
}
pragma solidity ^0.5.6;

//import "hardhat/console.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";
//import "./klaytn-contracts/token/KIP37/KIP37.sol";
//import "./klaytn-contracts/token/KIP7/KIP7.sol";
import "./interfaces/IKApmNftVoucherSale.sol";
import "./klaytn-contracts/token/KIP37/KIP37Mintable.sol";

contract KApmNftVoucherSale is Ownable, IKApmNftVoucherSale {
    using SafeMath for uint256;
    IKApmCoin public apmCoin;
    KIP37Mintable public nftVoucher;
    address public feeTo;
    uint256 public tokenId;
    uint256 public apmPerNft = 25 * 1e18;
    uint256 public step = 0;
    uint256 public saleLimit = 0;
    uint256 public saleCount = 0;
    string public saleName;
    string public saleDescription;
    mapping(address => bool) private _whitelist;

    constructor(
        IKApmCoin _apmCoin,
        KIP37Mintable _nftVoucher,
        address _feeToAddress,
        uint256 _tokenId,
        uint256 _saleLimit,
        string memory _saleName,
        string memory _saleDescription
        )
        public
    {
        setApmCoin(_apmCoin);
        setNftVoucher(_nftVoucher);
        setFeeTo(_feeToAddress);
        setTokenId(_tokenId);
        setSaleLimit(_saleLimit);
        setSaleName(_saleName);
        setSaleDescription(_saleDescription);
    }

    function setApmCoin(IKApmCoin _apmCoin) public onlyOwner {
        apmCoin = _apmCoin;
        emit SetApmCoin(address(apmCoin));
    }

    function setNftVoucher(KIP37Mintable _nftVoucher) public onlyOwner {
        nftVoucher = _nftVoucher;
        emit SetNftVoucher(address(nftVoucher));
    }

    function setFeeTo(address _feeTo) public onlyOwner {
        feeTo = _feeTo;
        emit SetFeeTo(feeTo);
    }

    function setTokenId(uint256 _tokenId) public onlyOwner {
        tokenId = _tokenId;
        emit SetTokenId(tokenId);
    }

    function setApmPerNft(uint256 _apmPerNft) public onlyOwner {
        apmPerNft = _apmPerNft;
        emit SetApmPerNft(apmPerNft);
    }

    function setStep(uint256 _step) public onlyOwner {
        step = _step;
        emit SetStep(step);
    }

    function setSaleLimit(uint256 _saleLimit) public onlyOwner {
        saleLimit = _saleLimit;
        emit SetSaleLimit(saleLimit);
    }

    function setSaleCount(uint256 _saleCount) public onlyOwner {
        saleCount = _saleCount;
         emit SetSaleCount(saleCount);
    }

    function setSaleName(string memory _saleName) public onlyOwner {
        saleName = _saleName;
        emit SetSaleName(saleName);
    }

    function setSaleDescription(string memory _saleDescription) public onlyOwner {
        saleDescription = _saleDescription;
        emit SetSaleDescription(saleDescription);
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
        require(_buyCount > 0, "Need _buyCount");
        require(_apmAmount > 0, "Need _apmAmount");
        require(step == 1, "It's not on sale.");
        require(isWhitelist(msg.sender), "It's not on the whitelist.");

        uint256 calSaleCount = saleCount.add(_buyCount);
        require(calSaleCount <= saleLimit, "Sales NFT is insufficient.");
        uint256 calBuyApmAmount = _buyCount.mul(apmPerNft);
        require(_apmAmount == calBuyApmAmount, "Either apmPerNft has changed or the input price is invalid.");
        uint256 allowanceAmount = apmCoin.allowance(msg.sender, address(this));
        require(_apmAmount <= allowanceAmount, "Need token approve");
        apmCoin.transferFrom(msg.sender, feeTo, _apmAmount);

        saleCount = calSaleCount;
        nftVoucher.mint(tokenId, msg.sender, _buyCount);

        if(saleCount == saleLimit){
            setStep(2);
        }
    }
}
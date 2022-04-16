pragma solidity ^0.5.6;
import "./klaytn-contracts/math/SafeMath.sol";
import "./interfaces/IKApmCoin.sol";
import "./klaytn-contracts/ownership/Ownable.sol";

contract KApmBatchTransfer is Ownable{
    using SafeMath for uint256;

    IKApmCoin public apm;

    constructor(address _contractAddress) public {
        apm = IKApmCoin(_contractAddress);
    }

    //tolist에게 valueList만큼의 apm을 전송한다.
    function batchTransfer(address[] calldata _toList, uint256[] calldata _valueList) external onlyOwner{
        require(_toList.length == _valueList.length, "Array length is different");

        uint256 i = 0;

        for (i = 0; i < _toList.length; i ++)
        {
            apm.transferFrom(msg.sender, _toList[i], _valueList[i]);
        }
    }
}

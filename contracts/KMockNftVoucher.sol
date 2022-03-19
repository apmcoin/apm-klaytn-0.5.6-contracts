pragma solidity 0.5.6;

import "./utils/Strings.sol";
import "./klaytn-contracts/token/KIP37/KIP37.sol";
import "./klaytn-contracts/token/KIP37/KIP37Burnable.sol";
import "./klaytn-contracts/token/KIP37/KIP37Pausable.sol";
import "./klaytn-contracts/token/KIP37/KIP37Mintable.sol";
import "./klaytn-contracts/ownership/Ownable.sol";
import "./klaytn-contracts/math/SafeMath.sol";

contract KMockNftVoucher is Ownable, KIP37, KIP37Burnable, KIP37Pausable, KIP37Mintable{
    constructor (string memory uri) public KIP37(uri) {
        // solhint-disable-previous-line no-empty-blocks
    }

    //Set Default URI
    function setURI(string memory newuri) public onlyMinter {
        _setURI(newuri);
    }

    function setCustomURI(uint256 id, string memory newuri) public onlyMinter {
        _uris[id] = newuri;
    }

    function mint(address to, uint256 id, uint256 value, bytes memory data) public {
        _mint(to, id, value, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory values, bytes memory data) public {
        _mintBatch(to, ids, values, data);
    }

    function burn(address owner, uint256 id, uint256 value) public {
        _burn(owner, id, value);
    }

    function burnBatch(address owner, uint256[] memory ids, uint256[] memory values) public {
        _burnBatch(owner, ids, values);
    }
}
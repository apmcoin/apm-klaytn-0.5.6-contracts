pragma solidity ^0.5.0;

import "../klaytn-contracts/access/Roles.sol";

contract StaffRole {
    using Roles for Roles.Role;

    event StaffAdded(address indexed account);
    event StaffRemoved(address indexed account);

    Roles.Role private _staffs;

    constructor () internal {
        _addStaff(msg.sender);
    }

    modifier onlyStaff() {
        require(isStaff(msg.sender), "StaffRole: caller does not have the Staff role");
        _;
    }

    function isStaff(address account) public view returns (bool) {
        return _staffs.has(account);
    }

    function addStaff(address account) public onlyStaff {
        _addStaff(account);
    }

    function renounceStaff() public {
        _removeStaff(msg.sender);
    }

    function _addStaff(address account) internal {
        _staffs.add(account);
        emit StaffAdded(account);
    }

    function _removeStaff(address account) internal {
        _staffs.remove(account);
        emit StaffRemoved(account);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DigitalAssetRegistry is Ownable, ReentrancyGuard {
    struct Asset {
        string name;
        string description;
        address owner;
        uint256 timestamp;
        bool isRegistered;
    }

    // Mapping from asset ID to Asset
    mapping(uint256 => Asset) public assets;
    
    // Counter for total assets
    uint256 public totalAssets;
    
    // Events
    event AssetRegistered(uint256 indexed assetId, string name, address indexed owner);
    event AssetTransferred(uint256 indexed assetId, address indexed from, address indexed to);
    
    constructor() Ownable() {}
    
    // Register a new asset
    function registerAsset(string memory _name, string memory _description) 
        public 
        nonReentrant 
        returns (uint256) 
    {
        uint256 assetId = totalAssets;
        
        assets[assetId] = Asset({
            name: _name,
            description: _description,
            owner: msg.sender,
            timestamp: block.timestamp,
            isRegistered: true
        });
        
        totalAssets++;
        
        emit AssetRegistered(assetId, _name, msg.sender);
        return assetId;
    }
    
    // Transfer asset ownership
    function transferAsset(uint256 _assetId, address _newOwner) 
        public 
        nonReentrant 
    {
        require(assets[_assetId].isRegistered, "Asset not registered");
        require(assets[_assetId].owner == msg.sender, "Not the asset owner");
        require(_newOwner != address(0), "Invalid new owner address");
        
        address oldOwner = assets[_assetId].owner;
        assets[_assetId].owner = _newOwner;
        
        emit AssetTransferred(_assetId, oldOwner, _newOwner);
    }
    
    // Get asset details
    function getAsset(uint256 _assetId) 
        public 
        view 
        returns (
            string memory name,
            string memory description,
            address owner,
            uint256 timestamp,
            bool isRegistered
        ) 
    {
        Asset memory asset = assets[_assetId];
        return (
            asset.name,
            asset.description,
            asset.owner,
            asset.timestamp,
            asset.isRegistered
        );
    }
} 
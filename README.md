# Digital Asset Registry Smart Contract

A Solidity smart contract for registering and managing digital assets on the blockchain. This contract provides functionality for registering digital assets, transferring ownership, and retrieving asset details.

## Features

- Register new digital assets with name and description
- Transfer asset ownership between addresses
- Retrieve detailed asset information
- Secure ownership management using OpenZeppelin's Ownable
- Protection against reentrancy attacks using ReentrancyGuard

## Smart Contract Functions

### `registerAsset(string memory _name, string memory _description)`
- Registers a new digital asset
- Returns the asset ID
- Emits `AssetRegistered` event

### `transferAsset(uint256 _assetId, address _newOwner)`
- Transfers ownership of an asset to a new address
- Emits `AssetTransferred` event

### `getAsset(uint256 _assetId)`
- Returns asset details including:
  - Name
  - Description
  - Owner address
  - Registration timestamp
  - Registration status

## Technical Details

- Built with Solidity ^0.8.0
- Uses OpenZeppelin contracts for security:
  - Ownable.sol
  - ReentrancyGuard.sol
- Implements standard security best practices

## Events

- `AssetRegistered`: Emitted when a new asset is registered
- `AssetTransferred`: Emitted when asset ownership is transferred

## Installation

1. Clone the repository:
```bash
git clone https://github.com/emmyjonny/Smart-Contract---Digital-Asset-Registry.git
```

2. Install dependencies:
```bash
npm install
```

## Testing

To run tests:
```bash
npx hardhat test
```

## License

MIT License

## Author

emmyjonny 
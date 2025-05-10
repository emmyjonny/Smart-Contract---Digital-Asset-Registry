const hre = require("hardhat");

async function main() {
  // Get the contract at the deployed address
  const contractAddress = "0x8D45501e2A95Fe964Bb2C7BE0b33434A7418f043";
  const DigitalAssetRegistry = await hre.ethers.getContractFactory("DigitalAssetRegistry");
  const registry = await DigitalAssetRegistry.attach(contractAddress);

  // Asset ID to transfer (0 is our test asset)
  const assetId = 0;
  
  // New owner's address (replace this with the actual recipient address)
  const newOwner = "0x1234567890123456789012345678901234567890";
  
  console.log("Transferring asset...");
  console.log("Asset ID:", assetId);
  console.log("Current owner:", (await registry.getAsset(assetId)).owner);
  console.log("New owner:", newOwner);
  
  const tx = await registry.transferAsset(assetId, newOwner);
  await tx.wait();
  
  // Get the updated asset details
  const asset = await registry.getAsset(assetId);
  
  console.log("\nAsset transferred successfully!");
  console.log("New owner:", asset.owner);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
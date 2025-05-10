const hre = require("hardhat");

async function main() {
  // Get the contract at the deployed address
  const contractAddress = "0x8D45501e2A95Fe964Bb2C7BE0b33434A7418f043";
  const DigitalAssetRegistry = await hre.ethers.getContractFactory("DigitalAssetRegistry");
  const registry = await DigitalAssetRegistry.attach(contractAddress);

  // Register a test asset
  const name = "Test Digital Asset";
  const description = "This is a test digital asset for demonstration purposes";
  
  console.log("Registering asset...");
  const tx = await registry.registerAsset(name, description);
  await tx.wait();
  
  // Get the asset ID (it will be the total assets - 1 since we just added one)
  const totalAssets = await registry.totalAssets();
  const assetId = totalAssets - 1;
  
  // Get the asset details
  const asset = await registry.getAsset(assetId);
  
  console.log("\nAsset registered successfully!");
  console.log("Asset ID:", assetId.toString());
  console.log("Name:", asset.name);
  console.log("Description:", asset.description);
  console.log("Owner:", asset.owner);
  console.log("Timestamp:", new Date(asset.timestamp * 1000).toLocaleString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
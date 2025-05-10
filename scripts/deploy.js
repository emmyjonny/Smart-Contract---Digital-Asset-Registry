const hre = require("hardhat");

async function main() {
  const DigitalAssetRegistry = await hre.ethers.getContractFactory("DigitalAssetRegistry");
  const registry = await DigitalAssetRegistry.deploy();

  await registry.deployed();

  console.log("DigitalAssetRegistry deployed to:", registry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 
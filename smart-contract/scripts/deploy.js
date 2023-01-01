const hre = require("hardhat");

async function main() {
  const Coffee = await hre.ethers.getContractFactory("Coffee");
  const coffee = await Coffee.deploy();

  await coffee.deployed();

  console.log(`Coffee with 1 ETH deployed to ${coffee.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

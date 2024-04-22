import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SupplyChain", (m) => {
  // Deploy the SupplyChain contract
  const supplyChainContract = m.contract("SupplyChain", []);

  // Call functions to add roles and setup the contract
  m.call(supplyChainContract, "addRMS", ["RMS_address", "RMS_name", "RMS_place"]);
  m.call(supplyChainContract, "addManufacturer", ["Manufacturer_address", "Manufacturer_name", "Manufacturer_place"]);
  m.call(supplyChainContract, "addDistributor", ["Distributor_address", "Distributor_name", "Distributor_place"]);
  m.call(supplyChainContract, "addRetailer", ["Retailer_address", "Retailer_name", "Retailer_place"]);

  // Call function to add medicines to the stock
  m.call(supplyChainContract, "addMedicine", ["Medicine_name", "Medicine_description"]);
});


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}

// import ("@nomicfoundation/hardhat-toolbox");

//  /** @type import('hardhat/config').HardhatUserConfig */
// // {"solidity" : "0.8.24"};

// export default {
//     defaultNetwork: "localhost",
//     networks: {
//         localhost: {
//             url: "http://localhost:8545"
//         }
//     },
//     solidity: {
//         version: "0.8.20",
//         settings: {
//             optimizer: {
//                 enabled: true,
//                 runs: 200
//             }
//         }
//     }
// };


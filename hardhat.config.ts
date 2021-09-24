import { HardhatUserConfig } from "hardhat/config";
import { HttpNetworkAccountsConfig } from "hardhat/types"

import "solc"
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

const accounts = (): HttpNetworkAccountsConfig => {
  if (!process.env.PRIV_KEY) {
    return "remote"
  }
  return [process.env.PRIV_KEY!]
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    mumbai: { // matic testnet
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      gasPrice: 1000000000,
      accounts: accounts(),
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 137,
      gasPrice: 2000000000,
      accounts: accounts(),
    },
    ftm: {
      url: 'https://rpc.ftm.tools/',
      chainId: 250,
      gasPrice: 401000000000,
      accounts: accounts(),
    },
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
};

export default config;

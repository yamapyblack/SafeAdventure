import { ethers } from 'hardhat'
import { AdventureProxy } from "typechain/AdventureProxy"

const main = async () => {
    const AdventureProxyContract = await ethers.getContractFactory("AdventureProxy");

    const contract = (await AdventureProxyContract.deploy()) as AdventureProxy
    await contract.deployed();

    console.log('deployed txHash:', contract.deployTransaction.hash);
    console.log('deployed address:', contract.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

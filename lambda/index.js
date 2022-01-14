const abi = ["function adventuresLog(uint256[]) returns(bool)"];
import { KmsProvider } from "aws-kms-provider";
const ethers = require("ethers");

// function adventures(uint[] calldata _summonerIds) external {

//const main = async (event) => {
exports.handler = async (event, context, callback) => {
  const uri = event.uri;
  const contractAddress = event.contractAddress;
  const tokenIds = event.tokenIds;

  const provider = new ethers.providers.JsonRpcProvider(uri);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  //provider and contract
  const region = process.env.AWS_REGION;
  const keyId = process.env.KMS_KEY_ID;
  const kmsProvider = new KmsProvider(uri, { region, keyIds: [keyId] });
  const provider = new ethers.providers.Web3Provider(kmsProvider);
  const signer = provider.getSigner(0);
  const contract = new ethers.Contract(contractAddress, abi, provider);

  const isAdv = await contract.adventuresLog(tokenIds);
  console.log('isAdv',isAdv)

  // //exec
  // const tx = await contract.connect(signer).swapBatch(
  //     amountIn,
  //     routers,
  //     [
  //       weth,
  //       targetPaths[0],
  //       targetPaths[1],
  //       weth
  //     ],
  //     {gasLimit: gasLimit, gasPrice: gasPrice}
  //     )
  //   console.log("tx", tx)
};

const event = {
  contractAddress: "0x396162D8b284306fb6142cB42Ec957F08cB9D994",
  uri: "https://rpc.ftm.tools/",
  tokenIds: ["2077626", "2785676", "2786233", "2814481"],
};

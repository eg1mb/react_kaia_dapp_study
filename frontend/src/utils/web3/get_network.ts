import { Web3 } from "@kaiachain/web3js-ext";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getNetwork = async (provider: any): Promise<string> => {
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  // 네트워크 ID에 따른 이름 매핑
  switch (networkId.toString()) {
    case "1001":
      return "Kairos Testnet";
    case "8217":
      return "Kaia Mainnet";
    default:
      return "Unknown Network";
  }
};

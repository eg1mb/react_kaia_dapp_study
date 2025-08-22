import { Web3 } from "@kaiachain/web3js-ext";

export const requestAccounts = async (
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any,
  walletType: "Kaikas" | "MetaMask"
): Promise<string[]> => {
  const web3 = new Web3(provider);
  let accounts: string[];

  if (walletType === "Kaikas") {
    accounts = await provider.enable();
  } else {
    accounts = await web3.eth.requestAccounts();
  }

  if (!accounts || accounts.length === 0) {
    throw new Error("지갑 연결이 거부되었습니다.");
  }

  return accounts;
};

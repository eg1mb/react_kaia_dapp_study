import { Web3 } from "@kaiachain/web3js-ext";

export const requestAccounts = async (
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider: any,
  walletType: "Kaikas" | "MetaMask"
): Promise<string[]> => {
  try {
    console.log(`지갑 종류: ${walletType}`);
    const web3 = new Web3(provider);

    const accounts = await withTimeout(web3.eth.requestAccounts());

    if (!accounts || accounts.length === 0) {
      throw new Error("지갑 연결이 거부되었습니다.");
    }

    return accounts;
  } catch (error) {
    console.error("Account request error:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("지갑 연결 중 오류가 발생했습니다.");
  }
};

const withTimeout = <T>(promise: Promise<T>, ms: number = 10000) =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(
        () => reject(new Error("지갑 연결 시간이 초과되었습니다.")),
        ms
      )
    ),
  ]);

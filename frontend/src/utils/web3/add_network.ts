import { Web3 } from "@kaiachain/web3js-ext";
import { KAIA_TESTNET_CONFIG } from "../../configs/kaia_testnet_config";

export const addKaiaTestnet = async (): Promise<void> => {
  const provider = window.ethereum || window.klaytn;

  if (!provider) {
    throw new Error("지갑이 설치되지 않았습니다.");
  }

  const web3 = new Web3(provider);

  try {
    // 카이카스의 경우 네트워크 전환만
    if (window.klaytn) {
      await web3.currentProvider?.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: KAIA_TESTNET_CONFIG.chainId }],
      });
    } else {
      // 메타마스크의 경우 네트워크 추가
      await web3.currentProvider?.request({
        method: "wallet_addEthereumChain",
        params: [KAIA_TESTNET_CONFIG],
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`네트워크 추가 실패: ${errorMessage}`);
  }
};

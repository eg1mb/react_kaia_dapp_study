interface WalletInfo {
  provider: any; //eslint-disable-line @typescript-eslint/no-explicit-any
  walletType: "Kaikas" | "MetaMask";
}

export const detectWallet = (): WalletInfo => {
  // Kaikas 우선 체크
  if (typeof window.klaytn !== "undefined") {
    return {
      provider: window.klaytn,
      walletType: "Kaikas",
    };
  }

  // MetaMask 체크
  if (typeof window.ethereum !== "undefined") {
    return {
      provider: window.ethereum,
      walletType: "MetaMask",
    };
  }

  throw new Error(
    "지갑이 설치되지 않았습니다. Kaikas 또는 MetaMask를 설치해주세요."
  );
};

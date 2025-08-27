import { useEffect } from "react";
import { useWallet } from "@/hooks/useWallet";
import { useTransaction } from "@/hooks/useTransaction";
import WalletTemplate from "@/components/templates/wallet_template";

export default function ConnetWallet() {
  const {
    isConnected,
    isConnecting,
    account,
    balance,
    network,
    walletType,
    connectWallet,
    disconnect,
    addKaiaTestnet,
  } = useWallet();

  const { transactions, sendTransaction } = useTransaction();

  useEffect(() => {
    if (walletType) {
      addKaiaTestnet().then(() => {
        // 네트워크 전환 후 다시 연결하여 상태 업데이트
        connectWallet();
      });
    }
  }, [walletType]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <WalletTemplate
        isConnected={isConnected}
        isConnecting={isConnecting}
        account={account}
        balance={balance}
        network={network}
        transactions={transactions}
        onConnect={connectWallet}
        onDisconnect={disconnect}
        onSendTransaction={sendTransaction}
      />
    </>
  );
}

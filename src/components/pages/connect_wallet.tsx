import { useEffect } from "react";
import { useConnectionStore } from "@/store/connection";
import { useTransactionStore } from "@/store/transaction";
import WalletTemplate from "@/components/templates/wallet_template";

export default function Home() {
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
  } = useConnectionStore();

  const { transactions, sendTransaction } = useTransactionStore();

  useEffect(() => {
    if (walletType) {
      addKaiaTestnet().then(() => {
        // 네트워크 전환 후 다시 연결하여 상태 업데이트
        connectWallet();
      });
    }
  }, [walletType, addKaiaTestnet, connectWallet]);

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

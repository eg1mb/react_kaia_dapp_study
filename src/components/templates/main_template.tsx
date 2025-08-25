import { useAccount, useBalance, useChainId } from "wagmi";
import WalletInfo from "../organisms/wallet_info";
import SendForm from "../organisms/send_form";
import TransactionList from "../organisms/transaction_list";

export default function MainTemplate() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const chainId = useChainId();

  const formatBalance = balance
    ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
    : "0";

  const networkName = chainId === 1001 ? "Kaia Kairos" : "Unknown";

  const dummySendTransaction = (to: string, amount: string) => {
    console.log("Send transaction:", { to, amount });
  };

  return (
    <div className="app">
      <header>
        <h1>Kaia DApp Demo (Wagmi)</h1>
      </header>

      <main>
        <appkit-button />
      </main>

      {isConnected && (
        <div className="wallet-content">
          <div className="wallet-info-section">
            <WalletInfo
              account={address || null}
              balance={formatBalance}
              network={networkName}
            />
          </div>
          <div className="transaction-section">
            <SendForm onSendTransaction={dummySendTransaction} />
            <TransactionList transactions={[]} />
          </div>
        </div>
      )}
    </div>
  );
}

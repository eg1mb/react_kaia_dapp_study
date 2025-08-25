import WalletConnect from "../organisms/wallet_connect";
import WalletInfo from "../organisms/wallet_info";
import SendForm from "../organisms/send_form";
import TransactionList from "../organisms/transaction_list";
import type { Transaction } from "../../types/transaction";

interface MainTemplateProps {
  isConnected: boolean;
  isConnecting: boolean;
  account: string | null;
  balance: string | null;
  network: string | null;
  transactions: Transaction[];
  onConnect: () => void;
  onDisconnect: () => void;
  onSendTransaction: (to: string, amount: string) => void;
}

export default function MainTemplate({
  isConnected,
  isConnecting,
  account,
  balance,
  network,
  transactions,
  onConnect,
  onDisconnect,
  onSendTransaction,
}: MainTemplateProps) {
  return (
    <div className="app">
      <header>
        <h1>Kaia DApp Demo</h1>
        <WalletConnect
          isConnected={isConnected}
          isConnecting={isConnecting}
          onConnect={onConnect}
          onDisconnect={onDisconnect}
        />
      </header>

      {isConnected && (
        <main className="wallet-content">
          <div className="wallet-info-section">
            <WalletInfo account={account} balance={balance} network={network} />
          </div>
          <div className="transaction-section">
            <SendForm onSendTransaction={onSendTransaction} />
            <TransactionList transactions={transactions} />
          </div>
        </main>
      )}
    </div>
  );
}

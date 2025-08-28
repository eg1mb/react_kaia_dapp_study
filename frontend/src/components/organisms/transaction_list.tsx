import TxRow from "../molecule/row";
import PlainTextBlock from "../atoms/text/plain_text_block";
import PlainTextInline from "../atoms/text/plain_text_inline";
import type { Transaction } from "../../types/transaction";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: TransactionListProps) {

  if (transactions.length === 0) {
    return null;
  }

  return (
    <div className="transaction-list">
      <PlainTextBlock className="list-title" text="트랜잭션 내역" />
      {transactions.map((tx) => (
        <div key={tx.id} className="transaction-item">
          <div className="tx-info">
            <TxRow label="tx-account" value={tx.to} />
            <TxRow label="tx-amount" value={`${tx.amount} KAIA`} />
            <TxRow
              label="tx-state"
              value={tx.status}
              className={`status-${tx.status}`}
            />
            <TxRow label="tx-hash" value={tx.hash} className="hash" />
            <PlainTextInline 
              className="tx-timestamp" 
              text={new Date(tx.timestamp).toLocaleString()} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}

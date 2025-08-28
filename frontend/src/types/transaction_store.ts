import type { Transaction } from "./transaction";

export interface TransactionStore {
  // Transaction State
  transactions: Transaction[];

  // Actions
  sendTransaction: (to: string, amount: string) => Promise<void>;
}
import { create } from "zustand";
import type { TransactionStore } from "../types/transaction_store";
import {
  sendTransaction,
  createTransaction,
  checkTransactionStatus,
} from "../utils/web3/send_transaction";
import { getBalance } from "../utils/web3/get_balance";
import { useConnectionStore } from "./connection";
import { useErrorStore } from "./error";

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],

  sendTransaction: async (to: string, amount: string): Promise<void> => {
    const { account, web3 } = useConnectionStore.getState();
    const { setError } = useErrorStore.getState();

    if (!account || !web3) return;

    try {
      const txHash = await sendTransaction(web3, account, to, amount);
      const newTx = createTransaction(txHash, to, amount);

      set((state) => ({
        transactions: [newTx, ...state.transactions],
      }));

      const checkConfirmation = async (): Promise<void> => {
        try {
          const receipt = await checkTransactionStatus(web3, txHash);
          if (receipt) {
            set((state) => ({
              transactions: state.transactions.map((tx) =>
                tx.hash === txHash
                  ? {
                      ...tx,
                      status: "confirmed" as const,
                      gasUsed: receipt.gasUsed,
                    }
                  : tx
              ),
            }));

            const newBalance = await getBalance(web3, account);
            useConnectionStore.setState({ balance: newBalance });
          } else {
            setTimeout(checkConfirmation, 2000);
          }
        } catch (error) {
          console.error("Error checking transaction: ", error);
        }
      };

      setTimeout(checkConfirmation, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Transaction failed: ", error);
      setError(errorMessage);
      alert("트랜젝션 실패: " + errorMessage);
    }
  },
}));

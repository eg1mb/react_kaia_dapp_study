import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { TransactionStore } from "../types/transaction_store";
import type { Transaction } from "../types/transaction";
import {
  sendTransaction,
  createTransaction,
  checkTransactionStatus,
} from "../utils/web3/send_transaction";
import { getBalance } from "../utils/web3/get_balance";
import { useWallet } from "./useWallet";

export const useTransaction = (): TransactionStore => {
  const queryClient = useQueryClient();
  const { account, web3 } = useWallet();

  // 트랜잭션 리스트 조회
  const transactionsQuery = useQuery({
    queryKey: ["transactions"],
    queryFn: (): Transaction[] => {
      return [];
    },
    staleTime: Infinity,
  });

  // 트랜잭션 전송 뮤테이션
  const sendTransactionMutation = useMutation({
    mutationFn: async ({ to, amount }: { to: string; amount: string }) => {
      if (!account || !web3) {
        throw new Error("지갑이 연결되지 않았습니다.");
      }

      const txHash = await sendTransaction(web3, account, to, amount);
      const newTx = createTransaction(txHash, to, amount);

      // 트랜잭션 리스트에 추가
      const currentTransactions =
        queryClient.getQueryData<Transaction[]>(["transactions"]) || [];
      queryClient.setQueryData(
        ["transactions"],
        [newTx, ...currentTransactions]
      );

      return { txHash, newTx };
    },
    onSuccess: async ({ txHash }) => {
      if (!web3 || !account) return;

      // 트랜잭션 확인 및 잔고 업데이트 로직
      const checkConfirmation = async (): Promise<void> => {
        try {
          const receipt = await checkTransactionStatus(web3, txHash);
          if (receipt) {
            // 트랜잭션 상태 업데이트
            const currentTransactions =
              queryClient.getQueryData<Transaction[]>(["transactions"]) || [];
            const updatedTransactions = currentTransactions.map((tx) =>
              tx.hash === txHash
                ? {
                    ...tx,
                    status: "confirmed" as const,
                    gasUsed: receipt.gasUsed,
                  }
                : tx
            );
            queryClient.setQueryData(["transactions"], updatedTransactions);

            // 잔고 업데이트
            const newBalance = await getBalance(web3, account);
            const currentWallet = queryClient.getQueryData(["wallet"]);
            if (currentWallet) {
              queryClient.setQueryData(["wallet"], {
                ...currentWallet,
                balance: newBalance,
              });
            }
          } else {
            setTimeout(checkConfirmation, 2000);
          }
        } catch (error) {
          console.error("Error checking transaction: ", error);
        }
      };

      setTimeout(checkConfirmation, 2000);
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Transaction failed: ", error);
      alert("트랜젝션 실패: " + errorMessage);
    },
  });

  const sendTransactionAction = async (
    to: string,
    amount: string
  ): Promise<void> => {
    sendTransactionMutation.mutate({ to, amount });
  };

  return {
    transactions: transactionsQuery.data || [],
    sendTransaction: sendTransactionAction,
  };
};

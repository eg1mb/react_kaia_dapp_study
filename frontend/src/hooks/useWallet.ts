import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ConnectionStore } from "../types/connection_store";
import { detectWallet } from "../utils/web3/detect_wallet";
import { requestAccounts } from "../utils/web3/request_accounts";
import { getBalance } from "../utils/web3/get_balance";
import { getNetwork } from "../utils/web3/get_network";
import { addKaiaTestnet } from "../utils/web3/add_network";

export const useWallet = (): ConnectionStore => {
  const queryClient = useQueryClient();

  // 지갑 상태 조회 (로딩 상태 제외)
  const walletQuery = useQuery({
    queryKey: ["wallet"],
    queryFn: () => ({
      isConnected: false,
      account: null,
      balance: "0",
      network: null,
      web3: null,
      walletType: null,
    }),
    staleTime: Infinity,
  });

  // 지갑 연결 뮤테이션
  const connectWalletMutation = useMutation({
    mutationFn: async () => {
      const { provider, walletType } = detectWallet();
      const accounts = await requestAccounts(provider, walletType);
      const account = accounts[0];

      const balance = await getBalance(provider, account);
      const network = await getNetwork(provider);

      return {
        isConnected: true,
        account,
        balance,
        network,
        web3: provider,
        walletType,
      };
    },
    onMutate: () => {
      console.log("🔄 지갑 연결 시작...");
    },
    onSuccess: (data) => {
      console.log("✅ 지갑 연결 성공");
      queryClient.setQueryData(["wallet"], data);
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Wallet connection failed: ", error);
      alert(errorMessage);
    },
  });

  // 카이아 테스트넷 추가 뮤테이션
  const addNetworkMutation = useMutation({
    mutationFn: async () => {
      await addKaiaTestnet();
    },
    onSuccess: () => {
      alert("카이아 테스트넷이 추가되었습니다!");
    },
    onError: (error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Network addition failed: ", error);
      alert("네트워크 추가에 실패했습니다: " + errorMessage);
    },
  });

  // ConnectionStore 타입에 맞는 액션 함수들
  const connectWallet = async (): Promise<void> => {
    connectWalletMutation.mutate();
  };

  const addKaiaTestnetAction = async (): Promise<void> => {
    addNetworkMutation.mutate();
  };

  const disconnect = (): void => {
    queryClient.setQueryData(["wallet"], {
      isConnected: false,
      account: null,
      balance: "0",
      network: null,
      web3: null,
      walletType: null,
    });
  };

  return {
    // 상태
    isConnected: walletQuery.data?.isConnected || false,
    account: walletQuery.data?.account || null,
    balance: walletQuery.data?.balance || "0",
    network: walletQuery.data?.network || null,
    web3: walletQuery.data?.web3 || null,
    walletType: walletQuery.data?.walletType || null,

    // 로딩 상태 (React Query에서 관리)
    isConnecting: connectWalletMutation.isPending,
    isAddingNetwork: addNetworkMutation.isPending,

    // 액션
    connectWallet,
    addKaiaTestnet: addKaiaTestnetAction,
    disconnect,
  };
};

import { create } from "zustand";
import type { ConnectionStore } from "../types/connection_store";
import { detectWallet } from "../utils/web3/detect_wallet";
import { requestAccounts } from "../utils/web3/request_accounts";
import { getBalance } from "../utils/web3/get_balance";
import { getNetwork } from "../utils/web3/get_network";
import { addKaiaTestnet } from "../utils/web3/add_network";
import { useErrorStore } from "./error";

export const useConnectionStore = create<ConnectionStore>((set) => ({
  isConnected: false,
  account: null,
  balance: "0",
  network: null,
  web3: null,
  walletType: null,
  isConnecting: false,
  isAddingNetwork: false,

  connectWallet: async (): Promise<void> => {
    set({ isConnecting: true });
    const { setError, clearError } = useErrorStore.getState();

    try {
      const { provider, walletType } = detectWallet();
      const accounts = await requestAccounts(provider, walletType);
      const account = accounts[0];

      const balance = await getBalance(provider, account);
      const network = await getNetwork(provider);

      set({
        isConnected: true,
        account,
        balance,
        network,
        web3: provider,
        walletType,
        isConnecting: false,
      });
      clearError();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Wallet connection failed: ", error);
      set({ isConnecting: false });
      setError(errorMessage);
      alert(errorMessage);
    }
  },

  addKaiaTestnet: async (): Promise<void> => {
    set({ isAddingNetwork: true });
    const { setError } = useErrorStore.getState();

    try {
      await addKaiaTestnet();
      set({ isAddingNetwork: false });
      alert("카이아 테스트넷이 추가되었습니다!");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Network addition failed: ", error);
      set({ isAddingNetwork: false });
      setError(errorMessage);
      alert("네트워크 추가에 실패했습니다: " + errorMessage);
    }
  },

  disconnect: (): void => {
    set({
      isConnected: false,
      account: null,
      balance: "0",
      network: null,
      web3: null,
      walletType: null,
    });
    useErrorStore.getState().clearError();
  },
}));
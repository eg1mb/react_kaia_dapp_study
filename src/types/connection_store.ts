export interface ConnectionStore {
  // Connection State
  isConnected: boolean;
  account: string | null;
  balance: string;
  network: string | null;
  web3: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  walletType: string | null;

  // Loading States
  isConnecting: boolean;
  isAddingNetwork: boolean;

  // Actions
  connectWallet: () => Promise<void>;
  addKaiaTestnet: () => Promise<void>;
  disconnect: () => void;
}
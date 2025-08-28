/*eslint-disable @typescript-eslint/no-explicit-any*/

declare global {
  interface Window {
    klaytn?: {
      enable: () => Promise<string[]>;
      getBalance: (account: string) => Promise<string>;
      getNetworkId: () => Promise<number>;
      sendTransaction: (params: {
        from: string;
        to: string;
        value: string;
        gas: number;
      }) => Promise<string>;
      // 추후 타입이 확정되면 변경
      getTransactionReceipt: (hash: string) => Promise<any>;
      request: (params: { method: string; params?: any[] }) => Promise<any>;
    };
    ethereum?: {
      request: (params: { method: string; params?: any[] }) => Promise<any>;
    };
  }
}

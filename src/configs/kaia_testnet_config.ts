import type { KaiaNetworkConfig } from "../types/kaia_network_config";

export const KAIA_TESTNET_CONFIG: KaiaNetworkConfig = {
  chainId: "0x3e9",
  chainName: "Kairos Testnet",
  rpcUrls: ["https://public-en-kairos.node.kaia.io"],
  nativeCurrency: {
    name: "KAIA",
    symbol: "KAIA",
    decimals: 18,
  },
  blockExplorerUrls: ["https://kairos.kaiascope.com/"],
};

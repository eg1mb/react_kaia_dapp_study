import { kairos } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import type { AppKitNetwork } from "@reown/appkit/networks";
import { injected } from "@wagmi/connectors";

const projectId = import.meta.env.VITE_PROJECT_ID;

export const networks = [kairos] as [AppKitNetwork, ...AppKitNetwork[]];

const kaikasConnector = injected({
  target: {
    id: "kaikas",
    name: "Kaikas",
    //eslint-disable-next-line
    provider: (window as any).klaytn,
  },
});

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  connectors: [kaikasConnector],
});

export const config = wagmiAdapter.wagmiConfig;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { config, networks, wagmiAdapter } from "./configs/wagmi_config";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId: import.meta.env.VITE_PROJECT_ID,
  features: {
    analytics: false,
    allWallets: true,
  }
});

createRoot(document.getElementById("root")!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StrictMode>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </WagmiProvider>
);

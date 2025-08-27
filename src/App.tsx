import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/pages/home";
import ConnetWallet from "./components/pages/connect_wallet";
import Billing from "./components/pages/billing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/connectWallet" element={<ConnetWallet />}></Route>
        <Route path="/billing/:type" element={<Billing />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

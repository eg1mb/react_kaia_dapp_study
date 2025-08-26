import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/pages/connect_wallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

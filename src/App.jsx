import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav";
import Transactions from "./components/transactions";
import Conversions from "./components/conversions";
import Analytics from "./components/analytics";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/tahlil" element={<Analytics />} />
        <Route path="/conversions" element={<Conversions />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  );
}

export default App;

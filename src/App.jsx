import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
// import Transactions from "./components/Transactions";
import Conversions from "./components/conversions";
import Analytics from "./components/analytics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Analytics />} />
          <Route path="tahlil" element={<Analytics />} />
          <Route path="conversions" element={<Conversions />} />
          {/* <Route path="transactions" element={<Transactions />} /> */}
        </Route>
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import FlightTable from "./components/FlightTable";
import FlightDetail from "./pages/FlightDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlightTable />} />
      <Route path="/flight/:id" element={<FlightDetail />} />
    </Routes>
  );
}

export default App;

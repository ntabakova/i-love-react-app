import { Routes, Route } from "react-router-dom";
import "./App.css";
import ListPage from "./pages/ListPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/list/:id" element={<ItemPage />} />
    </Routes>
  );
}

export default App;

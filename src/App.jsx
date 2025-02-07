
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  )
}

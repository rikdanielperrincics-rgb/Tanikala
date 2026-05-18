import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/SignIn";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUpTemp from "../TempPagesForFunctionality/SignUpTemp";
import LoginTemp from "../TempPagesForFunctionality/LoginTemp";
import Profile from "../pages/Profile";
import About from "../pages/About";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/SignUpTemp" element={<SignUpTemp />} />
        <Route path="/LoginTemp" element={<LoginTemp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

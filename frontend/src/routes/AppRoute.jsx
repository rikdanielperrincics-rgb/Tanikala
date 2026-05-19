import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/SignIn";
import App from "../App";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Community from "../pages/Community";
import Contacts from "../pages/Contacts";
import Resources from "../pages/Resources";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

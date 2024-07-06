import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home"
import Schedule from "./components/schedule"
import ManageEmployee from "./components/employee"
import AboutUs from "./components/aboutUs"
import ContactUs from "./components/contactUs"
import Team from "./components/team"

function App() {
  const user = localStorage.getItem("token")
  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/schedule" exact element={<Schedule />} />
      <Route path="/manageEmployee" exact element={<ManageEmployee />} />
      <Route path="/aboutUs" exact element={<AboutUs />} />
      <Route path="/contactUs" exact element={<ContactUs />} />
      <Route path="/team" exact element={<Team />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;

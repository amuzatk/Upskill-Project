import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Categories from "./components/pages/Categories/Categories";
import SignUp from "./components/pages/SignUp/SignUp";
import LogIn from "./components/pages/LogIn/LogIn";
import Awards from "./components/pages/Awards/Awards";
import Donations from "./components/pages/Donations/Donations";
import FutureEditions from "./components/pages/FutureEditions/FutureEditions";
import PastEditions from "./components/pages/PastEditions/PastEditions";
import About from "./components/pages/AboutUs/About";
import ErrorPage from "./components/ErrorPage";
import Timer from "./components/Timer/Timer";
import VotingCate from "./components/pages/VotingCat/VotingCate";

function App() {
  return (
    <Router>
      <Timer />
      <NavBar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/about" element={<About />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/future-editions" element={<FutureEditions />} />
        <Route path="/past-editions" element={<PastEditions />} />
        <Route path="/voting-cat" element={<VotingCate />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

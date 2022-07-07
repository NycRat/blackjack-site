import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
import PlayPage from "./PlayPage";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="*" element={<h1>404 Page not found.</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

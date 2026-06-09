import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import MyGamesPage from "./pages/MyGamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import NavbarMeny from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import AllGamesPage from "./pages/AllGamesPage";

function App() {

  return (
    <>
    <NavbarMeny />
      <div className="app-wrapper">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/library" element={<AllGamesPage />} />
      <Route path="/my-games" element={<MyGamesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/game/:id" element={<GameDetailsPage />} />
    </Routes>
    </div>
    </>
  );
}

export default App;

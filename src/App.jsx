import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//import FilterSeason from "./components/FilterSeason";
import CharacterCard from "./components/CharacterCard";
import CreateCharacterPage from "./pages/CreateCharacterPage";
import SeasonDetailPage from "./pages/SeasonDetailPage";
import SeasonListPage from "./pages/SeasonListPage";
import PrisonListPage from "./pages/PrisonListPage";
import Navbar from "./components/Navbar";
//import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Searchbar from "./components/Searchbar";
import CharacterListPage from "./pages/CharacterListPage";
import EditCharacterPage from "./pages/EditCharacterPage";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import { useState } from "react";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import ActorCard from "./components/ActorCard";
import ActorListPage from "./pages/ActorListPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App min-h-screen bg-neutral-950 text-white flex flex-col">
      {/*<Sidebar/>*/}
      <BrowserRouter>
        <Navbar />
        <main className="flex-row">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMePage />} />
            <Route path="/characters" element={<CharacterListPage />} />
            <Route path="/actors" element={<ActorListPage />} />
            <Route
              path="/characters/:characterId"
              element={<CharacterDetailPage />}
            />
            <Route
              path="/characters/:characterId/edit"
              element={<EditCharacterPage />}
            />
            <Route
              path="/characters/create"
              element={<CreateCharacterPage />}
            />
            <Route path="/prisons" element={<PrisonListPage />} />
            <Route path="/seasons" element={<SeasonListPage />} />
            <Route path="/seasons/:seasonId" element={<SeasonDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

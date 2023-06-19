import { Sidebar } from "./components/";
import { AppPage, DashboardPage, CatalogsPage, InstitutionPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/applications" element={<AppPage />} />
        <Route path="/catalogs" element={<CatalogsPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
      </Routes>
    </div>
  );
}

export default App;
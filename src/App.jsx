import { Sidebar } from "./components/";
import {
  AppPage,
  DashboardPage,
  CatalogsPage,
  InstitutionPage,
  AddCatalogPage,
  AddInstPage,
  PostsPage,
  AddPostPage,
} from "./pages";
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
        <Route path="/add-catalog" element={<AddCatalogPage />} />
        <Route path="/add-inst" element={<AddInstPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/add-post" element={<AddPostPage />} />
      </Routes>
    </div>
  );
}

export default App;

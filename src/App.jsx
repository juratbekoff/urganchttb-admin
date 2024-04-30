import {Sidebar} from "./components/";
import {
  AddCatalogPage,
  AddDocument,
  AddInstPage,
  AddLeaderPage,
  AddPostPage,
  AppPage,
  CatalogsPage,
  DashboardPage,
  InstitutionPage,
  LeadershipPage,
  OpenDocuments,
  PostsPage,
} from "./pages";
import {Route, Routes} from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/applications" element={<AppPage/>}/>
                <Route path="/catalogs" element={<CatalogsPage/>}/>
                <Route path="/institutions" element={<InstitutionPage/>}/>
                <Route path="/add-catalog" element={<AddCatalogPage/>}/>
                <Route path="/add-inst" element={<AddInstPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/add-post" element={<AddPostPage/>}/>
                <Route path="/leadership" element={<LeadershipPage/>}/>
                <Route path="/add-leader" element={<AddLeaderPage/>}/>
                <Route path="/open-documents" element={<OpenDocuments/>}/>
                <Route path="/add-document" element={<AddDocument/>}/>
            </Routes>
        </div>
    );
}

export default App;

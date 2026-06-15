import { Routes, Route } from "react-router-dom";
import { Header } from "./components/CustomHeader";
import { CustomFooter } from "./components/CustomFooter";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/Login";
import { Favorites } from "./pages/Favorites";
import { NotFound } from "./pages/NotFound";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const { theme } = useGlobalContext();

  return (
    <div className={`app-container theme-${theme}`}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pelicula/:id" element={<Detail />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CustomFooter />
    </div>
  );
}

export default App;

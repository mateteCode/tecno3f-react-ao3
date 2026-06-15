import { Routes, Route } from "react-router-dom";
import { CustomHeader } from "./components/CustomHeader";
import { CustomFooter } from "./components/CustomFooter";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Login } from "./pages/Login";
import { Favorites } from "./pages/Favorites";
import { Detail } from "./pages/Detail";
import { NotFound } from "./pages/NotFound";
import { useGlobalContext } from "./hooks/useGlobalContext";

function App() {
  const { theme } = useGlobalContext();

  return (
    <div className={`app-container theme-${theme}`}>
      <CustomHeader />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Movies />} />{" "}
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

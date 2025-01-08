import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import CenterCards from "./components/CenterCards/CenterCards";
import CardDetails from "./components/CardDetails/CardDetails"; // Компонент для страницы детальной карточки
import Spinner from "./components/Spinner/Spinner"; // ожидание загрузки
import SwitchingPages from "./components/SwitchingPages/SwitchingPages";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Исправили на setIsLoading

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Исправили на setIsLoading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          <Header />
          <Search />

          <BrowserRouter>
            <Routes>
              <Route path="/catalog-photos/" element={<CenterCards />} />
              <Route path="/cards/:id" element={<CardDetails />} />
            </Routes>
          </BrowserRouter>
          <SwitchingPages />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

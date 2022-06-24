import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Detail } from "./components/pages/detail/Detail";
import { Home } from "./components/pages/home/Home";
import { NotFound } from "./components/pages/NotFound";
import { Search } from "./components/pages/search/Search";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

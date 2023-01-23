import { BrowserRouter as Router ,Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CoinDetails from "./components/CoinDetails";
import Coin from "./components/Coin";
import Exchanges from "./components/Exchanges";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coin />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;

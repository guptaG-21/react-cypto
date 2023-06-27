import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CoinDetail from "./components/CoinDetail";
import Exchange from "./components/Exchanges";
import Coins from "./components/Coins";
import Footer from "./components/Footer";
function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/exchanges' element={<Exchange />} />
          <Route path='/coins/:id' element={<CoinDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

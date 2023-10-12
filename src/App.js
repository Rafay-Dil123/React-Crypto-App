import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetail from "./components/CoinDetail";
import  Exchanges from "./components/Exchanges";

function App() {
  return <Router>
    < Header/>

    <Routes>
      

    <Route path="/" element={<Home/>}  />
    <Route path="/coins" element={<Coins/>}  />
    <Route path="/coindetail/:id" element={<CoinDetail/>}  />
    <Route path="/exchanges" element={<Exchanges/>}  />


    </Routes>
  </Router>
}

export default App;

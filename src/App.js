import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Coindetails from "./components/Coindetails";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/coins" element={<Coins/>}></Route>
          <Route path="/exchanges" element={<Exchanges/>}></Route>
          <Route path="/coin/:id" element={<Coindetails/>}></Route>
        </Routes>
        <Footer></Footer>
    </Router>
  );
}

export default App;

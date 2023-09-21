import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import HelpForBuyers from "./components/HelpForBuyers";
import Addresses from "./components/Addresses";
import Cart from "./components/Cart";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/help" element={<HelpForBuyers />} />
                <Route path="/addresses" element={<Addresses />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;

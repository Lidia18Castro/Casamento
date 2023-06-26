import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Lista from "./components/Lista";
import Compra from "./Pages/Compra";

export default function AppRouter() {
    return (

        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Lista />} />
                <Route path="/item/:id" element={<Compra/>}/>
            </Routes>
        </Router>
    )
}
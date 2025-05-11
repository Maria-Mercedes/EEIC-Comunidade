import { BrowserRouter, Routes, Route } from "react-router-dom";
import LangingPage from "./pages/landingpage";

export default function Nav() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LangingPage/>} />
            </Routes>
        </BrowserRouter>

    );
}
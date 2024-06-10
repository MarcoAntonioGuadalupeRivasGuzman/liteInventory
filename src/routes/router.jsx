import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";

export function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
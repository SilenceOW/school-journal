import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "../components/Auth/SignUp";
import Login from "../components/Auth/Login"

const Auth = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Auth;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/login";
import { Dashboard } from "./components/dashboard/dashboard";
import "./components/dashboard/dashboard.css"
import { Signup } from "./components/signup/signup";
import { Mainpage } from "./components/mainpage/mainpage";
import { useCookies } from "react-cookie";
import { Forgotpassword } from "./components/forgotpassword/forgotpassword";
import { Resetpassword } from "./components/forgotpassword/recetpassword";
export function Routing() {
    const [cookies, setcookie, removecookie] = useCookies();
    return (
        <>
            <div className="dashboard-bg">

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard />}></Route>
                        <Route path="/loginpage" element={<Login />}></Route>
                        <Route path="/reset-password/:token" element={<Resetpassword />}></Route>
                        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
                        <Route path="/signuppage" element={<Signup />}></Route>
                        <Route path="/mainpage" element={cookies.authtoken ? <Mainpage /> : <Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}
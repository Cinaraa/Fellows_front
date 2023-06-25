import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import About from '../navbarItems/About'
import Login from '../user/Login'
import Register from '../user/Register'
import Principal from '../vistas/Principal'
import Game from '../game/Game'
import Instructions from '../navbarItems/Instructions'
import AdminCheck from '../protected/AdminCheck'
import UserCheck from '../protected/UserCheck'


function Routing(){
    return (
        <BrowserRouter>
            <Routes>
            <Route path={"/"} element={<App />}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/principal"} element={<Principal/>}></Route>
            <Route path={"/game"} element={<Game/>}></Route>
            <Route path={"/instructions"} element={<Instructions/>}></Route>
            <Route path={"/admincheck"} element={<AdminCheck />}/>
            <Route path={"/usercheck"} element={<UserCheck />}/>
            </Routes>
      </BrowserRouter>

    )
}
export default Routing

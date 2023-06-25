import './Principal.css'
import NavBar from '../common/navbar';
import Logo from '../assets/imgs/Logo.png'

//import { SessionContext } from './user/usercontext';
function Principal() {
  return (
    <>
    <NavBar/>
    <img src={Logo} className='logo-landing-page'/>
    <div className="home-container">
          <div className='buttons'>
          <a href='/game'>Jugar!!</a>
          <a href='/closeSesion'>Cerrar Sesión :C </a>

          </div>
    </div>
    </>
  );
}

export default Principal

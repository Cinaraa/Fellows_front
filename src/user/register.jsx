import { useState } from 'react';
import NavBar from '../common/navbar';
import './Form.css';
import axios from 'axios';

function Register() {

  const [name, setUsername] = useState("");
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //axios.post(`${import.meta.env.BACKEND_URL}/signup`, {
    axios.post("http://localhost:3000/signup",{    
    name: name,
        mail: mail,
        password: password
      }).then((/*response*/) => {
        console.log('Registro exitoso! Ahora puedes volver y loguearte');
        setError(false);
        setMsg('Registro exitoso! Ahora puedes volver y loguearte');
      }).catch((error) => {      
      console.error('Ocurrió un error:', error.message);
      setError(true); // aquí puede haber más lógica para tratar los errores
      });
    }
  
  return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}

        {error && <div className="error">{error.message} Hubo un error con el Registro, por favor trata nuevamente.</div>}
        <div className='form-user-sesion'>
            <br></br>
            <h1 className='title-user-form-sesion'>Sign Up </h1>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-labels'>Enter your username:
                        <input type="text" className='input-user-sesion' value={name} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label className='form-labels'>Enter your email:
                        <input type="email" className='input-user-sesion' value={mail} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <br></br>
                <div>
                <label className='form-labels'> Enter your password:
                    <input type="password" className='input-user-sesion' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                </div>
                <input type="submit" value="Enviar" className='btn-form-user-sesion'/>
            </form>
        </div>
    </div>
  );
}

export default Register;
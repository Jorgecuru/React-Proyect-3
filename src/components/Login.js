import axios from 'axios'
import alerta from '@sweetalert/with-react';
import {useNavigate} from 'react-router-dom'
import '../Css/login.css'

const Login = () => {

    const navigate = useNavigate();



    const submitHandler = e =>{
        e.preventDefault();
        //console.log('Formulario Enviado');
        const email = e.target.email.value
        const password = e.target.password.value
        //console.log(email,password);
       
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
 

        if(email === '' || password === ''){
            alerta(
                <h2>
                    COMPLETA LOS CAMPOS
                </h2>
            )
        }

        if(email !== '' && !regexEmail.test(email)){
            alerta(
                <h2>
                    INTRODUCE CAMPOS VALIDOS
                </h2>
            )
        };

        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            alerta(
                <h2>
                    CREDENCIALES INVALIDAS
                </h2>
            )
        };

        if( email == 'challenge@alkemy.org' & password == 'react'){
            alerta(
                <h2>
                    CORRECTO!!
                </h2>
            )
        }

        
            //console.log('listos');

            axios 
             .post('http://challenge-react.alkemy.org', {email, password}  )
             .then(res => {
                
                const tokenRecibido = res.data.token
                localStorage.setItem('token', tokenRecibido)
                navigate('/listado');
                
               
                 //console.log(res.data);
            })

    }

    return (
        <>
        <h2>Formulario de Ingreso</h2>
        <br/>
        <form onSubmit ={submitHandler} className="form">

            <input type = "text" name="email"  /> 
            <input type = "password" name="password"  />
            <button type = "submit"> Ingresar</button>  
        </form>
    </>
    )

}

export default Login;
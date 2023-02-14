import alerta from '@sweetalert/with-react';
import {useNavigate} from 'react-router-dom'

const Buscador = () => {
    const resulNav = useNavigate()

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim(); 
        //console.log(keyword);


        if(keyword.length < 3){
             alerta(<h2> Escribe un personaje valido</h2>)
        }else{
            e.currentTarget.keyword.value = ''
            resulNav (`/resultados?personaje=${keyword}`)
        }

       
    }

    return(
       
        <form onSubmit={submitHandler} >
            <label className="form-label mb-0 mx-2 d-flex align-items-centre " >
                <input className="form-control" type = "text" name="keyword" placeholder="Buscar"  /> 
            </label>
            <button className="btn btn-success" type = "submit"> Buscar</button>

        </form>
       
       
    )
};


export default Buscador

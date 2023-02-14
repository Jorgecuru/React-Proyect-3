import { useEffect, useState } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import alerta from '@sweetalert/with-react';


const Resultados = () => { 

    let query = new URLSearchParams(window.location.search);
    let personajeKey = query.get('personaje');

    const [resultados, setResultados] = useState([])


    useEffect(() =>{
        const endPoint = `https://rickandmortyapi.com/api/character/?name=${personajeKey}`
        axios.get(endPoint)
        .then(response =>{
            const personajeArray = response.data.results;
            if(personajeArray.lenght < 3){
                alerta(<h2> ingrese un personaje valido</h2>)
            }

            setResultados(personajeArray);;
        })
        .catch (error => {
            alerta(<h2> Hubo errores, intente nuevamente mas tarde</h2>)

           console.log('ERROR');
        })

    },[personajeKey]);

   
  
        return(
        <>
            <h2> Resultados de tu busqueda : {personajeKey}</h2>
          

            <div className='row'>  
            {
                resultados.map((unRick, idx) => {

                    return(
                        
                        <div className='col-4' key ={idx}>
             
                            <div className="card" >
                                
                                
                                    <img src={unRick.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{unRick.name}</h5>
                                    
                                    <Link to={`/detalle?personajeID=${unRick.id}`} className="btn btn-primary"> Character Info </Link>
                                    
                                   
                                </div>
                            </div>

                        </div>
                    )
                     
                     
                   
                }) 
                    
                
            }
           
        </div>

        
        </>
    
       

        )
}


export default Resultados
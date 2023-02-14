import {useNavigate,Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import alerta from '@sweetalert/with-react';

const Listado = (props) => {

    const navigate = useNavigate();
    let token = null

    console.log(props);

    const [rickList, setRickList] = useState([]);
    
    

    useEffect(() =>{
        token = localStorage.getItem('token')
         
         if(token === null){
        navigate('/')
    }
    }, []); 

    useEffect(() =>{
        const rickEndPoint = 'https://rickandmortyapi.com/api/character'
        axios.get(rickEndPoint)
        .then(response =>{
            const apiData = response.data;
            setRickList(apiData.results);
        })
        .catch (error => {
            alerta(<h2> Hubo errores, intente nuevamente mas tarde</h2> )
               

        })
            

    },[setRickList])

   
   
    

    return (
        
        <div className='row'>  
            {
                rickList.map((unRick, idx) => {

                    return(
                        
                        <div className='col-3' key ={idx}>
             
                            <div className="card" >
                                
                                
                                   
                                <div className="card-body">
                                     <img src={unRick.image} className="card-img-top" alt="..."/>
                                    <h5 className="card-title">{unRick.name}</h5>
                                    <button className = "favourite-btn"
                                            onClick={props.addOrRemoveFavs}
                                            data-personaje ={ unRick.id }
                                       
                                     >🖤 </button>
                                    
                                    
                                    <Link to={`/detalle?personajeID=${unRick.id}`} className="btn btn-primary"> Character Info </Link>
                                </div>
                            </div>

                        </div>
                    )
                     
                     
                   
                }) 
                    
                
            }
           
        </div>
             
               
        
       
    )
}

export default Listado
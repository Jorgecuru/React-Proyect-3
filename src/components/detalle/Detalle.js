import { useEffect, useState } from 'react';
import axios from 'axios'


const Detalle = () => {

   
    let query = new URLSearchParams(window.location.search);
    let personajeId = query.get('personajeID')
    console.log(personajeId);

    const [detalle, setDetalle] = useState (null);
   
   
   
   
    useEffect(() =>{
        const endPoint = `https://rickandmortyapi.com/api/character/${personajeId}`
        console.log(endPoint);
        axios.get(endPoint)
        .then(response =>{
            const detailData = response.data;
            setDetalle (detailData);;
        })
        .catch (error => {
           //console.log('ERROR');
               

        }) 



    },[personajeId])


   

    return(
    <>

        {!detalle && <p>Cargando...</p>}
        { detalle &&

             <>

         
                    <h2>
                        Detalle
                    </h2>

                

                    <div className='row'> 

                        <div className='col-4'>
                    
                        <img src={detalle.image} className="card-img-top img-fluid" alt="Imagen Personaje"/>

                        </div>

                        <div className='col-4'>
                            
                           <h2>
                                <ul>
                                <p className="card-text">{detalle.status}</p>
                                    <li >Nombre:{detalle.name} </li>
                                    <li>Episodios que aparece: {detalle.episode} </li>
                                    <li>Gender: {detalle.gender} </li>
                                    <li>Location: {detalle.location.name} </li>

                                </ul>

                            </h2>  

                        </div>

                    </div>



            </>
        }
       
    </> 
      
        


    )
}

export default Detalle
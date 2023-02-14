import { useState, useEffect } from "react"


const Favoritos = (props) => {

    /* const [ favorites, setFavorites] = useState([])

    useEffect (() =>{
        const favsLocal = localStorage.getItem('favs')
         

       if(favsLocal !== null){
        const favsInArray = JSON.parse(favsLocal)
        console.log(favsInArray);
        setFavorites(favsInArray)
       } 
    },[]) */
    
    return (
        <>
        <h2>
            Seccion de favoritos
        </h2>

        <div className='row'>  
            {
               props.favorites.map((unRick, idx) => {

                    return(
                        
                        <div className='col-3' key ={idx}>
             
                            <div className="card" >
                                
                                
                                   
                                <div className="card-body">
                                     <img src={unRick.imgURL} className="card-img-top" alt="..."/>
                                    <h5 className="card-title">{unRick.title}</h5>
                                    <button className = "favourite-btn"
                                            onClick={props.addOrRemoveFavs}
                                            data-personaje ={ unRick.id }
                                       
                                     >🖤 </button>
                                    
                                    
                                    {/* <Link to={`/detalle?personajeID=${unRick.id}`} className="btn btn-primary"> Character Info </Link> */}
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


export default Favoritos
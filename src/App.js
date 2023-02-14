import Login from './components/Login'
import {Routes, Route} from 'react-router-dom'
import Listado from './components/listado/Listado';
import Detalle from './components/detalle/Detalle';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Resultados from './components/resultados/Resultados';
import Favoritos from './components/favoritos/Favoritos';
import { useState, useEffect } from "react"
import './Css/bootstrap.min.css'
import './Css/App.css'




function App() {


  const [ favorites, setFavorites] = useState([])

    useEffect (() =>{
        const favsLocal = localStorage.getItem('favs')
         

       if(favsLocal !== null){
        const favsInArray = JSON.parse(favsLocal)
        
        setFavorites(favsInArray)
       } 
    },[])
  

 // console.log(tempFavPersonajes);

    const addOrRemoveFavs = e => {



      const favPersonajes = localStorage.getItem('favs')

  let tempFavPersonajes;

  if (favPersonajes === null){
    tempFavPersonajes = []

  } else {
    tempFavPersonajes = JSON.parse(favPersonajes)
  }

      const btn = e.currentTarget;
      const parent = btn.parentElement;
      const imgURL = parent.querySelector ('img').getAttribute('src')
      const title = parent.querySelector ('h5').innerText;
      //console.log(btn.dataset);

     //armo un objeto  
      const favs = {
        imgURL, title,
        id: btn.dataset.personaje
      }

      let personajeEnArray = tempFavPersonajes.find(unRick => {
        return unRick.id === favs.id
      });

      if (!personajeEnArray) {
        tempFavPersonajes.push(favs)
      localStorage.setItem('favs', JSON.stringify(tempFavPersonajes))
      setFavorites(tempFavPersonajes)
      console.log('se agrego el personaje');
      } else{
        let personajeEliminado = tempFavPersonajes.filter (unRick =>{
          return unRick.id !== favs.id
        })
        localStorage.setItem('favs', JSON.stringify(personajeEliminado))
        setFavorites(personajeEliminado)
        
        console.log('eliminado');
      }

      

      
      


      
    }


  return (

    <>

      <Header favorites ={favorites} />

      <div className='container-fluid'>
        <Routes>
          <Route path="/" element ={<Login />}/>
          <Route path="/listado" element = {<Listado addOrRemoveFavs={addOrRemoveFavs}/>}/>
          <Route path="/detalle"element ={<Detalle/>}/>
          <Route path="/resultados"element ={<Resultados/>}/>
          <Route path="/favoritos"element ={<Favoritos favorites ={favorites}  addOrRemoveFavs={addOrRemoveFavs}/>}/>
        </Routes>
      </div>
     

      <Footer />
      
    
    
    
    </>


   



  );
}

export default App;

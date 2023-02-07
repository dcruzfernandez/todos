import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './App.css';

const ObtenerTareasUsuario=async(id)=>{
    try {
      const url=`https://jsonplaceholder.typicode.com/todos?userId=${id}`;
      const response=await fetch(url);
      const data=await response.json();
      console.log(id);
      console.log(data);
      return data;
    } catch (error) {
      return [];
    }
    
  }
export const TareasUsuario = () => {
  const [tareas, setTareas] = useState([]);
  
  const {id,name} = useParams(); 
  useEffect(()=>{
    ObtenerTareasUsuario(id)
          .then(todos=>{
            setTareas(todos); 
          });
      
  },[id]);
  
  
  return (
    <>
      <h1>Tareas del usuario:</h1>
      <h2>{id} - {name}</h2>
      {tareas.length>0
        ?
          (tareas.map((item,i)=>(
            <div className={`card ${item.completed?'completada':'pendiente'}`} key={i}>
                <div className="card-body">
                    <h5 className="card-title">Id: {item.id} - Detalle: {item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Estado: {item.completed?'Terminada':'Pendiente'}</h6>
                </div>
            </div>
          )))
        :
         (<h1>No hay tareas para el usuario seleccionado</h1>)  
      }
    </>
  )
}

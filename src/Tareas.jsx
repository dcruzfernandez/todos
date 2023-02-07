import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Tarea } from './Tarea';


const ObtenerDatos=async(estado)=>{
    try {
      const url=`https://jsonplaceholder.typicode.com/todos?completed=${estado}`;

      const {data}= await axios.get(url);
   
      const urlU=`https://jsonplaceholder.typicode.com/users`;
      const responseU=await fetch(urlU);
      const dataU=await responseU.json();

      const datos=data.map((todo)=>{
        const usuario=dataU.find((user)=>todo.userId===user.id);
        return {...todo,name:usuario.name}
      });
      
      //console.log(datos);
      return datos;
    } catch (error) {
      return [];
    }
    
  }

export const Tareas = ({completada}) => {
  
  const [datos, setDatos] = useState([]);

  useEffect(()=>{
    ObtenerDatos(completada)
          .then(todos=>{
            setDatos(todos); 
          });
      
  },[completada]);
  
  
  return (
    <>
      <h1>{completada?'Tareas Completas':'Tareas Pendientes'}</h1>
      {datos.length>0
        ?
          (datos.map(item=>(
            <Tarea key={item.id} title={item.title} name={item.name} userId={item.userId}/>
          )))
        :
         (<h1>No hay tareas en la categoría seleccionada</h1>)  
      }
    </>
  )
}


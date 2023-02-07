import React from 'react'
import { NavLink } from 'react-router-dom';


export const Tarea = ({title,name,userId}) => {
  return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
            <NavLink to={`/tareasUsuario/${userId}/${name}`} className="card-link">Ver más tareas del usuario</NavLink>
          
        </div>
    </div>
  )
}

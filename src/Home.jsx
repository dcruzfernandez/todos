import React from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <h1>Aplicación de consulta de tareas</h1>
        <hr />
        <h2>Tipos de tareas</h2>
        <ul >
            <li>
                <NavLink to='/pendientes'>Tareas Pendientes</NavLink>
            </li>
            <li>
                <NavLink to='/completadas'>Tareas Completadas</NavLink>
            </li>
                
        </ul>
    </>
  )
}

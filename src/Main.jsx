import React from 'react';
import { NavBar } from './NavBar';
import { Routes, Route, Navigate} from 'react-router-dom';
import { Tareas } from './Tareas';
import { Home } from './Home';
import { TareasUsuario } from './TareasUsuario';


export const Main = () => {
  return (
    <>
        
        <NavBar/>
        <hr />

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pendientes' element={<Tareas completada={false}/>}/>
            <Route path='/completadas' element={<Tareas completada={true}/>}/>
            <Route path='/tareasUsuario/:id/:name' element={<TareasUsuario/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    </>
  )
}

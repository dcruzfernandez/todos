import { NavLink } from 'react-router-dom';


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Tareas</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/pendientes' className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}>Tareas Pendientes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/completadas' className={({isActive})=>`nav-link ${isActive ? 'active' : ''}`}>Tareas Completadas</NavLink>
                    
                    </li>
                
                </ul>
            </div>
        </div>
    </nav>
   
  )
}

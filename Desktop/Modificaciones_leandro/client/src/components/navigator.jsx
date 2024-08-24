import { Link } from "react-router-dom"
import './Navigator.css';

export function Navigator() {
  return (
    <div className="sidebar">
        <div>
                <h1 className="text-center">Sentirse Bien</h1>
        </div>
        <div className="content-section">
            <h3>Elementos</h3>
            <p className='text-muted'>Poner más información acá.</p>
            <ul className="list-group">
                <li className="list-group-item"><Link to="/contact">Contactarse</Link></li>
                <li className="list-group-item"><Link to="/announcements">Anuncios</Link></li>
                <li className="list-group-item"><Link to="/services">Servicios</Link></li>
                <li className="list-group-item"><Link to="/appointments">Turnos</Link></li>
                <li className="list-group-item"><Link to="/questions">Preguntas</Link></li>
                <li className="list-group-item"><Link to="/others">Otros</Link></li>
            </ul>
        </div>
    </div>
   
    
  )
}


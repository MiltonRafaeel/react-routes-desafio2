import { Link, NavLink } from 'react-router-dom';
import iconHome from '../../assets/home.svg';
import './styles.css';

export default function Header() {

    return (
        <header className="header-container">
            <nav className="nav-items ml160">
                <NavLink to="/" end className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                    Inicio
                </NavLink>
                <NavLink to="/products" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                    Produtos
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                    Sobre nos
                </NavLink>
            </nav>
            <div>
                <Link to="/">
                    <div className="iconHome mr160">
                        <img src={iconHome} alt="" />
                    </div>
                </Link>
            </div>
        </header>
    );
}
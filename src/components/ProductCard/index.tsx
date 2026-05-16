import { NavLink } from 'react-router-dom';
import './styles.css';


export default function ProductCard() {

    return (
        <main className="product-card-container">
            <section className="product-card-items mt20">
                <div className="items-products ml20">
                    <NavLink to="computers" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Computadores
                    </NavLink>
                    <NavLink to="eletronics" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Eletronicos
                    </NavLink>
                    <NavLink to="books" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Livros
                    </NavLink>
                </div>
            </section>
        </main>
    );
}
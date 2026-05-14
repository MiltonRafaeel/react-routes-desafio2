import AboutUs from '../../routes/AboutUs';
import Home from '../../routes/Home';
import Products from '../../routes/Products';
import iconHome from "../../assets/home.svg";
import './styles.css';

export default function Header() {

    return (
        <header className="bg-container">
            <nav className="nav-items">
                <Home />
                <Products />
                <AboutUs />
            </nav>
            <div className="home-icon">
                <img src={iconHome} alt="Page initial" />
            </div>
        </header>
    );
}
import "./navbar.css"
import pic from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

const NavbarComp = () => {
    return (
        <div className="navbar">

            <div className="menu">biscuit</div>
            <div className="menu">Pastry</div>

            <Link to="/">
                <img src={pic} alt="" />
            </Link>


            <div className="menu">Pizza</div>

            <Link to="/product">
                <div className="menu">Buy</div>
            </Link>

        </div>
    )
}

export default NavbarComp
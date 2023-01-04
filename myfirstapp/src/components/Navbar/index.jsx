import Logo from "../Logo"
import Menu from "../Menu"
import "./Navbar.css"

const Navbar= () => {
    return (
        <div className="Navbar">
            <Logo/>
            <Menu/>
        </div>
    )
}

export default Navbar;
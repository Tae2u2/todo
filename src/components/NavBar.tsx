import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const handleLogOut= ()=>{
        localStorage.clear();
        navigate("/auth", { replace: true });
    };

  return (
    <nav>
        <ul>
            <li>πππ</li>
            <li><Link to="/">ν  μΌ λͺ©λ‘</Link></li>
            <li onClick={handleLogOut}>λ‘κ·Έμμ</li>
        </ul>
    </nav>
  )
}

export default NavBar;
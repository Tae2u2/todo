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
            <li>🍉🍉🍉</li>
            <li><Link to="/">할 일 목록</Link></li>
            <li onClick={handleLogOut}>로그아웃</li>
        </ul>
    </nav>
  )
}

export default NavBar;
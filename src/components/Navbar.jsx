import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/authContext";

function Navbar({ onCartClick }) {
  const {logout} = useAuth()
  const { cart } = useCart()
  const navigate = useNavigate()

  const handleLogout= () =>{
    logout()
    navigate('/auth')
  }
  return (
    <nav className="flex items-center justify-between px-2 py-2 md:px-8 md:py-4 bg-[#050d1a] border-b border-[#1e3a5f] shadow-md ">
      <h1 className="text-xl font-bold text-[#00d4ff]">LearnMore</h1>
      <div className=" flex items-center gap-3 md:flex md:gap-10 md:items-center">
        <Link to="/" className="text-[#7ab3d4] hover:text-white transition-colors text-sm md:text-base">Inicio </Link>
        <Link to="/contacto" className="text-[#7ab3d4] hover:text-white transition-colors text-sm md:text-base"> Contacto</Link>
        <button onClick={handleLogout} className="text-[#7ab3d4] hover:text-white transition-colors text-sm md:text-base">Cerrar Session</button>
        <button className=" text-[#7ab3d4] hover:text-[#00d4ff] transition-colors hover:active: cursor-pointer"onClick={onCartClick}>🛒{cart.length}</button>
      </div>
    </nav>
  );
}
export default Navbar;

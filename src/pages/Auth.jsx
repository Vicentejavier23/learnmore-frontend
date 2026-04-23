import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setisLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const url = isLogin
      ? `${import.meta.env.VITE_API_URL}/auth/login`
      :`${import.meta.env.VITE_API_URL}/auth/register`;
  
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await res.json();
  
    if (isLogin) {
      if (data.token) {
        login(data.token);
        navigate("/");
      } else {
        alert(data.message || "Credenciales incorrectas") // ← feedback al usuario
      }
    } else {
      if (res.ok) {
        alert("Registro exitoso, ahora inicia sesión")
        setisLogin(true)
      } else {
        alert(data.message || "Error al registrarse")
      }
    }
  }

  return (
    <div className="bg-[#050d1a] h-screen flex justify-center items-center">
      <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl p-8 w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-white">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h2>
        <p className="text-[#7ab3d4] text-center text-sm mb-2">
          {isLogin ? "Bienvenido de vuelta" : "Crea tu cuenta"}
        </p>
        <input
          className="bg-[#0f1f35] border border-[#1e3a5f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
          placeholder="Tu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-[#0f1f35] border border-[#1e3a5f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
          placeholder="Tu password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-[#00d4ff] text-[#050d1a] font-bold py-3 rounded-lg hover:bg-[#00b8d9] hover:scale-105 transition-all"
        >
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </button>
        <button
          onClick={() => setisLogin(!isLogin)}
          className="text-[#7ab3d4] hover:text-[#00d4ff] text-sm transition-colors"
        >
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
        </button>
      </div>
    </div>
  );
}

export default Auth;
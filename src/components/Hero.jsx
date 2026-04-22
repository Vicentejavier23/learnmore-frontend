import React from "react";
import { Link } from "react-router-dom";
function Hero(){
    return(
    <div className="flex items-center justify-center h-screen  bg-[#050d1a]">
        <div className="text-center  px-4">
            <h1 className="text-4xl mb:text-6xl font-bold mb-4 text-white">Aprende sin limites</h1>
            <p className="text-xl mb-8 text-[#7ab3d4] hover:text-white transition-colors">Los mejores cursos online impulsa tu carrera</p>
            <button className="bg-[#00d4ff] text-[#050d1a] font-bold px-6 py-2 rounded-full hover:bg-[#00b8d9] hover:scale-105 transition-all " onClick={()=>{document.getElementById("cursos").scrollIntoView({behavior:"smooth"})}}>Ver Cursos</button>
        </div>
    </div>
    )
}
export default Hero;
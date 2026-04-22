import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const { addToCart } = useCart();
  const listaCourses = courses.map((cursos) => (
    <div
      className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl p-6 text-center hover:border-[#00d4ff] transition-all"
      key={cursos.id}
    >
      <h3 className="text-white font-bold text-lg mb-2">{cursos.title}</h3>
      <p className="text-[#7ab3d4] text-sm mb-1">{cursos.categoria}</p>
      <p className="text-[#00d4ff] font-bold text-xl mb-4">{cursos.price}</p>
      <button
        className="bg-[#00d4ff] text-[#050d1a] font-bold px-6 py-2 rounded-full hover:bg-[#00b8d9] hover:scale-105 transition-all w-full"
        onClick={() => addToCart(cursos)}
      >
        Agregar
      </button>
    </div>
  ));
  return (
    <div
      id="cursos"
      className="px-10 py-16 bg-[#050d1a] "
    >
      <h2 className="text-3xl font-bold text-center mb-10  text-[#00d4ff] hover:text-white transition-colors">Nuestros Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{listaCourses}</div>
    </div>
  );
}
export default Courses;

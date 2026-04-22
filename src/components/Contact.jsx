import { useState } from "react";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    alert(`Nombre: ${nombre} | Email: ${email} | Mensaje: ${mensaje}`);
  };

  return (
    <div className="bg-[#050d1a] h-screen flex justify-center items-center">
      <div className="bg-[#0a1628] border border-[#1e3a5f] rounded-2xl p-8 w-96 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-white">Contáctanos</h2>
        <p className="text-[#7ab3d4] text-center text-sm mb-2">
          Envíanos tu mensaje y te responderemos pronto
        </p>
        <input
          className="bg-[#0f1f35] border border-[#1e3a5f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="bg-[#0f1f35] border border-[#1e3a5f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors"
          placeholder="Tu email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#0f1f35] border border-[#1e3a5f] text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00d4ff] transition-colors resize-none h-32"
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-[#00d4ff] text-[#050d1a] font-bold py-3 rounded-lg hover:bg-[#00b8d9] hover:scale-105 transition-all"
        >
          Enviar mensaje
        </button>
      </div>
    </div>
  );
}

export default Contact;
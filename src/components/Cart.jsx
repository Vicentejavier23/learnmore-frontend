import { useCart } from "../context/CartContext";

function Cart({ onClose }) {
  const { cart, removeFromCart, removeAllCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full md:w-80 z-50 bg-[#0a1628] border-l border-[#1e3a5f] overflow-y-auto p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Tu Carrito</h2>
          <button onClick={onClose} className="text-[#7ab3d4] hover:text-white transition-colors">✕</button>
        </div>

        {cart.length === 0 ? (
          <p className="text-[#7ab3d4] text-center mt-10">No hay cursos en el carrito</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((carta) => (
              <div key={carta.id} className="bg-[#0f1f35] border border-[#1e3a5f] rounded-xl p-4">
                <h3 className="text-white font-bold text-sm">{carta.title}</h3>
                <p className="text-[#00d4ff] font-bold mt-1">${carta.price}</p>
                <button
                  onClick={() => removeFromCart(carta.id)}
                  className="text-red-400 hover:text-red-300 text-xs mt-2"
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="border-t border-[#1e3a5f] pt-4">
              <p className="text-white font-bold text-lg">Total: ${total}</p>
              <button
                onClick={removeAllCart}
                className="w-full mt-3 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white py-2 rounded-lg transition-all"
              >
                Vaciar carrito
              </button>
              <button className="w-full mt-2 bg-[#00d4ff] text-[#050d1a] font-bold py-2 rounded-lg hover:bg-[#00b8d9] transition-all">
                Pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
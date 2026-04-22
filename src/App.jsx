import { useState } from 'react'
import { useAuth } from './context/authContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Cart from './components/Cart'
import Contact from './components/Contact'
import { Route, Routes , Navigate} from 'react-router-dom'
import Auth from './pages/auth'

function PrivateRoute({children}){
  const {token} = useAuth ()
  return token ? children : <Navigate to="/auth"></Navigate>
}
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
          <PrivateRoute>
            <>
              <Navbar onCartClick={() => setIsCartOpen(!isCartOpen)} />
              {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
              <Hero />
              <Courses />
            </>
          </PrivateRoute>
        } />
        <Route path="/contacto" element={
          <PrivateRoute>
            <>
              <Navbar onCartClick={() => setIsCartOpen(!isCartOpen)} />
              <Contact />
            </>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}


export default App
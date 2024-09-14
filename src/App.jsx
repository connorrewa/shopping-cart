import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';

function App() {
    const [cart, setCart] = useState([]);
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div>
            <Navbar cart={cart} setCartIsOpen={setCartIsOpen} />
            <main>
                <Outlet context={[cart, setCart, setCartIsOpen]} />
            </main>
            <Cart
                cartIsOpen={cartIsOpen}
                setCartIsOpen={setCartIsOpen}
                cart={cart}
                setCart={setCart}
            />
        </div>
    );
}

export default App;

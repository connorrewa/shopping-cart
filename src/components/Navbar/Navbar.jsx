import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.css';
import { CardTravel } from '@mui/icons-material';
const Navbar = ({ cart, setCartIsOpen }) => {
    return (
        <div className={styles.container}>
            <Link className={styles.title}>
                <h1>Lima</h1>
            </Link>
            <Link className={styles.link} to='/'>
                Home
            </Link>
            <Link className={styles.link} to='/shop'>
                Shop
            </Link>
            <button onClick={() => setCartIsOpen(true)}>
                {cart.length !== 0 && (
                    <div className={styles.cartCount}>{cart.length}</div>
                )}

                <ShoppingCartIcon></ShoppingCartIcon>
            </button>
        </div>
    );
};

export default Navbar;

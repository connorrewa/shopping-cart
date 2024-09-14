import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.css';
const Navbar = ({ cart, setCartIsOpen }) => {
    console.log(cart);
    return (
        <div className={styles.wrapper}>
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
                <button
                    id={styles.cartButton}
                    onClick={() => setCartIsOpen(true)}
                >
                    <div className={styles.cartCount}>{cart.length}</div>

                    <ShoppingCartIcon></ShoppingCartIcon>
                </button>
            </div>
        </div>
    );
};

export default Navbar;

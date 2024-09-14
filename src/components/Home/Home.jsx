import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const [cart, setCart, setCartIsOpen] = useOutletContext();
    return (
        <div className={style.container}>
            <div className={style.content}>
                <h1 className={style.centerTitle}>Lima</h1>
                <p className={style.description}>
                    The marketplace with the best deals{' '}
                    <span className={style.forYou}>for you</span>
                </p>

                <Link className={style.link} to='/shop'>
                    Shop Now
                </Link>
            </div>
        </div>
    );
};

export default Home;

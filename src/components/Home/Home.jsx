import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='content'>
                    <h2>Lema</h2>
                    <p>
                        The marketplace with the best deals <span>for you</span>
                    </p>
                </div>
                <Link to='/shop'>Shop Now</Link>
            </div>
        </>
    );
};

export default Home;

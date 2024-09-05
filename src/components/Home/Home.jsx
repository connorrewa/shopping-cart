import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Link to='/shop'>Click here to shop</Link>
        </>
    );
};

export default Home;

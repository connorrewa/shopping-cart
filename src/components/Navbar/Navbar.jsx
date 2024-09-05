import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <h1>Lima</h1>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    );
};

export default Navbar;

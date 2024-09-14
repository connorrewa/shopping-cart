import style from './ShopItem.module.css';
const ShopItem = ({ id, title, price, image, setCart, cart }) => {
    function addItemToCart() {
        if (itemAlreadyInCart) {
            let newCart = [...cart];
            const itemIndex = newCart.findIndex((item) => item.id === id);
            const item = newCart[itemIndex];
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: +(item.totalPrice + item.price).toFixed(2),
            };
            setCart(newCart);
            return;
        }
        setCart((cart) => [
            ...cart,
            { id, title, price, image, quantity: 1, totalPrice: price },
        ]);
    }

    const itemAlreadyInCart = cart.find((item) => item.id === id);

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img
                    src={image}
                    alt='product image'
                    className={style.productImage}
                />
            </div>
            <div className={style.titleContainer}>
                <p className={style.black}>{title}</p>
            </div>
            <div className={style.row}>
                <button id={style.add} onClick={() => addItemToCart()}>
                    {itemAlreadyInCart ? 'Added!' : 'Add'}
                </button>
                <h3 className={style.black}>${price}</h3>
            </div>
        </div>
    );
};

export default ShopItem;

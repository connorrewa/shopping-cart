import React, { useState, useEffect } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import style from './Cart.module.css';

const Cart = ({ cart, setCart, cartIsOpen, setCartIsOpen }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const modifyItemAmount = (id, action) => {
        const itemIndex = cart.findIndex((item) => item.id === id);
        const item = cart[itemIndex];

        if (action === 'increase') {
            const newCart = [...cart];
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: +(item.totalPrice + item.price).toFixed(2),
            };
            setCart(newCart);
        } else if (action === 'decrease') {
            if (item.quantity === 1) {
                const newCart = cart.filter((item) => item.id !== id);
                setCart(newCart);
                return;
            }

            const newCart = [...cart];
            newCart[itemIndex] = {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: +(item.totalPrice - item.price).toFixed(2),
            };
            setCart(newCart);
        }
    };

    const handleClose = () => {
        setIsSidebarVisible(false);
        setCartIsOpen(false);
    };

    useEffect(() => {
        if (cartIsOpen) {
            setIsSidebarVisible(true);
        }
    }, [cartIsOpen]);

    return (
        <>
            <div
                className={`${style.wrapper} ${
                    cartIsOpen ? style.visible : ''
                }`}
            >
                <div
                    className={`${style.sidebar} ${
                        isSidebarVisible ? style.opened : ''
                    }`}
                >
                    <div className={style.title}>
                        <h2>Cart</h2>
                        <button
                            className={style.closeButton}
                            onClick={() => handleClose()}
                        >
                            <X color='white' size={25} />
                        </button>
                    </div>
                    {cart.length === 0 && <h3>Your Cart is empty</h3>}
                    <div className={style.cartItems}>
                        {cart.map((item) => {
                            return (
                                <div className={style.cartItem} key={item.id}>
                                    <div className={style.imageContainer}>
                                        <img
                                            src={item.image}
                                            alt='cart-item'
                                            className={style.productImage}
                                        />
                                    </div>
                                    <div className={style.textContainer}>
                                        <h3 className={style.itemTitle}>
                                            {item.title}
                                        </h3>
                                        <div
                                            className={style.quantityContainer}
                                        >
                                            <p id={style.price}>
                                                ${item.totalPrice}
                                            </p>
                                            <div>
                                                <button
                                                    className={
                                                        style.addSubtractButton
                                                    }
                                                    onClick={() =>
                                                        modifyItemAmount(
                                                            item.id,
                                                            'decrease'
                                                        )
                                                    }
                                                >
                                                    <Minus
                                                        color='white'
                                                        size={20}
                                                    />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    className={
                                                        style.addSubtractButton
                                                    }
                                                    onClick={() =>
                                                        modifyItemAmount(
                                                            item.id,
                                                            'increase'
                                                        )
                                                    }
                                                >
                                                    <Plus
                                                        color='white'
                                                        size={20}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {cart.length !== 0 && (
                        <div>
                            <h3>Total:</h3>
                            <h4>
                                {'$' +
                                    cart
                                        .reduce((total, item) => {
                                            return total + item.totalPrice;
                                        }, 0)
                                        .toFixed(2)}
                            </h4>
                        </div>
                    )}
                    {cart.length !== 0 && (
                        <button
                            className={style.checkout}
                            onClick={() => alert('Coming soon!')}
                        >
                            <p>Checkout</p>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;

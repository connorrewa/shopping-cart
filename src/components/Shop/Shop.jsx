import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ShopItem from '../ShopItem/ShopItem';
import style from './Shop.module.css';
import { X } from 'lucide-react';
const Shop = () => {
    const [items, setItems] = useState(null);
    const [categories, setCategories] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const numberOfItems = 20;

    const [cart, setCart, setCartIsOpen] = useOutletContext();

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.textContent.toLowerCase());
    }

    const categoryToDisplay = !selectedCategory
        ? categories
        : [selectedCategory];

    function firstLetterUpperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://fakestoreapi.com/products?limit=${numberOfItems}`
            );
            const data = await response.json();
            setItems(data);
            setCategories([...new Set(data.map((item) => item.category))]);
            setIsLoading(false);
        }
        fetchData();
    }, []);
    console.log(items, categories);

    return (
        <div>
            {isLoading ? (
                <div className={style.loadingContainer}>
                    <h2>loading...</h2>
                </div>
            ) : (
                <div className={style.container}>
                    <div className={style.categories}>
                        {categories.map((category) => {
                            return (
                                <button
                                    key={category}
                                    className={style.category}
                                    onClick={handleCategoryChange}
                                >
                                    <h3 className={style.categoryTitle}>
                                        {firstLetterUpperCase(category)}
                                    </h3>
                                </button>
                            );
                        })}
                        {selectedCategory && (
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={style.selectedCategory}
                            >
                                <X />
                                <p className={style.categoryText}>
                                    {firstLetterUpperCase(selectedCategory)}
                                </p>
                            </button>
                        )}
                    </div>
                    <div className={style.grid}>
                        {items.map(
                            (item) =>
                                categoryToDisplay.find(
                                    (category) => category === item.category
                                ) && (
                                    <ShopItem
                                        {...item}
                                        setCart={setCart}
                                        cart={cart}
                                        key={item.id}
                                    />
                                )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;

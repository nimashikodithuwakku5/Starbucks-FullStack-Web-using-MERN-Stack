import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    // cartItems is a map of food id -> quantity
    const [cartItems, setCartItems] = useState({});

    const addToCart = (id) => {
        setCartItems((prev) => ({
            ...prev,
            [id]: (prev[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => {
            const current = prev[id] || 0;
            const nextCount = Math.max(0, current - 1);
            const next = { ...prev, [id]: nextCount };
            if (nextCount === 0) {
                // Clean up zero entries
                delete next[id];
            }
            return next;
        });
    };

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
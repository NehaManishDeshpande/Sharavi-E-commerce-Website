import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    return storedWishlistItems ? JSON.parse(storedWishlistItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log("card added to cart", item);
    alert("Added to Cart !");
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
    alert("Removed from Cart !");
  };

  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
    console.log("card added to wishlist", item);
    alert("Added to Wishlist !");
  };

  const removeFromWishlist = (itemId) => {
    const updatedWishlistItems = wishlistItems.filter(item => item._id !== itemId);
    setWishlistItems(updatedWishlistItems);
    alert("Removed from Wishlist !");
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </CartContext.Provider>
  );
};

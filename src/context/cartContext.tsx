"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalItems: number;
  totalPrice: number;
  isInCart: (productId: number) => boolean;
  storageType: "session" | "local";
  setStorageType: (type: "session" | "local") => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const SESSION_KEY = "cart_session";
const LOCAL_KEY = "cart_local";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [storageType, setStorageType] = useState<"session" | "local">(
    "session"
  );

  // Hydrate cart from session first, then local
  useEffect(() => {
    let stored: string | null = null;
    if (storageType === "session") stored = sessionStorage.getItem(SESSION_KEY);
    else stored = localStorage.getItem(LOCAL_KEY);

    if (stored) setCart(JSON.parse(stored));
  }, [storageType]);

  // Sync cart to the chosen storage
  useEffect(() => {
    if (storageType === "session")
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(cart));
    else localStorage.setItem(LOCAL_KEY, JSON.stringify(cart));
  }, [cart, storageType]);

  const addToCart = useCallback(
    (product: Omit<CartItem, "quantity">, quantity: number = 1) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === product.id);
        if (existing) {
          return prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
          );
        }
        return [...prev, { ...product, quantity }];
      });
    },
    []
  );

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const increaseQuantity = useCallback((id: number) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );
  }, []);

  const decreaseQuantity = useCallback((id: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const isInCart = useCallback(
    (productId: number) => cart.some((item) => item.id === productId),
    [cart]
  );

  const totalItems = useMemo(
    () => cart.reduce((sum, i) => sum + i.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cart]
  );
  const clearCart = useCallback(() => {
    setCart([]); // reset in-memory state
    sessionStorage.removeItem(SESSION_KEY); // remove session storage
    localStorage.removeItem(LOCAL_KEY); // remove local storage
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice,
        isInCart,
        storageType,
        setStorageType,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};

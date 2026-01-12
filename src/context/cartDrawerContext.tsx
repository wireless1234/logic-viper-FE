"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type CartDrawerContextType = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const CartDrawerContext = createContext<CartDrawerContextType | undefined>(
  undefined
);

export const CartDrawerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <CartDrawerContext.Provider
      value={{ isOpen, openCart, closeCart, toggleCart }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
};

export const useCartDrawer = () => {
  const context = useContext(CartDrawerContext);
  if (!context) {
    throw new Error("useCartDrawer must be used within CartDrawerProvider");
  }
  return context;
};

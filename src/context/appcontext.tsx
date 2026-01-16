"use client";

import React from "react";
import { CartDrawerProvider } from "./cartDrawerContext";
import { CartProvider } from "./cartContext";

type Props = {
  children: React.ReactNode;
};

const AppContext = ({ children }: Props) => {
  return (
    <CartDrawerProvider>
      <CartProvider>{children}</CartProvider>
    </CartDrawerProvider>
  );
};

export default AppContext;

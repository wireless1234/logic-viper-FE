"use client";

import React from "react";
import { useCart } from "@/context/cartContext";
import { useCartDrawer } from "@/context/cartDrawerContext";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";

const CartModal: React.FC = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();
  const { isOpen, closeCart } = useCartDrawer();

  if (!isOpen) return null; // Don't render if drawer is closed

  return (
    <div
      className="fixed inset-0 bg-black/20 flex justify-end z-110"
      onClick={closeCart} // Close when clicking overlay
    >
      <div
        className="bg-white max-w-84 w-full h-full p-6 overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Header */}
        <div className="flex justify-end items-center mb-4">
          <button
            onClick={closeCart}
            className="text-gray-500 text-3xl font-medium"
          >
            <MdOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 ">
              <a href={`/shop/${item.name}`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </a>

              <div className="flex-1">
                <a
                  href={`/shop/${item.name}`}
                  className="font-normal text-[#7cc0ab] hover:text-[#0e0129] font-rubik text-sm "
                >
                  {item.name}
                </a>

                <p className="mt-1 font-rubik text-sm font-light text-[#d5d8dc]">
                  ${item.price.toFixed(2)} × {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Item */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-[#d5d8dc] text-xl mt-auto"
                aria-label={`Remove ${item.name}`}
              >
                <IoCloseCircleOutline />
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal & Actions */}
        {cart.length > 0 && (
          <>
            <div className="mt-6 border-t border-b py-7 flex gap-2 font-rubik text-xl text-[#212121] justify-center items-center font-black ">
              <span>Subtotal:</span>
              <span className=" font-semibold font-serif-display ">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 font-rubik text-base grid grid-cols-2 gap-2 ">
              <Link
                href="/cart"
                className="bg-[#69727D]  py-2.5 text-center text-white"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="bg-[#69727D] text-white py-2.5 text-center "
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;

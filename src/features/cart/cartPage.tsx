"use client";

import Image from "next/image";
import { useCart } from "../../context/cartContext";
import { FaCircleCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Link from "next/link";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  const [notification, setNotification] = useState(false);

  // Local state for editable quantities
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // Initialize quantities when cart changes
  useEffect(() => {
    const initial: Record<number, number> = {};
    cart.forEach((item) => {
      initial[item.id] = item.quantity;
    });
    setQuantities(initial);
  }, [cart]);

  // Handle input change
  const handleInputChange = (id: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, value), // ensure min 1
    }));
  };

  // Update cart quantities
  const handleUpdateCart = () => {
    for (const idStr in quantities) {
      const id = Number(idStr);
      const newQty = quantities[id];
      const currentItem = cart.find((i) => i.id === id);
      if (!currentItem) continue;

      const diff = newQty - currentItem.quantity;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) increaseQuantity(id);
      } else if (diff < 0) {
        for (let i = 0; i < -diff; i++) decreaseQuantity(id);
      }

      setNotification(true);

      setTimeout(() => {
        setNotification(false);
      }, 3000);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-330 mx-auto px-3">
      {/* Cart Table */}
      <div className="px-6 xl:px-0 ">
        {notification && (
          <div className="px-7.5 font-rubik text-[15px] py-3.75 flex items-center gap-4 border-t-3 border-[#75bda7] bg-[#f6f5f8] mb-7.5">
            <FaCircleCheck className="text-[#75bda7]" />
            <p>Cart updated.</p>
          </div>
        )}

        <div className="overflow-x-auto rounded">
          <table className="w-full border border-gray-200 rounded-t">
            <thead>
              <tr className="uppercase">
                <th className="p-3.75 text-left">Product</th>
                <th className="p-3.75 text-left">Name</th>
                <th className="p-3.75 text-left">Unit Price</th>
                <th className="p-3.75 text-left">Quantity</th>
                <th className="p-3.75 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-t text-sm font-semibold text-[#777]"
                >
                  <td className="p-2">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover rounded"
                    />
                  </td>
                  <td className="p-2 pl-3 text-[#75bda7] underline">
                    {item.name}
                  </td>
                  <td className="p-2 pl-4">${item.price.toFixed(2)}</td>
                  <td className="p-2 pl-4">
                    <input
                      type="number"
                      className="w-16 px-2.5 py-[5px] text-center border text-black"
                      min={1}
                      value={quantities[item.id] || item.quantity}
                      onChange={(e) =>
                        handleInputChange(item.id, Number(e.target.value))
                      }
                    />
                  </td>
                  <td className="p-2 pl-4">
                    $
                    {(
                      item.price * (quantities[item.id] || item.quantity)
                    ).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Coupon & Update */}
      <div className="flex rounded-b border border-t-0 flex-col md:flex-row px-3 py-2.5 justify-between items-start  gap-4">
        <div className="flex items-center gap-2.5">
          <input
            type="text"
            placeholder="Coupon code"
            className="border bg-[#F2F9FC] p-2 rounded px-3.75 py-2.5"
          />
          <div className="flex items-center gap-2">
            Coupon:
            <button className="bg-[#75BDA7] text-white px-7.5 py-[13px] rounded text-[13px] font-bold ">
              Apply Coupon
            </button>
          </div>
        </div>
        <button
          onClick={handleUpdateCart}
          // disabled={quantities.length === 0}
          className="bg-[#75BDA7] text-white px-7.5 py-[13px] rounded text-[13px] font-bold "
        >
          Update Cart
        </button>
      </div>

      {/* Totals */}
      <div className="mt-8 max-w-[600px] w-full border shadow mx-auto border-gray-200 p-10">
        <h3 className="text-[25px] font-semibold mb-3.75 font-serif">
          Cart Totals
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 text-sm">
            <tbody>
              {/* Subtotal */}
              <tr className="border-b">
                <th className="text-left font-bold px-4 py-3">Subtotal</th>
                <td className=" px-4 py-3">
                  <span className="font-semibold text-[#777]">
                    ${subtotal.toFixed(2)}
                  </span>
                </td>
              </tr>

              {/* Total */}
              <tr>
                <th className="text-left font-bold px-4 py-3">Total</th>
                <td className=" px-4 py-3">
                  <strong className="text-lg">${subtotal.toFixed(2)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="h-7.5"></div>
        <Link
          href="/checkout"
          className="bg-[#75BDA7] text-white px-7.5 py-[13px]  rounded text-[13px] font-bold "
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

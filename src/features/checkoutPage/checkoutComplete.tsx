import React from "react";

import { useCart } from "../../context/cartContext";
import { IoCallOutline } from "react-icons/io5";
import { GrMailOption } from "react-icons/gr";
type Props = {};

const CheckoutComplete = (props: Props) => {
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className=" mx-auto p-6">
      <p className="font-rubik text-[15px]">
        Thank you. Your order has been received.
      </p>
      <div className="flex items-center py-2 mb-10">
        <div className="border-r px-4 border-dashed">
          <p className="uppercase text-[11px]">Order Number:</p>
          <p className="font-bold text-[15px]">12345</p>
        </div>
        <div className="border-r px-4 border-dashed">
          <p className="uppercase text-[11px]">Date:</p>
          <p className="font-bold text-[15px]">January 14, 2026</p>
        </div>
        <div className="border-r px-4 border-dashed">
          <p className="uppercase text-[11px]">Total:</p>
          <p className="font-bold text-[15px]">$15.00</p>
        </div>
        <div className="px-4">
          <p className="uppercase text-[11px]">Payment Method:</p>
          <p className="font-bold text-[15px]">Direct bank transfer</p>
        </div>
      </div>
      <h2 className="text-[30px] font-serif font-semibold mb-3">
        Order Details
      </h2>
      <div className="  ">
        <table className="w-full border-separate mb-6 border border-[#0000001a] rounded">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left border px-3 py-[9px] font-medium">
                Product
              </th>
              <th className=" px-3 py-[9px] text-left border font-medium">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="px-3 py-[9px] border  text-[#75BDA7]">
                  <span className="underline hover:no-underline ">
                    {item.name} {""}
                  </span>
                  <strong className="text-black">x {item.quantity}</strong>
                </td>
                <td className=" px-3 py-[9px] border">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-300">
              <th className="px-3 py-[9px] text-[13px] text-left border font-bold">
                Subtotal
              </th>
              <td className="px-3 border py-[9px]">${subtotal}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <th className="px-3 border py-[9px] text-[13px] text-left font-bold">
                Total
              </th>
              <td className="px-3 py-[9px] border ">${subtotal}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <th className="px-3 border py-[9px] text-[13px] text-left font-bold">
                Payment method:
              </th>
              <td className="px-3 py-[9px] border ">Direct bank transfer</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h2 className="text-[30px] font-serif font-semibold mb-3">
        Billing Address
      </h2>
      <div className="rounded border shadow p-4 space-y-2">
        <p className="font-rubik text-[15px]">Name</p>
        <p className="font-rubik text-[15px]">Company</p>
        <p className="font-rubik text-[15px]">Area</p>
        <p className="font-rubik text-[15px]">state</p>
        <p className="font-rubik text-[15px]">city</p>
        <p className="font-rubik text-[15px]">country</p>
        <div className="mt-4 flex gap-2 items-center">
          <IoCallOutline />
          <span>phone number</span>
        </div>
        <div className="mt-4 flex gap-2 items-center">
          <GrMailOption />
          <span>emaail</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComplete;

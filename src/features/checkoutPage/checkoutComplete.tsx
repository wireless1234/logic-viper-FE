"use client";

import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { GrMailOption } from "react-icons/gr";
import { Order } from "../../types/order";

const CheckoutComplete = () => {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("checkout_complete");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-semibold">Order not found</h1>
        <p>Please contact support if you believe this is an error.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto p-6" aria-labelledby="order-complete-title">
      <h1 id="order-complete-title" className="font-rubik text-[15px] mb-6">
        Thank you. Your order has been received.
      </h1>

      {/* Order Meta */}
      <section className="flex flex-wrap py-2 mb-10 gap-y-4">
        <Meta label="Order Number" value={order.orderId} />
        <Meta
          label="Date"
          value={new Date(order.createdAt).toLocaleDateString()}
        />
        <Meta label="Total" value={`$${order.total}`} />
        <Meta label="Payment Method" value={order.order.payment_method} />
      </section>

      {/* Order Details */}
      <section aria-labelledby="order-details-title">
        <h2
          id="order-details-title"
          className="text-[30px] font-serif font-semibold mb-3"
        >
          Order Details
        </h2>

        <table className="w-full border border-[#0000001a] rounded mb-6 border-separate">
          <thead>
            <tr>
              <th scope="col" className="text-left px-3 py-2 border">
                Product
              </th>
              <th scope="col" className="text-left px-3 py-2 border">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item: any) => (
              <tr key={item.id}>
                <td className="px-3 py-2 border text-[#75BDA7]">
                  <span className="underline">{item.name}</span>{" "}
                  <strong className="text-black">× {item.quantity}</strong>
                </td>
                <td className="px-3 py-2 border">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Billing Address */}
      <section aria-labelledby="billing-title">
        <h2
          id="billing-title"
          className="text-[30px] font-serif font-semibold mb-3"
        >
          Billing Address
        </h2>

        <address className="rounded border  p-4 space-y-1 not-italic">
          <p>
            {order.order.first_name} {order.order.last_name}
          </p>
          {order.order.company && <p>{order.order.company}</p>}
          <p>{order.order.billing_address}</p>
          <p>
            {order.order.city}, {order.order.state}
          </p>
          <p>{order.order.country}</p>

          <div className="mt-4 flex gap-2 items-center">
            <IoCallOutline aria-hidden />
            <span>{order.order.phone_number}</span>
          </div>

          <div className="mt-2 flex gap-2 items-center">
            <GrMailOption aria-hidden />
            <span>{order.order.email}</span>
          </div>
        </address>
      </section>
    </main>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="border-r px-4 border-dashed">
    <p className="uppercase text-[11px]">{label}</p>
    <p className="font-bold text-[15px]">{value}</p>
  </div>
);

export default CheckoutComplete;

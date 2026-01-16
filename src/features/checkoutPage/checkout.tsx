"use client";
import React, { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { useCart } from "../../context/cartContext";
import { MdOutlineArrowDropUp } from "react-icons/md";
import CheckoutComplete from "./checkoutComplete";
import Link from "next/link";
type Props = {};

const Checkout = (props: Props) => {
  const { cart } = useCart();
  const [showComplete, setShowComplete] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="max-w-330 mx-auto lg:px-[70px] 2xl:px-0">
      {!showComplete ? (
        <div className=" mx-auto p-6">
          <div className="px-7.5 font-rubik font-normal text-[15px] py-3.75 flex items-center gap-4 border-t-3 border-[#75bda7] bg-[#f6f5f8] mb-7.5">
            <IoIosCalendar className="text-[#75bda7]" />
            <p>
              Have a coupon?{" "}
              <Link href="" className="underline text-[#75bda7]">
                Click here to enter your code
              </Link>
            </p>
          </div>
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Billing Details */}
              <div>
                <h3 className="text-[22px] font-serif font-bold mb-5">
                  Billing Details
                </h3>
                <form id="checkout-form" className="space-y-4 font-normal  ">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif-display text-sm mb-1 font-black text-[#777777]">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="billing_first_name"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-serif-display font-black text-[#777777] mb-1 ">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="billing_last_name"
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="billing_company"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Country / Region <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="billing_country"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option defaultValue="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_address_1"
                      placeholder="House number and street name"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="text"
                      name="billing_address_2"
                      placeholder="Apartment, suite, unit (optional)"
                      className="w-full border border-gray-300 rounded p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Town / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_city"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="billing_state"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option defaultValue="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="billing_phone"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                      Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="billing_email"
                      placeholder="example@gmail.com"
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <h3 className="mb-5 font-serif mt-3 font-bold text-[22px] text-[#0e0129]">
                    Additional Information
                  </h3>
                  <div>
                    <label className="block text-sm  font-black text-[#777777] font-serif-display mb-1">
                      Order Notes (Optional)
                    </label>
                    <textarea
                      name="order_comments"
                      rows={3}
                      className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Notes about your order"
                    ></textarea>
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <h2 className="text-[22px] font-serif font-bold mb-5">
                  Your Order
                </h2>
                <div className="  ">
                  <table className="w-full border-separate mb-6 border border-[#0000001a] rounded">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left border px-3 py-[9px] font-medium">
                          Product
                        </th>
                        <th className=" px-3 py-[9px] text-left border font-medium">
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200">
                          <td className="px-3 py-[9px] border">
                            {item.name} × <strong>{item.quantity}</strong>
                          </td>
                          <td className=" px-3 py-[9px] border">
                            ${item.price * item.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t border-gray-300">
                        <th className="px-3 py-[9px] text-left border">
                          Subtotal
                        </th>
                        <td className="px-3 border py-[9px]">${subtotal}</td>
                      </tr>
                      <tr className="border-t border-gray-300">
                        <th className="px-3 border py-[9px] text-left font-bold">
                          Total
                        </th>
                        <td className="px-3 py-[9px] border font-bold">
                          ${subtotal}
                        </td>
                      </tr>
                    </tfoot>
                  </table>

                  <div className="mt-10 border bg-[#EDEBF1] border-gray-200 py-4 rounded-md">
                    {/* Payment Methods */}
                    <ul className="px-4 mb-6">
                      <li className="border border-gray-200 rounded-md ">
                        <span className="font-normal font-rubik text-[15px] text-gray-800">
                          Direct bank transfer
                        </span>
                        <div className=" relative font-rubik text-[15px]">
                          <MdOutlineArrowDropUp className="absolute -top-7 left-5 text-5xl text-[#DCD7E2]" />
                          <div className="mt-3 text-sm text-gray-600 leading-relaxed p-3 bg-[#DCD7E2]">
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <hr className="border" />
                    {/* Privacy Policy */}
                    <div className="mt-4 text-sm text-gray-600 font-rubik leading-relaxed px-6">
                      <p>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-[#75bda7] underline"
                        >
                          privacy policy
                        </a>
                        .
                      </p>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="mt-4 px-6">
                      <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer font-rubik">
                        <input
                          type="checkbox"
                          checked={acceptedTerms}
                          onChange={(e) => setAcceptedTerms(e.target.checked)}
                          className="mt-1 accent-[#75bda7]"
                        />
                        <span>
                          I have read and agree to the website{" "}
                          <a
                            href="/terms-and-conditions"
                            target="_blank"
                            className="text-[#75bda7] underline"
                          >
                            terms and conditions
                          </a>
                          <span className="text-red-500 ml-1">*</span>
                        </span>
                      </label>
                    </div>

                    {/* Place Order Button */}
                    <div className="px-4">
                      <button
                        type="submit"
                        disabled={!acceptedTerms}
                        onClick={() => setShowComplete(true)}
                        className={`mt-6 w-full py-3 text-white font-semibold rounded-md transition-colors
          ${
            acceptedTerms
              ? "bg-[#75bda7] hover:bg-[#63a893]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
                      >
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CheckoutComplete />
      )}
    </div>
  );
};

export default Checkout;

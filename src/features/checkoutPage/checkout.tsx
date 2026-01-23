"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCart } from "@/context/cartContext";
import { createOrder, createPayment } from "@/services/orderService";
import { useMutation } from "@tanstack/react-query";
import { IoIosCalendar } from "react-icons/io";
import CheckoutComplete from "./checkoutComplete";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { usePaymentMethods } from "@/hooks/usePayment";
// import { getSessionKey } from "@/utils/sessionkey";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const [showComplete, setShowComplete] = useState(false);
  const [addCoupn, setAddCoupn] = useState(false);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const validationSchema = Yup.object({
    billing_first_name: Yup.string().required(),
    billing_last_name: Yup.string().required(),
    billing_country: Yup.string().required(),
    billing_address_1: Yup.string().required(),
    billing_city: Yup.string().required(),
    billing_state: Yup.string().required(),
    billing_phone: Yup.string().matches(/^\d+$/, "Numbers only").required(),
    billing_email: Yup.string().email().required(),
    paymentMethod: Yup.string().required(),
    terms: Yup.boolean().oneOf([true], "Accept terms"),
  });

  // Fetch payment methods
  const { paymentMethods } = usePaymentMethods();
  const paymentOptions = paymentMethods
    ? paymentMethods.map((method) => ({
        value: method.value,
        label: method.label,
      }))
    : [];

  const { mutate: createPaymentMutation } = useMutation({
    mutationFn: createPayment,
    onSuccess: (res) => {
      setIsPaymentProcessing(false);

      const { payment_method, payment_url } = res.data;

      if (!payment_url) {
        alert("Invalid payment URL");
        return;
      }

      const encoded = encodeURIComponent(payment_url);

      if (
        payment_method === "squad" ||
        payment_method === "ziina2" ||
        payment_method === "stripe"
      ) {
        window.location.href = `https://hayraywears.com/payment-processing?redirectlink=${encoded}`;
      } else if (payment_method === "paypal") {
        window.location.href = `https://javcorp.com.au/payment-processing?redirectlink=${payment_url}`;
      } else {
        window.location.href = payment_url;
      }
    },
    onError: () => {
      setIsPaymentProcessing(false);
      alert("Payment failed");
    },
  });

  const { mutate: createOrderMutation } = useMutation({
    mutationFn: createOrder,
    onSuccess: (res) => {
      const method = res.data.payment_method;

      const amount =
        method === "paypal"
          ? res.data.total_price * 0.6
          : res.data.total_price * 100 * 0.6;

      sessionStorage.setItem(
        "checkout_complete",
        JSON.stringify({
          orderId: res.data.id,
          total: res.data.total_price,
          paymentMethod: res.data.payment_method,
          items: cart,
        }),
      );

      createPaymentMutation({
        amount,
        currency_code: "USD",
        order_id: res.data.id,
        success_url: `https://unclev.com.au/checkout/order-success?status=success&orderId=${res.data.id}`,
        cancel_url: `https://unclev.com.au/checkout/order-success?status=canceled&orderId=${res.data.id}`,
        failure_url: `https://unclev.com.au/checkout/order-success?status=failed&orderId=${res.data.id}`,
      });
      clearCart();
    },
    onError: () => {
      setIsPaymentProcessing(false);
      alert("Order creation failed");
    },
  });

  const initialValues = {
    billing_first_name: "",
    billing_last_name: "",
    billing_company: "",
    billing_country: "US",
    billing_address_1: "",
    billing_address_2: "",
    billing_city: "",
    billing_state: "NY",
    billing_phone: "",
    billing_email: "",
    order_comments: "",
    paymentMethod: "",
    terms: false,
  };

  const handleSubmit = (values: any) => {
    setIsPaymentProcessing(true);

    // const session_key = getSessionKey();

    const orderData = {
      payment_method: values.paymentMethod,
      first_name: values.billing_first_name,
      last_name: values.billing_last_name,
      email: values.billing_email,
      phone_number: values.billing_phone,
      billing_address: values.billing_address_1,
      company: values.billing_company,
      shipping_address: values.billing_address_1,
      city: values.billing_city,
      state: values.billing_state,
      zip_code: "00000",
      country: values.billing_country,
      comments: values.order_comments,
      card_last_four_digits: "1234",
    };
    setShowComplete(true);
    sessionStorage.setItem(
      "checkout_complete",
      JSON.stringify({
        orderId: "12365",
        total: subtotal,
        order: orderData,
        items: cart,
      }),
    );
    clearCart();
    // createOrderMutation({ orderData, session_key });
  };

  return (
    <div className="max-w-330 mx-auto lg:px-[70px] 2xl:px-0">
      {!showComplete ? (
        <div className="mx-auto p-6">
          <div className="px-7.5 font-rubik font-normal text-[15px] py-3.75 flex items-center gap-4 border-t-3 border-[#75bda7] bg-[#f6f5f8] mb-7.5">
            <IoIosCalendar className="text-[#75bda7]" />
            <p>
              Have a coupon?{" "}
              <button
                type="button"
                onClick={() => setAddCoupn(!addCoupn)}
                className="hover:underline text-[#75bda7]"
              >
                Click here to enter your code
              </button>
            </p>
          </div>
          {addCoupn && (
            <div className="px-7.5 font-rubik font-normal rounded text-[15px] py-5 flex items-center gap-4 border mb-7.5">
              <input
                type="text"
                name=""
                id=""
                className="border w-[45%] py-2 px-3"
                placeholder="coupon code"
              />
              <button
                type="button"
                className="font-bold bg-[#75bda7] text-sm text-white py-3 px-6"
              >
                Apply Coupon
              </button>
            </div>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Billing Details */}
                  <div>
                    <h3 className="text-[22px] font-serif font-bold mb-5">
                      Billing Details
                    </h3>
                    <div className="space-y-4 font-normal">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-serif-display text-sm mb-1 font-black text-[#777777]">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="text"
                            name="billing_first_name"
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name="billing_first_name"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <Field
                            type="text"
                            name="billing_last_name"
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <ErrorMessage
                            name="billing_last_name"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Company (Optional)
                        </label>
                        <Field
                          type="text"
                          name="billing_company"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Country / Region{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="billing_country"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                        </Field>
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          name="billing_address_1"
                          placeholder="House number and street name"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage
                          name="billing_address_1"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                        <Field
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
                        <Field
                          type="text"
                          name="billing_city"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage
                          name="billing_city"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          State <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="billing_state"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="New York">New York</option>
                          <option value="California">California</option>
                          <option value="Texas">Texas</option>
                        </Field>
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="tel"
                          name="billing_phone"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage
                          name="billing_phone"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Email Address<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="email"
                          name="billing_email"
                          placeholder="example@gmail.com"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <ErrorMessage
                          name="billing_email"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-serif-display font-black text-[#777777] mb-1">
                          Payment Method <span className="text-red-500">*</span>
                        </label>
                        <Field
                          as="select"
                          name="paymentMethod"
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="" disabled>
                            Select Payment Method
                          </option>
                          {paymentOptions.length > 0 ? (
                            paymentOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          ) : (
                            <option value="" disabled>
                              No payment methods available
                            </option>
                          )}
                        </Field>
                        <ErrorMessage
                          name="paymentMethod"
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </div>

                      <h3 className="mb-5 font-serif mt-3 font-bold text-[22px] text-[#0e0129]">
                        Additional Information
                      </h3>
                      <div>
                        <label className="block text-sm font-black text-[#777777] font-serif-display mb-1">
                          Order Notes (Optional)
                        </label>
                        <Field
                          as="textarea"
                          name="order_comments"
                          rows={3}
                          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Notes about your order"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div>
                    <h2 className="text-[22px] font-serif font-bold mb-5">
                      Your Order
                    </h2>
                    <div className="">
                      <table className="w-full border-separate mb-6 border border-[#0000001a] rounded">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left border px-3 py-[9px] font-medium">
                              Product
                            </th>
                            <th className="px-3 py-[9px] text-left border font-medium">
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <tr
                              key={item.id}
                              className="border-b border-gray-200"
                            >
                              <td className="px-3 py-[9px] border">
                                {item.name} × <strong>{item.quantity}</strong>
                              </td>
                              <td className="px-3 py-[9px] border">
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
                            <td className="px-3 border py-[9px]">
                              ${subtotal}
                            </td>
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
                        <div className="px-4 mb-6 space-y-3">
                          <div className="  rounded-md ">
                            <label className="flex items-center gap-2  cursor-pointer">
                              <span className="font-normal font-rubik text-[15px] text-gray-800">
                                Direct bank transfer
                              </span>
                            </label>
                            <div className="relative font-rubik text-[15px]">
                              <MdOutlineArrowDropUp className="absolute -top-7 left-5 text-5xl text-[#DCD7E2]" />
                              <div className="mt-3 text-sm text-gray-600 leading-relaxed p-3 bg-[#DCD7E2]">
                                <p>
                                  Make your payment directly into our bank
                                  account. Please use your Order ID as the
                                  payment reference. Your order will not be
                                  shipped until the funds have cleared in our
                                  account.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr className="border" />

                        {/* Privacy Policy */}
                        <div className="mt-4 text-sm text-gray-600 font-rubik leading-relaxed px-6">
                          <p>
                            Your personal data will be used to process your
                            order, support your experience throughout this
                            website, and for other purposes described in our{" "}
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
                            <Field
                              type="checkbox"
                              name="terms"
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
                          <ErrorMessage
                            name="terms"
                            component="div"
                            className="text-red-500 text-xs mt-1"
                          />
                        </div>

                        {/* Place Order Button */}
                        <div className="px-4">
                          <button
                            type="submit"
                            disabled={isPaymentProcessing}
                            onClick={() => {
                              const formElement =
                                document.querySelector("form");
                              if (formElement) {
                                formElement.dispatchEvent(
                                  new Event("submit", {
                                    cancelable: true,
                                    bubbles: true,
                                  }),
                                );
                              }
                            }}
                            className={`mt-6 w-full py-3 text-white font-semibold rounded-md transition-colors
                              ${
                                isPaymentProcessing
                                  ? "bg-gray-400 cursor-not-allowed"
                                  : "bg-[#75bda7] hover:bg-[#63a893]"
                              }`}
                          >
                            {isPaymentProcessing
                              ? "Processing..."
                              : "Place order"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <CheckoutComplete />
      )}
    </div>
  );
};

export default Checkout;

import React from "react";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className=" font-sans">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
              <form id="checkout-form" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_first_name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_last_name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    name="billing_company"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Country / Region <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="billing_country"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option defaultValue="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="billing_address_1"
                    placeholder="House number and street name"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="billing_address_2"
                    placeholder="Apartment, suite, unit (optional)"
                    className="w-full border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_city"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="billing_state"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="NY" selected>
                        New York
                      </option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="billing_postcode"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="billing_phone"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="billing_email"
                    value="bintasani@gmail.com"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    name="order_comments"
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Notes about your order"
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Order</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <table className="w-full mb-4">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left pb-2 font-medium">Product</th>
                      <th className="text-right pb-2 font-medium">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2">
                        3.2 Mp IP-Camera TR-E800 (3.6 Mm) ×1
                      </td>
                      <td className="text-right py-2">$60.50</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-gray-300">
                      <th className="pt-2 text-left">Subtotal</th>
                      <td className="pt-2 text-right">$60.50</td>
                    </tr>
                    <tr>
                      <th className="pt-2 text-left font-bold">Total</th>
                      <td className="pt-2 text-right font-bold">$60.50</td>
                    </tr>
                  </tfoot>
                </table>

                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                <div className="mb-4">
                  <label className="flex items-start space-x-2 p-2 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                    <input
                      type="radio"
                      name="payment_method"
                      value="bacs"
                      defaultChecked
                      className="mt-1"
                    />
                    <span>
                      Direct Bank Transfer
                      <br />
                      <small className="text-gray-600">
                        Make your payment directly into our bank account. Your
                        order will not be shipped until funds clear.
                      </small>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Place Order
                </button>

                <p className="text-xs text-gray-500 mt-4">
                  By placing your order, you agree to our{" "}
                  <a href="#" className="text-blue-600 underline">
                    privacy policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    terms and conditions
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

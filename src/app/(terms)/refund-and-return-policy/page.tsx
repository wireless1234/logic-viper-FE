import React from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { refundPolicyToc } from "@/lib/terms/refund";
import { IoMdClose } from "react-icons/io";

const RefundPolicy = () => {
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-end text-white text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Logic Viper Return and Refund Policy</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <TableOfContents tocData={refundPolicyToc} />
            </div>
            <section className="px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Effective Date: September 9, 2024
                </h2>
                <p>
                  At <strong>Logic Viper</strong>, we aim to provide the best
                  quality products and services to our customers. However, we
                  understand that there may be occasions where you may need to
                  return a product or request a refund for services. This policy
                  outlines the conditions under which returns and refunds are
                  accepted for products and services provided by Logic Viper.
                </p>
              </section>

              {/* Eligibility for Returns */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Eligibility for Returns
                </h2>

                <section id="elementor-toc__heading-anchor-2" className="mt-4">
                  <h3 className="font-semibold text-lg">Products</h3>
                  <p>
                    <strong>New Products:</strong> You may return new, unused,
                    and unopened products purchased directly from Logic Viper
                    within <strong>14 days</strong> of the delivery date. The
                    product must be in its original condition, including all
                    packaging, accessories, and documentation.
                  </p>
                  <p className="mt-2">
                    <strong>Used or Refurbished Products:</strong> All sales are
                    final. Returns or exchanges are only accepted if the product
                    is damaged upon arrival or not as described.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-3" className="mt-4">
                  <h3 className="font-semibold text-lg">Services</h3>
                  <p>
                    For service-based engagements such as cybersecurity
                    assessments, consultations, or other services, refunds are
                    not offered once the service has been delivered. If you are
                    unsatisfied, please contact us to resolve the issue.
                  </p>
                </section>
              </section>

              {/* Return Process */}
              <section id="elementor-toc__heading-anchor-4">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Return Process
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Contact Us:</strong> Email{" "}
                    <strong>customer@vicez-oz.com</strong> or call{" "}
                    <strong>347-923-0000</strong> within{" "}
                    <strong>14 days</strong> of delivery to initiate a return.
                  </li>
                  <li>
                    <strong>Return Authorization:</strong> Approved returns will
                    receive an RMA number, which must be included in the
                    package.
                  </li>
                  <li>
                    <strong>Shipping:</strong> Customers are responsible for
                    return shipping. Use a traceable method.
                  </li>
                  <li>
                    <strong>Inspection:</strong> Products are inspected before
                    refunds are issued.
                  </li>
                </ul>
              </section>

              {/* Refund Policy */}
              <section id="elementor-toc__heading-anchor-5">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Refund Policy
                </h2>
                <p>
                  <strong>New Products:</strong> Refunds are processed within{" "}
                  <strong>7–10 business days</strong> after inspection, minus
                  applicable restocking fees (up to <strong>15%</strong>).
                </p>
                <p className="mt-2">
                  <strong>Used or Refurbished Products:</strong> Refunds are not
                  offered unless the item is defective or not as described.
                </p>
                <p className="mt-2">
                  <strong>Digital Products and Services:</strong> Refunds are
                  only available if proven defective within{" "}
                  <strong>7 days</strong> of purchase.
                </p>
              </section>

              {/* Non-Returnable Items */}
              <section id="elementor-toc__heading-anchor-6">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Non-Returnable Items
                </h2>

                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <IoMdClose className="mt-1 text-red-500 text-2xl shrink-0" />
                    <span>Digital downloads and software license keys</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="mt-1 text-red-500 text-2xl shrink-0" />
                    <span>
                      Products damaged due to misuse or unauthorized repairs
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="mt-1 text-red-500 text-2xl shrink-0" />
                    <span>Fully delivered services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="mt-1 text-red-500 text-2xl shrink-0" />
                    <span>Customized solutions or products</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <IoMdClose className="mt-1 text-red-500 text-2xl shrink-0" />
                    <span>Clearance or final sale items</span>
                  </li>
                </ul>
              </section>

              {/* Damaged or Defective Products */}
              <section id="elementor-toc__heading-anchor-7">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Damaged or Defective Products
                </h2>
                <p>
                  If a product arrives damaged or defective, contact us within{" "}
                  <strong>7 days</strong> at{" "}
                  <strong>customer@vicez-oz.com</strong> or{" "}
                  <strong>347-923-0000</strong>. We will arrange a return or
                  exchange at no cost.
                </p>
              </section>

              {/* Exchanges */}
              <section id="elementor-toc__heading-anchor-8">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Exchanges
                </h2>
                <p>
                  Exchanges are only available for defective or damaged products
                  reported within <strong>7 days</strong> of delivery.
                </p>
              </section>

              {/* Restocking Fees */}
              <section id="elementor-toc__heading-anchor-9">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Restocking Fees
                </h2>
                <p>
                  A restocking fee of up to <strong>15%</strong> may apply to
                  opened but unused products.
                </p>
              </section>

              {/* Contact Us */}
              <section id="elementor-toc__heading-anchor-10">
                <h2 className="my-4 font-serif text-2xl font-bold">
                  Contact Us
                </h2>
                <p>For questions regarding returns or refunds, contact:</p>
                <p className="mt-2">
                  <strong>Logic Viper</strong>
                  <br />
                  Email: <strong>customer@vicez-oz.com</strong>
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

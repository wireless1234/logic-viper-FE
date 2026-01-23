import React from "react";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { privacyPolicyToc } from "@/lib/terms/privacy";
import { LuCircleCheckBig } from "react-icons/lu";

const PrivacyPolicy = () => {
  const checkIcon = <LuCircleCheckBig className="inline text-green-600 mr-2" />;
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Logic Viper Privacy Policy</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <TableOfContents tocData={privacyPolicyToc} />
            </div>
            <div className="space-y-5 px-3 font-rubik text-[15px]">
              {/* Effective Date */}
              <section id="elementor-toc__heading-anchor-0">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Effective Date: September 9, 2024
                </h2>
                <p>
                  Logic Viper (“<strong>we</strong>,” “<strong>our</strong>,” or
                  “<strong>us</strong>”) is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our
                  Managed Security Services, IT Services, and software
                  solutions. Please read this privacy policy carefully to
                  understand our views and practices regarding your personal
                  data and how we will treat it.
                </p>
              </section>

              {/* Scope */}
              <section id="elementor-toc__heading-anchor-1">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Scope of the Privacy Policy
                </h2>
                <p>
                  This Privacy Policy applies to all personal data we collect or
                  process about you in connection with the services provided by
                  Logic Viper. It covers:
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    {checkIcon}Information collected through our website
                    (www.logicviper.com), communication platforms, and through
                    any other interactions you have with us.
                  </li>
                  <li>
                    {checkIcon}Personal data collected from clients, customers,
                    and website users.
                  </li>
                </ul>
              </section>

              {/* Information We Collect */}
              <section id="elementor-toc__heading-anchor-2">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Information We Collect
                </h2>
                <p>We collect various types of information, including:</p>

                <section id="elementor-toc__heading-anchor-3">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    a. Personal Information
                  </h3>
                  <p>
                    When you engage with our services, we may collect personal
                    data such as:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>
                      {checkIcon}Name, email address, phone number, company
                      name, and job title.
                    </li>
                    <li>{checkIcon}Payment and billing information.</li>
                    <li>
                      {checkIcon}Technical information (e.g., IP addresses,
                      browser type, time zone settings).
                    </li>
                    <li>
                      {checkIcon}Any information you provide when filling out
                      forms or communicating with us.
                    </li>
                  </ul>
                </section>

                <section id="elementor-toc__heading-anchor-4">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    b. Technical and Security Data
                  </h3>
                  <p>As an MSSP, we may collect and monitor:</p>
                  <ul className="mt-4 space-y-2">
                    <li>{checkIcon}Network traffic and activity logs.</li>
                    <li>
                      {checkIcon}Security alerts, vulnerability reports, and
                      incident response data.
                    </li>
                    <li>
                      {checkIcon}IP addresses, user logs, and access logs.
                    </li>
                  </ul>
                  <p className="mt-4">
                    This data is collected for the purpose of providing security
                    services and ensuring the protection of client systems.
                  </p>
                </section>
              </section>

              {/* How We Use Your Information */}
              <section id="elementor-toc__heading-anchor-5">
                <h2 className="text-2xl font-bold font-serif my-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information we collect for the following purposes:
                </p>

                <section id="elementor-toc__heading-anchor-6">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    a. Service Delivery
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      {checkIcon}To provide, maintain, and improve our
                      cybersecurity services, including threat detection,
                      vulnerability management, and incident response.
                    </li>
                    <li>
                      {checkIcon}To deliver customer support and respond to your
                      inquiries.
                    </li>
                  </ul>
                </section>

                <section id="elementor-toc__heading-anchor-7">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    b. Compliance and Security
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      {checkIcon}To detect, prevent, and respond to security
                      incidents and breaches.
                    </li>
                    <li>
                      {checkIcon}To monitor the effectiveness of our security
                      systems and protect our clients’ data.
                    </li>
                    <li>
                      {checkIcon}To ensure compliance with applicable laws and
                      security standards, including GDPR, ISO 27001, and others
                      relevant to your industry.
                    </li>
                  </ul>
                </section>

                <section id="elementor-toc__heading-anchor-8">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    c. Marketing and Communication
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      {checkIcon}To send you relevant service updates, security
                      alerts, promotional materials, and newsletters, where
                      consent has been provided.
                    </li>
                    <li>
                      {checkIcon}To communicate important information about our
                      services, legal terms, and privacy updates.
                    </li>
                  </ul>
                </section>

                <section id="elementor-toc__heading-anchor-9">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    d. Legal and Contractual Obligations
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      {checkIcon}To fulfill contractual obligations to our
                      clients.
                    </li>
                    <li>
                      {checkIcon}To comply with legal requirements such as data
                      retention laws or government regulations.
                    </li>
                  </ul>
                </section>
              </section>

              {/* How We Share Your Information */}
              <section id="elementor-toc__heading-anchor-10">
                <h2 className="text-2xl font-bold font-serif my-4">
                  How We Share Your Information
                </h2>
                <p>
                  We will not sell or rent your personal information to third
                  parties. However, we may share your information in the
                  following situations:
                </p>

                <section id="elementor-toc__heading-anchor-11">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    a. With Service Providers and Partners
                  </h3>
                  <p>
                    We may share information with third-party service providers
                    who assist us in delivering our services, such as:
                  </p>
                  <ul className="space-y-2">
                    <li>{checkIcon}Data storage providers.</li>
                    <li>
                      {checkIcon}Network monitoring and security solution
                      vendors.
                    </li>
                    <li>{checkIcon}Cloud service providers.</li>
                  </ul>
                  <p className="mt-2">
                    These third parties are bound by confidentiality obligations
                    and are required to use the data only for the purposes
                    specified by Logic Viper.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-12">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    b. Legal Obligations
                  </h3>
                  <p>
                    We may disclose your information if required to do so by law
                    or in response to valid legal processes, such as subpoenas,
                    court orders, or regulatory requirements.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-13">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    c. Business Transfers
                  </h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred to the acquiring entity.
                  </p>
                </section>
              </section>

              {/* Data Security */}
              <section id="elementor-toc__heading-anchor-14">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Data Security
                </h2>
                <p>
                  We take data security seriously and implement
                  industry-standard practices to safeguard your information,
                  including:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon}Encryption of sensitive data during transmission
                    and storage.
                  </li>
                  <li>{checkIcon}Regular security assessments and audits.</li>
                  <li>
                    {checkIcon}Access controls to ensure that only authorized
                    personnel can access sensitive information.
                  </li>
                </ul>
                <p className="mt-2">
                  Despite our efforts, no security measure is 100% effective,
                  and we cannot guarantee the absolute security of your data.
                </p>
              </section>

              {/* Data Retention */}
              <section id="elementor-toc__heading-anchor-15">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Data Retention
                </h2>
                <p>
                  We will retain your personal data only as long as necessary to
                  fulfill the purposes outlined in this Privacy Policy or as
                  required by applicable law. When your data is no longer
                  needed, we will securely delete or anonymize it.
                </p>
              </section>

              {/* Your Rights */}
              <section id="elementor-toc__heading-anchor-16">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Your Rights
                </h2>
                <p>
                  As a user of our services, you may have the following rights
                  under applicable data protection laws:
                </p>

                <section id="elementor-toc__heading-anchor-17">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    a. Access and Rectification
                  </h3>
                  <p>
                    You have the right to access the personal data we hold about
                    you and to request correction of any inaccurate or
                    incomplete information.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-18">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    b. Data Portability
                  </h3>
                  <p>
                    You may request a copy of your personal data in a
                    structured, machine-readable format, and you have the right
                    to transmit that data to another data controller.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-19">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    c. Deletion
                  </h3>
                  <p>
                    You have the right to request the deletion of your personal
                    data in certain circumstances, such as when the data is no
                    longer needed for its original purpose.
                  </p>
                </section>

                <section id="elementor-toc__heading-anchor-20">
                  <h3 className="text-[22px] font-bold font-serif my-4">
                    d. Objection and Restriction
                  </h3>
                  <p>
                    You may object to the processing of your personal data or
                    request that we restrict the processing of your data under
                    certain conditions. To exercise any of these rights, please
                    contact us at <b>privacy@logicviper.com</b>.
                  </p>
                </section>
              </section>

              {/* International Data Transfers */}
              <section id="elementor-toc__heading-anchor-21">
                <h2 className="text-2xl font-bold font-serif my-4">
                  International Data Transfers
                </h2>
                <p>
                  As a company operating in West Africa, your personal data may
                  be transferred to and processed in countries outside of your
                  region. Logic Viper ensures that any transfer of data complies
                  with applicable privacy laws, and we implement adequate
                  safeguards, such as standard contractual clauses or other
                  appropriate mechanisms.
                </p>
              </section>

              {/* Changes to This Privacy Policy */}
              <section id="elementor-toc__heading-anchor-22">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our services or legal obligations. We will notify
                  you of any significant changes via email or by posting a
                  notice on our website.
                </p>
              </section>

              {/* Contact Us */}
              <section id="elementor-toc__heading-anchor-23">
                <h2 className="text-2xl font-bold font-serif my-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or complaints regarding
                  this Privacy Policy or our data handling practices, please
                  contact us at:
                </p>
                <p>
                  <b>Logic Viper</b>
                  <br />
                  Email: <b>privacy@logicviper.com</b>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

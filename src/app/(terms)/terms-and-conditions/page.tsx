import React from "react";
import { termsTocItems } from "@/lib/terms/terms";
import TableOfContents from "@/shared/table-of-content/table-of-content";
import { LuCircleCheckBig } from "react-icons/lu";

const Terms = () => {
  const checkIcon = <LuCircleCheckBig className="inline text-green-600 mr-2" />;
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/privacy.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">Logic Viper Terms and Conditions</h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto px-3 bg-white py-10 lg:py-25">
        <div className="px-6 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <TableOfContents tocData={termsTocItems} />
            </div>
            <div className="px-3 font-rubik text-[15px]">
              {/* 0. Effective Date */}
              <section
                id="elementor-toc__heading-anchor-0"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Effective Date: September 9, 2024
                </h2>
                <p>
                  Welcome to Logic Viper (“<strong>we</strong>,” “
                  <strong>our</strong>,” or “<strong>us</strong>”). These Terms
                  and Conditions (“<strong>Terms</strong>“) govern your access
                  to and use of our managed security services, IT services,
                  software solutions, and our website (
                  <a
                    href="https://vicez-oz.com/home/"
                    className="text-[#75BDA7] underline"
                  >
                    www.vicez-oz.com
                  </a>
                  ). By using our services, you agree to comply with these
                  Terms.
                </p>
                <p>
                  Please read these Terms carefully before engaging in any
                  service provided by Logic Viper.
                </p>
              </section>

              {/* 1. Acceptance of Terms */}
              <section
                id="elementor-toc__heading-anchor-1"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Acceptance of Terms
                </h2>
                <p>
                  By accessing or using our services, you agree to be bound by
                  these Terms and any applicable laws or regulations. If you do
                  not agree to these Terms, you should not use our services.
                </p>
              </section>

              {/* 2. Definitions */}
              <section
                id="elementor-toc__heading-anchor-2"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Definitions
                </h2>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} <b>"Services"</b> refers to the managed security
                    services, IT services, consultancy, software, and any other
                    cybersecurity or IT-related solutions provided by Logic
                    Viper.
                  </li>
                  <li>
                    {checkIcon} <b>"Client"</b> refers to any individual,
                    company, or organization using our services.
                  </li>
                  <li>
                    {checkIcon} <b>"User"</b> refers to anyone who visits our
                    website or engages with our services.
                  </li>
                  <li>
                    {checkIcon} <b>"Personal Data"</b> means any information
                    that identifies or can be used to identify an individual.
                  </li>
                </ul>
              </section>

              {/* 3. Scope of Services */}
              <section
                id="elementor-toc__heading-anchor-3"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Scope of Services
                </h2>
                <p>
                  Logic Viper provides a range of managed security services and
                  IT services, including but not limited to:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Cybersecurity monitoring and incident response.
                  </li>
                  <li>
                    {checkIcon} Threat intelligence, detection, and mitigation.
                  </li>
                  <li>
                    {checkIcon} Vulnerability assessments and penetration
                    testing.
                  </li>
                  <li>
                    {checkIcon} Compliance management and consultancy services
                    (e.g., ISO 27001, GDPR).
                  </li>
                  <li>{checkIcon} IT infrastructure setup and support.</li>
                  <li>{checkIcon} Network management and administration.</li>
                  <li>{checkIcon} IT consulting and project management.</li>
                  <li>
                    {checkIcon} Cloud solutions, including migration and
                    management.
                  </li>
                  <li>
                    {checkIcon} Data backup, disaster recovery, and business
                    continuity planning.
                  </li>
                </ul>
                <p className="mt-2">
                  Our services are provided on an “as-is” and “as-available”
                  basis and may vary based on your subscription level, service
                  package, or contract agreement.
                </p>
              </section>

              {/* 4. Client Obligations */}
              <section
                id="elementor-toc__heading-anchor-4"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Client Obligations
                </h2>
                <p>By using Logic Viper’s services, you agree to:</p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Provide accurate, complete, and up-to-date
                    information as required for us to perform our services.
                  </li>
                  <li>
                    {checkIcon} Cooperate fully with Logic Viper in the
                    provision of services, including granting us necessary
                    access to your systems, networks, and IT infrastructure.
                  </li>
                  <li>
                    {checkIcon} Follow all reasonable security and IT best
                    practices and recommendations provided by Logic Viper.
                  </li>
                  <li>
                    {checkIcon} Ensure that your systems and devices meet the
                    minimum security and technical standards outlined in the
                    service agreement.
                  </li>
                </ul>
              </section>

              {/* 5. Service Limitations */}
              <section
                id="elementor-toc__heading-anchor-5"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Service Limitations
                </h2>
                <p>
                  While Logic Viper strives to provide the highest level of
                  service, we cannot guarantee that:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Our services will completely eliminate all risks
                    or prevent all cyber threats or IT issues.
                  </li>
                  <li>
                    {checkIcon} Our security and IT measures will protect
                    against unforeseeable threats or technical problems.
                  </li>
                </ul>
                <p className="mt-2">
                  Clients are responsible for implementing complementary
                  security and IT management measures, such as employee
                  training, regular backups, and internal policies, to ensure a
                  holistic security and IT strategy.
                </p>
              </section>

              {/* 6. Fees and Payment Terms */}
              <section
                id="elementor-toc__heading-anchor-6"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Fees and Payment Terms
                </h2>
                <p>
                  All fees for our services are detailed in your service
                  agreement. Payments must be made in full by the due date
                  specified in your invoice unless otherwise agreed in writing.
                </p>
                <ul className="space-y-2 mt-2">
                  <li>
                    {checkIcon} <b>Late Payments:</b> If payments are not
                    received within the specified time, Logic Viper reserves the
                    right to suspend or terminate services until payment is
                    made.
                  </li>
                  <li>
                    {checkIcon} <b>Currency:</b> All payments must be made in
                    the currency specified in the agreement (usually US dollars
                    or local currency applicable to your region).
                  </li>
                </ul>
                <p className="mt-2">
                  Clients are responsible for any additional taxes, fees, or
                  charges related to payment processing.
                </p>
              </section>

              {/* 7. Service Availability and Downtime */}
              <section
                id="elementor-toc__heading-anchor-7"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Service Availability and Downtime
                </h2>
                <p>
                  Logic Viper endeavors to provide uninterrupted services but
                  cannot guarantee that services will be available at all times.
                  We are not responsible for any loss or damage caused by
                  service interruptions, downtimes, or delays due to:
                </p>
                <ul className="space-y-2">
                  <li>{checkIcon} Scheduled maintenance or updates.</li>
                  <li>
                    {checkIcon} Unforeseen technical issues, IT failures, or
                    network outages.
                  </li>
                </ul>
                <p className="mt-2">
                  Logic Viper will make reasonable efforts to notify clients of
                  any planned downtimes or service disruptions.
                </p>
              </section>

              {/* 8. Confidentiality and Data Protection */}
              <section
                id="elementor-toc__heading-anchor-8"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Confidentiality and Data Protection
                </h2>
                <p>
                  Logic Viper is committed to protecting your data. Both parties
                  agree to maintain the confidentiality of any sensitive
                  information shared during the provision of services. Personal
                  data will be collected, used, and processed in accordance with
                  our{" "}
                  <a
                    href="https://vicez-oz.com/privacy-policy/"
                    className="text-blue-600 underline"
                  >
                    <b>Privacy Policy</b>
                  </a>
                  .
                </p>
                <p>
                  Clients agree not to share any confidential information of
                  Logic Viper, including pricing details, proprietary tools, or
                  methodologies, with any third parties without prior written
                  consent.
                </p>
              </section>

              {/* 9. Intellectual Property */}
              <section
                id="elementor-toc__heading-anchor-9"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Intellectual Property
                </h2>
                <p>
                  All intellectual property rights, including trademarks,
                  service marks, copyrights, proprietary technologies, and IT
                  solutions provided by Logic Viper, remain the property of
                  Logic Viper. Clients are granted a non-exclusive, limited
                  license to use our services as specified in the service
                  agreement.
                </p>
                <p>Clients may not:</p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Reverse engineer, modify, or distribute Logic
                    Viper’s intellectual property.
                  </li>
                  <li>
                    {checkIcon} Use our intellectual property for purposes
                    outside the scope of the service agreement.
                  </li>
                </ul>
              </section>

              {/* 10. Limitation of Liability */}
              <section
                id="elementor-toc__heading-anchor-10"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Logic Viper will not
                  be liable for:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Any indirect, incidental, special, or
                    consequential damages arising from the use of our services,
                    even if advised of the possibility of such damages.
                  </li>
                  <li>
                    {checkIcon} Loss of profits, business opportunities,
                    goodwill, data, or IT infrastructure resulting from the use
                    of or inability to use our services.
                  </li>
                </ul>
                <p className="mt-2">
                  Our liability, in any case, is limited to the amount paid for
                  the services in the twelve (12) months preceding the claim.
                </p>
              </section>

              {/* 11. Indemnification */}
              <section
                id="elementor-toc__heading-anchor-11"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Indemnification
                </h2>
                <p>
                  Clients agree to indemnify and hold Logic Viper, its
                  employees, officers, and affiliates harmless from any claims,
                  liabilities, losses, or damages arising from:
                </p>
                <ul className="space-y-2">
                  <li>{checkIcon} A breach of these Terms by the client.</li>
                  <li>
                    {checkIcon} Client’s misuse or unauthorized use of our
                    services, IT systems, or network infrastructure.
                  </li>
                  <li>
                    {checkIcon} Any third-party claims arising from the client's
                    actions, including cyber-attacks or IT malfunctions caused
                    by client negligence.
                  </li>
                </ul>
              </section>

              {/* 12. Termination of Services */}
              <section
                id="elementor-toc__heading-anchor-12"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Termination of Services
                </h2>
                <p>
                  Either party may terminate the service agreement by providing
                  30 days written notice. Upon termination:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Clients must immediately cease using our
                    services and return any Logic Viper materials.
                  </li>
                  <li>
                    {checkIcon} Logic Viper may disable access to its services,
                    IT systems, and tools provided to the client.
                  </li>
                </ul>
                <p className="mt-2">
                  Logic Viper reserves the right to terminate or suspend
                  services immediately, without prior notice, in the case of a
                  breach of these Terms, non-payment, or illegal activity
                  detected in the client’s IT environment.
                </p>
              </section>

              {/* 13. IT Infrastructure and Equipment */}
              <section
                id="elementor-toc__heading-anchor-13"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  IT Infrastructure and Equipment
                </h2>
                <p>
                  Where Logic Viper provides hardware, software, or IT
                  infrastructure as part of the service agreement:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} The client is responsible for ensuring that all
                    equipment is used in accordance with the provided
                    instructions and that no unauthorized alterations are made.
                  </li>
                  <li>
                    {checkIcon} Logic Viper remains the owner of any loaned or
                    leased equipment unless otherwise specified in the contract.
                    The client agrees to return any such equipment upon
                    termination of the contract or upon request.
                  </li>
                </ul>
              </section>

              {/* 14. Force Majeure */}
              <section
                id="elementor-toc__heading-anchor-14"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Force Majeure
                </h2>
                <p>
                  Logic Viper will not be held liable for delays or failures in
                  performance due to events beyond its reasonable control, such
                  as:
                </p>
                <ul className="space-y-2">
                  <li>
                    {checkIcon} Natural disasters, pandemics, or extreme weather
                    conditions.
                  </li>
                  <li>
                    {checkIcon} Power outages, internet disruptions, or
                    third-party provider failures.
                  </li>
                  <li>
                    {checkIcon} Acts of war, terrorism, or civil disturbances.
                  </li>
                </ul>
              </section>

              {/* 15. Governing Law and Jurisdiction */}
              <section
                id="elementor-toc__heading-anchor-15"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Governing Law and Jurisdiction
                </h2>
                <p>
                  These Terms and any disputes arising from them will be
                  governed by the laws of “Nigeria” or “Ghana”, without regard
                  to its conflict of laws principles.
                </p>
                <p>
                  Any legal action or proceeding related to the use of our
                  services shall be brought exclusively in the courts of
                  “Nigeria” or “Ghana”.
                </p>
              </section>

              {/* 16. Modifications to the Terms */}
              <section
                id="elementor-toc__heading-anchor-16"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Modifications to the Terms
                </h2>
                <p>
                  Logic Viper reserves the right to modify these Terms at any
                  time. Changes will be posted on our website, and continued use
                  of our services constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* 17. Contact Us */}
              <section
                id="elementor-toc__heading-anchor-17"
                className="scroll-mt-20"
              >
                <h2 className="text-2xl font-bold font-serif my-4">
                  Contact Us
                </h2>
                <p>
                  If you have any questions or concerns regarding these Terms,
                  please contact us at:
                </p>
                <p>
                  <b>Logic Viper</b>
                  <br />
                  Email: <b>support@vicez-oz.com</b>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

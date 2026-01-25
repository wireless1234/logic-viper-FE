"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const InnovativeElectronicProtection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="h-[47vh] bg-[url('/images/protection.webp')] bg-cover bg-no-repeat bg-center relative">
        <div className="absolute  w-full h-full font-serif bg-black/50 text-center text-white text-[35px] md:text-[50px] lg:text-[65px] font-bold flex items-center justify-center">
          <h1 className="mt-36">
            Innovative Electronic Protection for Office and Home Control Online
          </h1>
        </div>
      </div>
      <div className=" max-w-330 mx-auto lg:px-3 bg-white ">
        <div className="md:px-6 xl:px-0">
          <div className="flex justify-center lg:hidden py-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <IoMdClose size={28} />
              ) : (
                <CgMenuRight size={28} className="text-[#75BDA7]" />
              )}
            </button>
          </div>
          <div
            className={`
              ${menuOpen ? "flex" : "hidden"}
              flex-col gap-4 py-6
              lg:flex lg:flex-row lg:gap-6 lg:py-7
              justify-center items-center bg-black text-white lg:bg-white lg:text-black
            `}
          >
            <Link
              href="#intercom"
              className="px-5 py-3 hover:border-b hover:text-[#75BDA7] transition-colors duration-300 ease-in-out border-black"
            >
              Intercom Systems
            </Link>
            <Link
              href="#cctv"
              className="px-5 py-3 hover:border-b hover:text-[#75BDA7] transition-colors duration-300 ease-in-out border-black"
            >
              CCTV Surveillance
            </Link>
            <Link
              href="#gdpr"
              className="px-5 py-3 hover:border-b hover:text-[#75BDA7] transition-colors duration-300 ease-in-out border-black"
            >
              GDPR Compliance
            </Link>
            <Link
              href="#encryption"
              className="px-5 py-3 hover:border-b hover:text-[#75BDA7] transition-colors duration-300 ease-in-out border-black"
            >
              Encryption
            </Link>
          </div>
          <div className=" space-y-20 py-10 lg:py-25">
            <div className="grid lg:grid-cols-2">
              <div className="flex px-6 md:px-0 items-center">
                <div className="space-y-2.5 text-sm font-rubik">
                  <h2 className="text-[50px] leading-13 font-serif font-extrabold">
                    Our Goal
                  </h2>
                  <p>
                    At Logic Viper, our goal is to deliver top-quality security
                    services by using trusted products from reputable vendors.
                    We offer advanced electronic security solutions such as
                    intercom systems, CCTV surveillance, and online control,
                    tailored to protect both offices and homes.
                  </p>
                  <p>
                    Security is more than a service it’s peace of mind. We
                    believe in providing intelligent protection that empowers
                    you to control your environment with ease, whether it’s your
                    home, business, or data. In a rapidly evolving world of
                    constant connectivity and new threats, Logic Viper stays
                    ahead by offering cutting-edge solutions that exceed
                    industry standards. Our systems blend security with
                    simplicity, making it easy for anyone to monitor and manage
                    their spaces.
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-end">
                <div className="relative w-full max-w-[546px] aspect-[546/364] rounded overflow-hidden">
                  <Image
                    src="/images/goal.webp"
                    alt="gov"
                    fill
                    sizes="(max-width: 1024px) 100vw, 505px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <section id="intercom" className="grid lg:grid-cols-2">
              <div className="flex justify-end">
                <div className="relative w-full  aspect-video rounded overflow-hidden">
                  <Image
                    src="/images/intercom.webp"
                    alt="gov"
                    fill
                    sizes="(max-width: 1024px) 100vw, 505px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex px-6 md:px-0 items-center">
                <div className="space-y-2.5 text-sm font-rubik pl-12">
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Intercom Systems: Seamless Communication and Security
                  </h2>
                  <p>
                    Communication plays a critical role in any secure
                    environment, and our <strong>Intercom Systems</strong> are
                    built to provide real-time, secure communication solutions
                    that enhance your overall security.
                  </p>
                  <p>
                    Whether for corporate offices, residential complexes, or
                    private homes, our intercom systems allow you to connect
                    instantly with all areas of your property. These systems are
                    equipped with both audio and video features, enabling you to
                    see and speak with visitors before granting them access.
                    This real-time, two-way communication reduces the risk of
                    unauthorized access and enhances the overall safety of your
                    premises.
                  </p>
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Key Benefits of Our Intercom Systems:
                  </h2>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Two-Way Communication:</strong> Clear and secure
                      audio communication, reducing unauthorized entry risks.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Visual Confirmation:</strong> Video capability for
                      instant visual confirmation of visitors.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Remote Management:</strong> Easily manage who
                      enters your property, even if you’re away, using mobile
                      integration.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Versatility:</strong> Ideal for various
                      environments like corporate buildings, gated communities,
                      and private residences.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Scalability:</strong> Adaptable to large
                      properties with multiple access points.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id="cctv" className="grid lg:grid-cols-2">
              <div className="flex justify-end">
                <div className="relative w-full  aspect-video rounded overflow-hidden">
                  <Image
                    src="/images/cctv.webp"
                    alt="gov"
                    fill
                    sizes="(max-width: 1024px) 100vw, 505px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex px-6 md:px-0 items-center">
                <div className="space-y-2.5 text-sm font-rubik pl-12">
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    CCTV Surveillance: Always On, Always Protecting
                  </h2>
                  <p>
                    With rising security concerns, real-time surveillance has
                    become an essential tool for safeguarding any property. Our
                    state-of-the-art <strong>CCTV Systems</strong> offer
                    high-definition, crystal-clear monitoring, allowing you to
                    keep a constant eye on your premises, whether it’s a
                    bustling commercial space or a secluded home..
                  </p>
                  <p>
                    Our surveillance systems are designed with advanced features
                    like <strong>night vision, motion detection</strong>, and{" "}
                    <strong>remote monitoring</strong> through our mobile app.
                    This ensures you have eyes on your property 24/7, providing
                    round-the-clock protection.
                  </p>
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Key Solutions:
                  </h2>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>High-Definition Video:</strong> Capture every
                      detail with crystal-clear footage.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Night Vision:</strong> Advanced night vision
                      ensures your property is protected even in complete
                      darkness.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Motion Detection Alerts:</strong> Receive instant
                      alerts when unusual activity is detected.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Remote Access:</strong> Monitor live feeds and
                      review footage through our mobile app from anywhere in the
                      world.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Integration with Other Systems:</strong>{" "}
                      Seamlessly connect CCTV with other systems like alarms and
                      intercoms for a fully connected security network.
                    </p>
                  </div>
                  <p className="mt-3">
                    These systems aren’t just for passive monitoring. Our CCTV
                    solutions offer <strong>proactive</strong> security by
                    sending you real-time notifications when motion is detected
                    in critical areas, allowing you to take immediate action.
                  </p>
                </div>
              </div>
            </section>
            <section id="gdpr" className="grid lg:grid-cols-2">
              <div className="flex  justify-end">
                <div className="relative w-full  aspect-video rounded overflow-hidden">
                  <Image
                    src="/images/gov.webp"
                    alt="gov"
                    fill
                    sizes="(max-width: 1024px) 100vw, 505px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex px-6 md:px-0 items-center">
                <div className="space-y-2.5 text-sm font-rubik pl-12">
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    GDPR Compliance: Protecting Your Privacy and Data
                  </h2>
                  <p>
                    Security today involves more than just physical safety data
                    security has become equally critical. At Logic Viper, we
                    recognize the importance of protecting your sensitive
                    information, especially in the face of rising cyber threats.
                    Our systems are designed with{" "}
                    <strong>GDPR compliance</strong> in mind, ensuring that
                    whether it’s customer data, financial records, or private
                    communications, all your information is stored and processed
                    securely.
                  </p>

                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Our Approach to Data Privacy:
                  </h2>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Data Encryption:</strong> We use advanced
                      encryption protocols to secure your data, ensuring only
                      authorized personnel have access.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Cloud Storage Security:</strong> Store your video
                      and communication records in the cloud with confidence,
                      knowing they’re encrypted and protected from unauthorized
                      access.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Comprehensive Audit Trails:</strong> Keep track of
                      who accessed data and when, ensuring accountability and
                      transparency in how your information is handled.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Regular Compliance Updates:</strong> Our systems
                      are continuously updated to meet evolving data protection
                      regulations, ensuring your business stays compliant with
                      the latest standards.
                    </p>
                  </div>

                  <p className="mt-3">
                    GDPR compliance is more than just a legal requirement; it’s
                    about building trust with your customers, tenants, and
                    partners. With Logic Viper’s systems, you can ensure that
                    your data handling practices inspire confidence and peace of
                    mind.
                  </p>
                </div>
              </div>
            </section>
            <section id="encryption" className="grid lg:grid-cols-2">
              <div className="flex justify-end">
                <div className="relative w-full  aspect-video rounded overflow-hidden">
                  <Image
                    src="/images/encrypt.webp"
                    alt="gov"
                    fill
                    sizes="(max-width: 1024px) 100vw, 505px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex px-6 md:px-0 items-center">
                <div className="space-y-2.5 text-sm font-rubik pl-12">
                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Encryption: Securing Your Data in the Digital Age
                  </h2>
                  <p>
                    As businesses and individuals store more and more sensitive
                    information digitally, the risk of data breaches and
                    cyber-attacks has never been higher. At Logic Viper, we
                    integrate <strong>advanced encryption technologies</strong>{" "}
                    into all of our systems to safeguard your digital assets.
                    Whether it’s video footage from your CCTV system, logs from
                    your intercom system, or other sensitive information,
                    everything is encrypted, protecting it from unauthorized
                    access.
                  </p>

                  <h2 className="text-[35px] leading-13 font-serif font-extrabold">
                    Benefits of our Encryption System:
                  </h2>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>End-to-End Encryption:</strong> From the moment
                      data is captured to when it is stored or transmitted, it
                      is encrypted, ensuring it’s secure throughout the process.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Protection Against Cyber Threats:</strong> Our
                      encryption systems defend against hackers and other
                      digital threats, safeguarding even the most sensitive
                      data.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoMdCheckmarkCircleOutline className="text-xl text-[#75bda7]" />
                    <p>
                      <strong>Real-Time Security Alerts:</strong> In the event
                      of a breach attempt, our systems alert you immediately,
                      enabling you to take quick action to mitigate the threat.
                    </p>
                  </div>

                  <p className="mt-3">
                    This approach is especially important for businesses that
                    deal with confidential client information, financial data,
                    or other sensitive materials. With Logic Viper, your data is
                    always secure.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovativeElectronicProtection;

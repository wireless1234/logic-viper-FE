"use client";
import React, { useEffect, useRef, useState } from "react";

type Tab = {
  title: string;
  content: React.ReactNode;
};

const tabs: Tab[] = [
  {
    title: "Intercom System",
    content: (
      <>
        <p className="font-bold text-white mb-3.75">
          Intercom Systems: Seamless Communication and Security
        </p>
        <p className="mt-2 text-white">
          Communication plays a critical role in any secure environment, and our
          <strong> Intercom Systems</strong> provide real-time, secure
          communication solutions that enhance your overall security.
        </p>
        <div className="mt-8"></div>
        <a
          href="innovative-electronic-protection/"
          className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-[#75bda7] shadow-inner group mt-5"
        >
          {/* Left fill */}
          <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Right fill */}
          <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Final overlay */}
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>

          {/* Text */}
          <span className="relative text-white transition-colors duration-300 delay-200 group-hover:text-white">
            Read More
          </span>
        </a>
      </>
    ),
  },
  {
    title: "CCTV",
    content: (
      <>
        <p className="font-bold mb-3.75 text-white">
          CCTV Surveillance: Always On, Always Protecting
        </p>
        <p className="mt-2 text-white">
          With rising security concerns, real-time surveillance has become an
          essential tool for safeguarding any property. Our state-of-the-art{" "}
          <strong>CCTV Systems</strong> offer high-definition, crystal-clear
          monitoring, allowing you to keep a constant eye on your premises,
          whether it's a bustling commercial space or a secluded home.
        </p>
        <div className="mt-8"></div>
        <a
          href="/innovative-electronic-protection/"
          className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-[#75bda7] shadow-inner group mt-5"
        >
          {/* Left fill */}
          <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Right fill */}
          <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Final overlay */}
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>

          {/* Text */}
          <span className="relative text-white transition-colors duration-300 delay-200 group-hover:text-white">
            Read More
          </span>
        </a>
      </>
    ),
  },
  {
    title: "GDPR",
    content: (
      <>
        <p className="font-bold mb-3.75 text-white">
          GDPR Compliance: Protecting Your Privacy and Data
        </p>
        <p className="mt-2 text-white">
          Security today involves more than just physical safety—data security
          has become equally critical. At Logic Viper, we recognize the
          importance of protecting your sensitive information, especially in the
          face of rising cyber threats. Our systems are designed with{" "}
          <strong>GDPR compliance</strong> in mind, ensuring that whether it's
          customer data, financial records, or private communications, all your
          information is stored and processed securely.
        </p>
        <div className="mt-8"></div>
        <a
          href="/innovative-electronic-protection/"
          className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-[#75bda7] shadow-inner group mt-5"
        >
          {/* Left fill */}
          <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Right fill */}
          <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Final overlay */}
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>

          {/* Text */}
          <span className="relative text-white transition-colors duration-300 delay-200 group-hover:text-white">
            Read More
          </span>
        </a>
      </>
    ),
  },
  {
    title: "Encryption",
    content: (
      <>
        <p className="font-bold mb-3.75 text-white">
          Encryption: Securing Your Data in the Digital Age
        </p>
        <p className="mt-2 text-white">
          As businesses and individuals store more and more sensitive
          information digitally, the risk of data breaches and cyber-attacks has
          never been higher. At Logic Viper, we integrate{" "}
          <strong>advanced encryption technologies</strong> into all of our
          systems to safeguard your digital assets. Whether it's video footage
          from your CCTV system, logs from your intercom system, or other
          sensitive information, everything is encrypted, protecting it from
          unauthorized access.
        </p>
        <div className="mt-8"></div>
        <a
          href="/innovative-electronic-protection/"
          className="relative px-7.5 py-2.5 overflow-hidden font-medium text-gray-600 bg-[#75bda7] shadow-inner group mt-5"
        >
          {/* Left fill */}
          <span className="absolute top-0 left-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Right fill */}
          <span className="absolute top-0 right-0 h-full w-0 transition-all duration-300 delay-200 bg-black group-hover:w-1/2"></span>

          {/* Final overlay */}
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"></span>

          {/* Text */}
          <span className="relative text-white transition-colors duration-300 delay-200 group-hover:text-white">
            Read More
          </span>
        </a>
      </>
    ),
  },
];

export default function SlidingTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const tabsRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tabsRef.current || !indicatorRef.current) return;

    const activeTab = tabsRef.current.children[activeIndex] as HTMLElement;

    indicatorRef.current.style.width = `${activeTab.offsetWidth}px`;
    indicatorRef.current.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  }, [activeIndex]);

  return (
    <div className="w-full my-auto">
      <ul
        ref={tabsRef}
        className="relative flex gap-10 border-b border-gray-200"
      >
        {tabs.map((tab, index) => (
          <li
            key={tab.title}
            onClick={() => {
              if (index === activeIndex) return;

              setDirection(index > activeIndex ? "forward" : "backward");
              setPrevIndex(activeIndex);
              setActiveIndex(index);
            }}
            className={`pb-3 cursor-pointer select-none text-sm font-semibold font-serif-display transition-colors duration-300 ease-in-out
              ${activeIndex === index ? "text-[#75bda7]" : "text-white"}
            `}
          >
            {tab.title}
          </li>
        ))}

        <div
          ref={indicatorRef}
          className="absolute -bottom-px left-0 h-0.5 bg-[#75bda7] transition-all duration-300 ease-in-out"
        />
      </ul>

      {/* Content stack */}
      <div className="relative mt-6 overflow-hidden min-h-96 lg:min-h-75">
        {/* Outgoing */}
        {prevIndex !== null && (
          <div
            className={`absolute w-full
              ${
                direction === "forward"
                  ? "animate-slideOutUp"
                  : "animate-slideOutDown"
              }
            `}
            onAnimationEnd={() => setPrevIndex(null)}
          >
            {tabs[prevIndex].content}
          </div>
        )}

        {/* Incoming */}
        <div
          key={activeIndex}
          className={`absolute w-full
            ${
              direction === "forward"
                ? "animate-slideInUp"
                : "animate-slideInDown"
            }
          `}
        >
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
}

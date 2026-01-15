import React from "react";
import { IoRocket } from "react-icons/io5";
import { ImEye } from "react-icons/im";
import { FaRegHandshake } from "react-icons/fa";

const data = [
  {
    key: "mission",
    icon: <IoRocket />,
    title: "Mission",
    description:
      "At Logic Viper, our mission is simple yet critical: to deliver cutting-edge cybersecurity services that protect and secure our clients’ digital landscapes. We are dedicated to ensuring that our clients can focus on what they do best—running their businesses—while we take care of the rest.",
  },
  {
    key: "vision",
    icon: <ImEye />,
    title: "Vision",
    description:
      "We envision a future where businesses can operate freely and securely in the digital realm, unburdened by the constant threat of cyberattacks. By continually evolving and expanding our services, we strive to set new standards in cybersecurity excellence and become the go-to MSSP for organizations worldwide.",
  },
  {
    key: "coreValues",
    icon: <FaRegHandshake />,
    title: "Core Values",
    values: [
      {
        title: "Excellence",
        description:
          "Striving for excellence in every aspect of our services, setting high standards for ourselves.",
      },
      {
        title: "Client-Centric Approach",
        description:
          "Placing clients at the core of our operations, understanding their needs, and delivering tailored solutions.",
      },
      {
        title: "Innovation",
        description:
          "Embracing emerging technologies and innovative approaches to stay ahead in the dynamic field of cybersecurity.",
      },
    ],
  },
];

const Mission = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map((item, i) => (
        <div
          key={item.key}
          className="
            mx-3
            relative
            bg-[#140f14]
            p-7.5
            overflow-hidden
            h-fit
            group
          "
        >
          {/* Animated overlay */}
          <span
            className="
              absolute inset-y-0 left-0
              w-0
              bg-linear-to-br from-[#75BDA7] to-[#3494BA]
              opacity-90
              transition-all duration-300 ease-out
              group-hover:w-full
              z-0
            "
          />

          {/* Foreground content */}
          <div className="relative z-20">
            <div className="text-white font-semibold mb-1.5 transition-colors">
              <div
                className="
                  mb-3.75
                  text-2xl
                  aspect-square
                  size-12.5
                  flex
                  justify-center
                  items-center
                  rounded-full
                  bg-linear-to-br from-[#75BDA7] to-[#3494BA]
                  transition-colors duration-300
                  transform-gpu
                  group-hover:animate-[spinY3_0.9s_ease-in-out]
                  group-hover:from-white
                  group-hover:to-white
                  group-hover:text-[#75BDA7]
                "
              >
                {item.icon}
              </div>

              <h3 className="text-[20px] font-serif">{item.title}</h3>
            </div>

            {/* Mission / Vision */}
            {item.description && (
              <p className="text-[15px] text-white text-justify font-rubik">
                {item.description}
              </p>
            )}

            {/* Core Values */}
            {item.values && (
              <ul className="mt-3 space-y-2 text-white font-rubik">
                {item.values.map((value, idx) => (
                  <li key={idx}>
                    <span className="font-semibold">{value.title}:</span>{" "}
                    <span className="text-[15px]">{value.description}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mission;

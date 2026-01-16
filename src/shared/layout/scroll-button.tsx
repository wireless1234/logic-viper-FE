"use client";

import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="
        fixed
        bottom-6
        right-6
        z-50
        rounded-full
        text-[#75bda7]
        bg-white
        text-white
        shadow-lg
        
        transition
      "
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowAltCircleUp size={40} className="text-[#75bda7]" />
    </button>
  );
}

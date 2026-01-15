"use client";

import { useEffect, useState } from "react";
import { TocItem } from "../../types/tocTypes";
import { IoIosArrowUp } from "react-icons/io";

interface TableOfContentsProps {
  tocData: TocItem[];
}

export default function TableOfContents({ tocData }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    tocData.forEach(({ id, children }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
      // Also observe children
      children?.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, [tocData]);

  const renderTocItems = (items: TocItem[], level = 0, parentIndex = "") => {
    return (
      <ol className={`space-y-2 ${level > 0 ? "pl-5 mt-2" : ""}`}>
        {items.map((item, index) => {
          const numbering = parentIndex
            ? `${parentIndex}.${index + 1}`
            : `${index + 1}`;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block transition-colors ${
                  activeId === item.id
                    ? "text-[#7cc0ab] font-medium"
                    : "text-white hover:text-[#7cc0ab]"
                }`}
              >
                {numbering}. {item.label}
              </a>
              {item.children &&
                renderTocItems(item.children, level + 1, numbering)}
            </li>
          );
        })}
      </ol>
    );
  };

  return (
    <aside
      className="
        sticky
        top-[100px]
        w-[400px]
        hidden
        lg:block
        border
        shadow-sm
        border-[#7cc0ab]
        bg-[#0F0E1B]
        text-white
      "
    >
      <button
        onClick={() => setShow(!show)}
        className="flex w-full items-center border-t border-b border-[#7cc0ab] justify-between"
      >
        <h4 className="font-bold py-4 px-5 font-serif text-[26px] text-white">
          Table of Contents
        </h4>
        <IoIosArrowUp
          className={`text-2xl mr-5 text-white transition-transform ${
            show ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>

      {show && (
        <div className="p-5 font-rubik text-sm">{renderTocItems(tocData)}</div>
      )}
    </aside>
  );
}

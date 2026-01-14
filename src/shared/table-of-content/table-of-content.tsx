"use client";

import { useEffect, useState } from "react";
import { TocItem } from "../../types/tocTypes";

interface TableOfContentsProps {
  tocData: TocItem[];
}

export default function TableOfContents({ tocData }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

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

    tocData.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className="
        sticky
        top-[100px]
        w-[400px]
        hidden
        lg:block
        bg-white
        border
        rounded-lg
        shadow-sm
        p-5
      "
    >
      <h4 className="font-semibold mb-4">Table of Contents</h4>

      <ol className="space-y-2 text-sm">
        {tocData.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block transition-colors ${
                activeId === item.id
                  ? "text-[#7cc0ab] font-medium"
                  : "text-gray-700 hover:text-[#7cc0ab]"
              }`}
            >
              {index + 1}. {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

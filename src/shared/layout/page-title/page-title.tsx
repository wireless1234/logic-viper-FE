"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const formatLabel = (value: string) => {
  const decoded = decodeURIComponent(value);

  return decoded
    .replace(/\+/g, " ")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function PageTitle() {
  const pathname = usePathname();

  const segments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  const breadcrumbs = useMemo(
    () =>
      segments.map((segment, index) => ({
        label: formatLabel(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
      })),
    [segments]
  );

  const pageName = breadcrumbs.at(-1)?.label ?? "Home";
  return (
    <div className="bg-[#0f0e1b] h-[60vh] py-37.5">
      <div className="flex items-end justify-center h-full px-4">
        <div className="text-center text-white">
          <h1 className="text-[40px] font-bold mb-3.75 font-serif">
            {pageName}
          </h1>

          <nav aria-label="Breadcrumb">
            <ol className="flex justify-center text-sm text-gray-400">
              <li>
                <Link href="/" className="text-[#75bda7] hover:underline">
                  Home
                </Link>
              </li>

              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center">
                  <span className="mx-2" aria-hidden>
                    »
                  </span>

                  {index === breadcrumbs.length - 1 ? (
                    <span aria-current="page">{crumb.label}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="text-[#75bda7] hover:underline"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

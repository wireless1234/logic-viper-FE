"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const formatLabel = (value: string) => {
  const decoded = decodeURIComponent(value);

  return decoded
    .replace(/\+/g, " ")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export default function PageTitle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ProductNameRaw = searchParams.get("name") || "";

  // Clean the product name (remove trailing "}" if any)
  const ProductName = ProductNameRaw.replace(/\}$/, "");

  const segments = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  const breadcrumbs = useMemo(() => {
    // Map all segments except last
    const crumbs = segments.slice(0, -1).map((segment, index) => ({
      label: formatLabel(segment),
      href: "/" + segments.slice(0, index + 1).join("/"),
    }));

    // Add last crumb as ProductName if it exists
    if (ProductName) {
      crumbs.push({
        label: ProductName,
        href: pathname,
      });
    } else if (segments.length > 0) {
      crumbs.push({
        label: formatLabel(segments.at(-1)!),
        href: pathname,
      });
    }

    return crumbs;
  }, [segments, ProductName, pathname]);

  return (
    <div className="bg-[#0f0e1b] h-[58vh] py-37.5">
      <div className="flex items-end justify-center h-full px-4">
        <div className="text-center text-white">
          <h1 className="text-[40px] font-bold mb-3.75 font-serif">
            {breadcrumbs.at(-1)?.label ?? "Home"}
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

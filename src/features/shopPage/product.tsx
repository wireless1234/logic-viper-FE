"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dummyProducts } from "@/lib/productsData";

/* ---------- helpers ---------- */

const formatLabel = (value: string) => {
  const decoded = decodeURIComponent(value);

  return decoded
    .replace(/\+/g, " ")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const normalize = (value: string) =>
  value.toLowerCase().replace(/\+/g, " ").replace(/[-_]/g, " ").trim();

/* ---------- component ---------- */

const Product = () => {
  const pathname = usePathname();

  const segments = React.useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  const breadcrumbs = React.useMemo(
    () =>
      segments.map((segment, index) => ({
        label: formatLabel(segment),
        href: "/" + segments.slice(0, index + 1).join("/"),
      })),
    [segments]
  );

  const lastSegment = segments.at(-1);

  const product = React.useMemo(() => {
    if (!lastSegment) return null;

    return dummyProducts.find(
      (item) =>
        normalize(item.name) === normalize(decodeURIComponent(lastSegment))
    );
  }, [lastSegment]);

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <div className=" max-w-330 mx-auto px-3 bg-white">
      <div className="px-6 xl:px-0">
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            <div className="relative aspect-square">
              <Image
                src={product?.img || ""}
                alt={product?.name || ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-[#0e0129]">
              <h2 className="font-serif font-bold text-3xl ">
                {product?.name}
              </h2>
              <p className="font-semibold text-[19px] font-serif-display">
                ${product?.price}
              </p>
              <p className="font-rubik text-[15px]">description</p>
              <input type="number" />
              <p className="font-rubik">{product?.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

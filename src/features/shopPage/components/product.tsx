"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { dummyProducts } from "@/lib/productsData";

import ProductTabs from "./productsTab";
import { useCart } from "@/context/cartContext";
import RelatedProducts from "./related";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const normalize = (value: string) =>
  value.toLowerCase().replace(/\+/g, " ").replace(/[-_]/g, " ").trim();

/* ---------- component ---------- */

const Product = () => {
  const pathname = usePathname();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const ProductName = searchParams.get("name") || "";

  const product = React.useMemo(() => {
    if (!ProductName) return null;

    return dummyProducts.find(
      (item) => normalize(item.name) === normalize(ProductName)
    );
  }, [ProductName]);

  if (!product) {
    return (
      <div className="w-full py-25">
        <p className="text-center">Product not found, {ProductName}</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        img: product.img,
      },
      quantity
    );
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className=" max-w-330 mx-auto px-3 bg-white">
      <div className="px-6 xl:px-0">
        <div className="">
          {showMessage && (
            <div className="px-7.5 font-rubik text-[15px] py-3.75 flex items-center justify-between border-t-3 border-[#75bda7] bg-[#f6f5f8] mb-7.5">
              <div className="gap-4 flex items-center">
                <FaCircleCheck className="text-[#75bda7]" />
                <p>"{product?.name}" has been added to your cart.</p>
              </div>
              <Link
                href="/cart"
                className="px-6 py-2 bg-[#75bda7] text-gray-700 font-rubik font-bold text-[15px] hover:bg-gray-300 rounded "
              >
                View cart
              </Link>
            </div>
          )}
          <div className="grid grid-cols-2 gap-10 mb-7.5">
            <div className="relative aspect-square">
              <Image
                src={product?.img || ""}
                alt={product?.name || ""}
                fill
                className="object-cover"
              />
              {product?.oldPrice && (
                <div className="absolute flex items-center justify-center font-rubik text-white top-3.75 left-3.75 text-[13px] text-center size-12.5 bg-[#75bda7] rounded-full">
                  Sale!
                </div>
              )}
            </div>
            <div className="text-[#0e0129]">
              <div className="border-b">
                <h2 className="font-serif font-bold text-3xl mb-3.75">
                  {product?.name}
                </h2>
                <hr className="border-2 w-10 rounded-full -mb-0.75 border-[#75bda7]" />
              </div>
              <p className="font-semibold text-[19px] font-rubik mt-3 mb-1.25">
                {product?.oldPrice && (
                  <del className="font-serif-display">
                    {" "}
                    ${product?.oldPrice?.toFixed(2)}
                  </del>
                )}{" "}
                ${(product?.price).toFixed(2)}
              </p>
              <p className="font-rubik text-[15px] mb-3.75">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo.
              </p>
              <p className="font-rubik text-[15px] mb-3.75">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly.
              </p>
              <div className="flex gap-1 max-w-[50%] ">
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border p-[5px] w-1/2"
                />
                <button
                  type="button"
                  className="border py-2.5 px-5.5 w-1/2 font-medium cursor-pointer font-rubik border-[#75bda7] hover:border-black hover:bg-black bg-[#75bda7] text-white transition-colors ease-in-out duration-75"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
              <p className="font-rubik mt-5 text-[#212121]">
                Category:{" "}
                <span className="text-gray-400 hover:text-[#75bda7] cursor-pointer">
                  {product?.category}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <ProductTabs name={product?.name || ""} />
          </div>
          <div className="pt-[35px]">
            <RelatedProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

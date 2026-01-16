import React from "react";
import { dummyProducts } from "@/lib/productsData";
import { IoIosLink } from "react-icons/io";
import { BiSolidStar } from "react-icons/bi";
import { useCart } from "@/context/cartContext";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const RelatedProducts = (props: Props) => {
  const { addToCart, isInCart } = useCart();
  return (
    <div className="w-full">
      <div className="border-b mb-5">
        <h2 className="text-[#0e0129] pb-2.5 text-[25px] font-bold">
          Related products
        </h2>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {dummyProducts.slice(0, 3).map((product, index) => (
          <li
            key={product.id}
            className={`border relative group ${product.id}  ${
              index === 0
                ? "first"
                : index === dummyProducts.length - 1
                ? "last"
                : ""
            } `}
          >
            <div className="single-products">
              <div className="overflow-hidden relative">
                <Link
                  href={`shop/${product.name}`}
                  className="overflow-hidden border-b"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="transition-transform duration-1000 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110 border-b"
                  />
                </Link>
                <div className="absolute flex items-center justify-center invisible group-hover:visible top-0 left-0 w-full h-full bg-black/20">
                  <ul
                    className="   
             
             grid grid-cols-2  gap-2 p-0"
                  >
                    {/* Top-left */}
                    <li className="flex items-start justify-start">
                      <Link
                        href={product.link}
                        className="inline-flex items-center justify-center
                 rounded-full border bg-white p-4
                 hover:text-[#75bda7] hover:bg-[#75bda7] text-white"
                      >
                        <IoIosLink className="scale-x-[-1]" />
                      </Link>
                    </li>

                    {/* Top-right (empty cell to preserve grid) */}
                    <li />

                    {/* Bottom-left */}
                    <li className="flex items-start justify-start">
                      <Link
                        href="/shop/#"
                        className="inline-flex items-center justify-center
                 rounded-full border bg-white p-4
                 text-[#75bda7] hover:bg-[#75bda7] hover:text-white"
                      >
                        <FaRegEye />
                      </Link>
                    </li>

                    {/* Bottom-right */}
                    <li className="flex items-start justify-start">
                      <Link
                        href={`/shop/${product.name}`}
                        className="inline-flex items-center justify-center
                 rounded-full border bg-white p-4
                 text-[#75bda7] hover:bg-[#75bda7] hover:text-white"
                      >
                        <IoIosLink className="scale-x-[-1]" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-7.5 px-3.75">
                <h3 className="mb-3.75 text-[#0e0129] hover:text-[#75bda7] font-bold text-lg font-serif">
                  <Link href={`shop/${product.name}`}>{product.name}</Link>
                </h3>
                <span className="font-bold flex font-rubik items-center gap-2 text-[#0e0129] text-[15px] mb-2.5">
                  {product.oldPrice && (
                    <del aria-hidden="true">
                      <span className="text-[#d80650]">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            $
                          </span>
                          {product.oldPrice.toFixed(2)}
                          {""}
                        </bdi>
                      </span>
                    </del>
                  )}

                  <span className="">
                    <span className="">$</span>
                    {product.price.toFixed(2)}
                  </span>
                </span>
                <ul className="mb-5 flex items-center text-[#eac11d] text-[15px]">
                  {[...Array(5)].map((_, starIndex) => (
                    <li key={starIndex}>
                      <BiSolidStar />
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="border py-2.5 px-5.5 w-full font-medium cursor-pointer font-rubik border-[#75bda7] text-[#75bda7] group-hover:bg-[#75bda7] group-hover:text-white transition-colors ease-in-out duration-75"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: Number(product.price),
                      img: product.img,
                    })
                  }
                >
                  Add to cart
                </button>
                {isInCart(product.id) && (
                  <Link
                    href="/cart"
                    className="py-2.5 px-5.5 w-full font-rubik text-center text-black"
                  >
                    View Cart
                  </Link>
                )}
              </div>
            </div>
            {product.oldPrice && (
              <div className="absolute flex items-center justify-center font-rubik text-white top-3.75 right-3.75 text-[13px] text-center size-12.5 bg-[#75bda7] rounded-full">
                Sale!
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;

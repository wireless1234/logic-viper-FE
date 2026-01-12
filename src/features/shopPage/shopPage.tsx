"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiSolidStar } from "react-icons/bi";
import { useCart } from "@/context/cartContext";
import { useCartDrawer } from "@/context/cartDrawerContext";

type Product = {
  id: number;
  name: string;
  link: string;
  img: string;
  price: number;
  oldPrice?: number;
  category: string;
};

type Props = {
  products: Product[];
};

const Shop = ({ products }: Props) => {
  const [sort, setSort] = useState("menu_order");
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { openCart } = useCartDrawer();

  return (
    <div className=" max-w-330 mx-auto px-3">
      <div className="px-6 xl:px-0">
        <div className="col-lg-12 col-md-12 mx-auto">
          <div className="mb-7.5 py-5 px-7.5 border flex items-center justify-between bg-[#fafafa]">
            <p
              className=""
              role="alert"
              aria-relevant="all"
              aria-hidden="false"
            >
              Showing all {products.length} results
            </p>
            <form className=" py-3 bg-white px-4 border" method="get">
              <select
                name="orderby"
                className="focus:outline-none   "
                aria-label="Shop order"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </form>
          </div>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {products.map((product, index) => (
              <li
                key={product.id}
                className={`border relative group ${product.id}  ${
                  index === 0
                    ? "first"
                    : index === products.length - 1
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
                    <ul className="hidden absolute top-0 left-0 bg-blue-500 group-hover:visible">
                      <li className="product-link">
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target={`#productsModalCenter${product.id}`}
                        >
                          <i className="fa fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href={product.link}>
                          <i className="fa fa-link" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col items-center justify-center py-7.5 px-3.75">
                    <h3 className="mb-3.75 text-[#0e0129] font-bold text-lg font-serif">
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
                      <button
                        type="button"
                        className="py-2.5 px-5.5 w-full font-rubik text-black"
                        onClick={openCart}
                      >
                        View Cart
                      </button>
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
      </div>
    </div>
  );
};

export default Shop;

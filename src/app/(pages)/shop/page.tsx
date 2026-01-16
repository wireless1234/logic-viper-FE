import React from "react";
import Shop from "@/features/shopPage/shopPage";
import { dummyProducts } from "@/lib/productsData";

const ShopPage = () => {
  return (
    <div className="py-25">
      <Shop products={dummyProducts} />
    </div>
  );
};

export default ShopPage;

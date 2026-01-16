import React from "react";
import { Suspense } from "react";
import Product from "@/features/shopPage/components/product";

type Props = {};

const ViewProduct = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading product...</div>}>
      <div className="py-25">
        <Product />
      </div>
    </Suspense>
  );
};

export default ViewProduct;

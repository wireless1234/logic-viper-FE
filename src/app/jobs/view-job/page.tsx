import React, { Suspense } from "react";
import Job from "@/features/job/jobPage";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      <Job />
    </Suspense>
  );
};

export default Page;

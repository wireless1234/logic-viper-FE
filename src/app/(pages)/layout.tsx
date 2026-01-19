import { ReactNode, Suspense } from "react";
import Link from "next/link";
import PageTitle from "@/shared/layout/page-title/page-title";

type Props = {
  children: ReactNode;
};

export default function PagesLayout({ children }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageTitle />
      {children}
    </Suspense>
  );
}

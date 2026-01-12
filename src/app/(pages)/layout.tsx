import { ReactNode } from "react";
import Link from "next/link";
import PageTitle from "@/shared/layout/page-title/page-title";

type Props = {
  children: ReactNode;
};

export default function PagesLayout({ children }: Props) {
  return (
    <>
      <PageTitle />
      {children}
    </>
  );
}

import AdminLayout from "@/components/custom/layout/AdminLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "-------------| Private |--------------",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout>{children}</AdminLayout>;
}

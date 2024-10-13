import Sidebar from "@/components/custom/dashboard/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "-------------| Private |--------------",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-x-auto ">
        <div className="h-12 bg-secondary  shadow "></div>
        <div className=" py-6 ">{children}</div>
      </main>
    </div>
  );
}

import Sidebar from "@/components/custom/dashboard/Sidebar";
import Topbar from "@/components/custom/dashboard/Topbar";
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
      <aside className=" hidden lg:block">
        <Sidebar />
      </aside>
      <main className="flex-1 overflow-x-auto ">
        <Topbar />
        <div className=" py-6 ">{children}</div>
      </main>
    </div>
  );
}

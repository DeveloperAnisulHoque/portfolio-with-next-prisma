import Header from "@/components/custom/layout/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-secondary min-h-screen">
      <Header />

      {children}
    </div>
  );
}

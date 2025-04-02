// import DashboardHeader from "@/components/shared/DashboardHeader";
// import DashboardSidebar from "@/components/shared/DashboardSidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* <DashboardSidebar /> */}
      <div className="flex-1 font-inter flex w-full flex-col overflow-hidden bg-[#ffff]">
        {/* <DashboardHeader /> */}
        <main className="container flex-1 w-full mx-auto overflow-y-scroll bg-[#ffff]">
          {children}
        </main>
      </div>
    </div>
  );
}

import SideBar from "@/components/SideBar/SideBar";
import "./dashboard.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container dashboard-layout">
        <SideBar />
        <div className="main">
            {children}
        </div>
    </main>
  );
}

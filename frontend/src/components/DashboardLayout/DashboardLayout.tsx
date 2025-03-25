import SideBar from "@/components/SideBar/SideBar";
import "./dashboard.css";



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /*  if (isAuth) {
  return (
    <main className="container dashboard-layout">
        <SideBar />
        <div className="main">
            {children}
        </div>
    </main>);}

    else{ return (<main className="container dashboard-layout">
        <SideBar />
        <div className="main">
            {children}
        </div>
    </main>);
    }*/
    return (<main className="container dashboard-layout">
        <SideBar />
        <div className="main">
            {children}
        </div>
    </main>);
}
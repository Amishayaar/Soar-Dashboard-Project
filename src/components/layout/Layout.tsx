import { Navbar } from "./Navbar";
import { SidebarComponent } from "./SidebarComponent";
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex h-screen overflow-hidden">
        <SidebarComponent />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 p-4 bg-[#F5F7FA] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  };
  
  export default Layout;
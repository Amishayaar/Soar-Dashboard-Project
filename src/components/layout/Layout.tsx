import { Navbar } from "./Navbar";
import { SidebarComponent } from "./SidebarComponent";

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
      <div className="flex h-screen ">
        <SidebarComponent />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-4 bg-[#F5F7FA]">
            {children}
          </main>
        </div>
      </div>
    );
  };
  
  export default Layout;
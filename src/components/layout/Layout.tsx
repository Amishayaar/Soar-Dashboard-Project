import { Navbar } from "./Navbar";
import { SidebarComponent } from "./SidebarComponent";
import { ReactNode, useState } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
      <div className="flex h-screen overflow-hidden">
        <SidebarComponent 
            isOpen={isSidebarOpen} 
            onClose={() => setIsSidebarOpen(false)} 
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
          <main className="flex-1 p-4 bg-[#F5F7FA] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  };
  
  export default Layout;
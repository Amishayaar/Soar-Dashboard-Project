import { useState } from "react";
import { Home, CreditCard, BarChart, Settings, User, ArrowRightLeft, HandCoins, Wrench, CircleDollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TaskFill from "../../assets/task.svg";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}
export const SidebarComponent = () => {
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  
  return (
    <div className="w-[200px] h-screen flex flex-col shadow-xl drop-shadow-xl overflow-hidden">
      <div className="flex items-center justify-center py-6">
      <img
                                src={TaskFill}
                                alt="Chip Card"
                                className="h-6 w-6"
                            />
                            
        <span className="text-2xl font-bold text-[#343C6A]">Soar Task</span>
      </div>

      <nav className="flex-1 space-y-2 px-4 overflow-y-auto">
        {[
          { icon: <Home size={20} />, label: "Dashboard",path:"/" },
          { icon: <ArrowRightLeft size={20} />, label: "Transactions" },
          { icon: <User size={20} />, label: "Accounts" },
          { icon: <BarChart size={20} />, label: "Investments" },
          { icon: <CreditCard size={20} />, label: "Credit Cards" },
          { icon: <HandCoins size={20} />, label: "Loans" },
          { icon: <Wrench size={20} />, label: "Services" },
          { icon: <CircleDollarSign size={20} />, label: "My Privilleges" },
          { icon: <Settings size={20} />, label: "Settings", path:"/settings" },
        ].map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon} 
            label={item.label} 
            isSelected={selected === item.label}
            onClick={() =>{ 
              setSelected(item.label);
              if(item.path){
                navigate(item.path);
              }
            }
            }
          />
        ))}
      </nav>
    </div>
  );
};



const NavItem = ({ icon, label, isSelected, onClick }: NavItemProps) => (
  <div 
    onClick={onClick}
    className={`
      flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer
      transition-all duration-200
      ${isSelected ? 'text-black ' : 'text-gray-500'}
      hover:text-black hover:translate-y-[-2px]
    `}
  >
    {icon}
    <span>{label}</span>
  </div>
);
import { BellDot, Search, Settings, Menu } from "lucide-react"
import { Input } from "../ui/input"
import ProfilePicture from "../../assets/christina.jpg"

export const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
    return (
        <nav className="w-full h-100px py-3 shadow-sm">
            <div className="px-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button className="md:hidden" onClick={onMenuClick}>
                        <Menu className="h-6 w-6 text-[#343C6A]" />
                    </button>
                    <h2 className="text-x font-bold text-[#343C6A]">Overview</h2>
                </div>
                <div className="hidden md:flex space-x-4 gap-3">
                    <div className="relative w-full ">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Search for Something"
                            className="rounded-full border bg-[#F5F7FA] pl-10"
                        />
                    </div>
                    <div className=" bg-[#F5F7FA] rounded-full p-2 flex items-center justify-center">
                        <Settings height="23px" width="23px" className=" text-[#718EBF]" />
                    </div>
                    <div className=" bg-[#F5F7FA] rounded-full p-2 flex items-center justify-center">
                        <BellDot height="23px" width="23px" className=" text-[#718EBF]" />
                    </div>
                    <img
                        src={ProfilePicture}
                        alt="User"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </nav>
    )
}

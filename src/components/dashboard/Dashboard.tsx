import { ArrowRight } from "lucide-react";
import Chip from "../../assets/Chip.png";
import Group from "../../assets/group.svg";

import { Bar, BarChart, CartesianGrid, Tooltip, Legend, XAxis, YAxis,  Pie, AreaChart, Area, Cell, PieChart, Text } from "recharts";

export const Dashboard = () => {
    const COLORS = ['#FC7900', '#343C6A', '#396AFF', '#232323'];
    const data = [
        { "name": "Sat", "uv": 400, "pv": 240 },
        { "name": "Sun", "uv": 300, "pv": 139 },
        { "name": "Mon", "uv": 200, "pv": 480 },
        { "name": "Tue", "uv": 278, "pv": 390 },
        { "name": "Wed", "uv": 189, "pv": 480 },
        { "name": "Thu", "uv": 239, "pv": 380 },
        { "name": "Fri", "uv": 349, "pv": 430 }
    ];
    const data01 = [
        {
            "name": "Group A",
            "value": 300  // 30%
        },
        {
            "name": "Group B",
            "value": 200  // 15%
        },
        {
            "name": "Group C",
            "value": 350  // 35%
        },
        {
            "name": "Group D",
            "value": 150 // 20%
        }
    ];
    const BalanceData = [
        { "name": "Jul", "value": 370 },
        { "name": "Aug", "value": 220 },
        { "name": "Sep", "value": 500 },
        { "name": "Oct", "value": 530 },
        { "name": "Nov", "value": 800 },
        { "name": "Dec", "value": 200 },
        { "name": "Jan", "value": 600 }
    ];
    return (

        <div className="grid grid-cols-12 gap-6 h-screen">
            <div className="col-span-8  p-6">
                <div className="flex justify-between items-center">

                    <h2 className=" text-lg font-semibold mb-2 text-#343C6A">My Cards</h2>
                    <h3 className=" text-lg font-semibold mb-2 text-#343C6A">See All</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">


                    <div className="p-4 text-white rounded-2xl w-[310px] h-[220px] relative"
                        style={{
                            background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                        }}>
                        <div className="flex justify-between items-center ">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img

                                src={Chip}
                                alt="Chip Card"
                                className="h-8 w-8 z-10"
                            />
                        </div>
                        <div className="mt-7">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">CARD HOLDER</p>
                                    <p className="text-[17px] font-medium">Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">VALID THRU</p>
                                    <p className="text-[17px] font-medium">12/22</p>
                                </div>
                            </div>
                        </div>
                        <div
                        className="h-[60px] absolute left-0 right-0 bottom-0 rounded-b-2xl"
                        style={{
                            background: "linear-gradient(90deg,rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                        }}>
                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-xl font-semibold text-white z-10">3778 **** 1234</p>
                                <img
                                    src={Group}
                                    alt="Group"
                                    className="h-15 w-15 z-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="p-4 text-[#343C6A] rounded-2xl w-[310px] h-[220px] bg-white"
                        >
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img
                                src={Chip}
                                alt="Chip Card"
                                className="h-8 w-8"
                            />
                        </div>
                        <div className="mt-14">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">CARD HOLDER</p>
                                    <p className="text-[17px] font-medium">Eddy Cusuma</p>
                                </div>
                                <div>
                                    <p className="text-[#9BA0AB] text-sm font-medium mb-1">VALID THRU</p>
                                    <p className="text-[17px] font-medium">12/22</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-2 text-sm">3778 **** 1234</p>
                    </div>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="col-span-4 p-6 ">
                <h2 className="text-lg text-left font-semibold mb-2 text-#343C6A">Recent Transactions</h2>

                <div className=" bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Deposit from my Card</p>
                                <p className="text-sm text-gray-500">28 January 2021</p>
                            </div>
                            <p className="text-red-600 font-bold">- $850</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Deposit Paypal</p>
                                <p className="text-sm text-gray-500">25 January 2021</p>
                            </div>
                            <p className="text-green-600 font-bold">+ $2,500</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold">Jemi Wilson</p>
                                <p className="text-sm text-gray-500">21 January 2021</p>
                            </div>
                            <p className="text-green-600 font-bold">+ $5,400</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weekly Activity */}

            <div className="col-span-8 p-6 ">
    <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Weekly Activity</h2>
    <div className=" bg-white rounded-lg shadow-md flex items-center justify-center h-[280px]">
        <div className="p-6">
            <BarChart width={630} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis 
                    domain={[0, 500]}
                    ticks={[0, 100, 200, 300, 400, 500]}
                    tickCount={6}
                />
                <Tooltip />
                
                <Legend 
                    layout="horizontal" 
                    align="right" 
                    verticalAlign="top"
                   
                />

             
                <Bar dataKey="pv" fill="#232323" radius={[20, 20, 20, 20]} barSize={15} />
                <Bar dataKey="uv" fill="#396AFF" radius={[20, 20, 20, 20]} barSize={15} />
            </BarChart>
        </div>
    </div>
</div>



            {/* Expense Statistics */}
            <div className="col-span-4 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Expense Statistics</h2>
                <div className=" bg-white h-[280px] flex items-center justify-center rounded-lg shadow-md">
                    <div className="flex items-center justify-center h-40">
                        <PieChart width={730} height={250}>
                            <Pie
                                data={data01}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                strokeWidth={10}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data01.map((entry, index) => (
                                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}>
                                   <Text
                                       x="50%"
                                       y="50%"
                                       fill="#fff"
                                       textAnchor="middle"
                                       dominantBaseline="central"
                                       fontSize={14}
                                   >
                                       {`${entry.value}`}
                                   </Text>
                               </Cell>
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>

            {/* Quick Transfer */}
            <div className="col-span-6 p-6">
                <h2 className="text-lg text-left font-semibold mb-2 text-#343C6A">Balance History</h2>
                <div className="bg-white rounded-lg shadow-md h-[500px] p-4">
                    {/* Livia Bator */}
                    <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">Livia Bator</p>
                                <p className="text-sm text-gray-500">CEO</p>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="$525.50"
                                className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
                            />
                        </div>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                            Send
                            <ArrowRight className="ml-2" />
                        </button>
                    </div>

                    {/* Randy Press */}
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">Randy Press</p>
                                <p className="text-sm text-gray-500">Director</p>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="$525.50"
                                className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
                            />
                        </div>
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                            Send
                            <ArrowRight className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Balance History */}
            <div className="col-span-6 p-6 ">
                <h2 className=" text-lg text-left font-semibold mb-2 text-#343C6A">Balance History</h2>

                <div className=" bg-white rounded-lg flex items-center justify-center shadow-md h-[300px]">
                    <div className=" items-center justify-center h-40">
                        <AreaChart 
                            width={450} 
                            height={250} 
                            data={BalanceData}
                            margin={{ top: 0, right: 30, left: 0, bottom: 50 }}
                        >
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2D60FF" stopOpacity="25%" />
                                    <stop offset="95%" stopColor="#2D60FF" stopOpacity="0%"/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis 
                                domain={[0, 1000]}
                                ticks={[0, 200, 400, 600, 800]}
                            />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#1814F3" 
                                strokeWidth={2}
                                fillOpacity={10} 
                                fill="url(#colorValue)" 
                            />
                        </AreaChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

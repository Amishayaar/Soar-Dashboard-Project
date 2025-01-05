import { ArrowRight } from "lucide-react";
import ChipCard from "../../assets/chip.svg";
import { Bar, BarChart, CartesianGrid, Tooltip, Legend, XAxis, YAxis, PieChart, Pie, AreaChart, Area, Cell } from "recharts";

export const Dashboard = () => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ];
    const data01 = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    return (

        <div className="grid grid-cols-12 gap-6 h-screen">
            <div className="col-span-8  p-6">
                <div className="flex justify-between items-center">

                    <h2 className=" text-lg font-semibold mb-2 text-#343C6A">My Cards</h2>
                    <h3 className=" text-lg font-semibold mb-2 text-#343C6A">See All</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">


                    <div className="p-4 text-white rounded-2xl w-[335px] h-[230px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                        }}>
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img
                                src={ChipCard}
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

                    <div className="p-4 text-white rounded-2xl w-[335px] h-[230px]"
                        style={{
                            background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
                        }}>
                        <div className="flex justify-between items-center">
                            <div className="text-left">
                                <p className="text-sm font-medium ">Balance</p>
                                <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
                            </div>
                            <img
                                src={ChipCard}
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
                    <div className="p-6  ">

                        <BarChart width={630} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />

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
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data01.map((_entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
                        <AreaChart width={450} height={250} data={data}
                            margin={{ top: 0, right: 30, left: 0, bottom: 50 }}>
                            <defs>

                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>

                    </div>
                </div>
            </div>
        </div>
    )
}

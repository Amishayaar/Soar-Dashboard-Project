import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Pie, AreaChart, Area, Cell, PieChart } from "recharts";
import { ChevronRight, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Chip from "../../assets/Chip.png";
import BlackChip from "../../assets/BlackChip.png";
import Group from "../../assets/group.svg";
import BlackGroup from "../../assets/BlackGroup.svg";
import icon1 from "../../assets/card.svg";
import icon2 from "../../assets/paypal.svg";
import icon3 from "../../assets/dollar.svg";
import liviaImage from "../../assets/livia.svg";
import randyImage from "../../assets/randy.svg";
import workmanImage from "../../assets/workman.svg";

interface Transaction {
  icon: string;
  title: string;
  date: string;
  amount: string;
}

interface ChartData {
  name: string;
  value: number;
  uv?: number;
  pv?: number;
}

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  name: string;
  value: number;
}

const COLORS = ['#FC7900', '#343C6A', '#396AFF', '#232323'];

const STATIC_DATA = {
  weeklyData: [
    { name: "Sat", uv: 400, pv: 240 },
    { name: "Sun", uv: 300, pv: 139 },
    { name: "Mon", uv: 200, pv: 480 },
    { name: "Tue", uv: 278, pv: 390 },
    { name: "Wed", uv: 189, pv: 480 },
    { name: "Thu", uv: 239, pv: 380 },
    { name: "Fri", uv: 349, pv: 430 }
  ],
  pieData: [
    { name: 'Entertainment', value: 30 },
    { name: 'Bill Expense', value: 15 },
    { name: 'Investment', value: 20 },
    { name: 'Others', value: 35 }
  ],
  balanceData: [
    { name: "Jul", value: 370 },
    { name: "Aug", value: 220 },
    { name: "Sep", value: 500 },
    { name: "Oct", value: 530 },
    { name: "Nov", value: 800 },
    { name: "Dec", value: 200 },
    { name: "Jan", value: 600 }
  ],
  users: [
    { ProfilePicture: liviaImage, name: "Livia Bator", position: "CEO" },
    { ProfilePicture: randyImage, name: "Randy Press", position: "Director" },
    { ProfilePicture: workmanImage, name: "Workman", position: "Designer" }
  ],
  transactions: [
    { icon: icon1, title: "Deposit from my Card", date: "28 January 2021", amount: "- $850" },
    { icon: icon2, title: "Deposit Paypal", date: "25 January 2021", amount: "+ $2,500" },
    { icon: icon3, title: "Jemi Wilson", date: "21 January 2021", amount: "+ $5,400" }
  ]
};

const CardComponent = ({ isBlack = false }) => (
  <div className={`p-4 text-${isBlack ? '[#343C6A]' : 'white'} rounded-2xl w-full h-[220px] relative ${isBlack ? 'bg-white border-[1px] border-[#DFEAF2]' : ''}`}
    style={!isBlack ? {
      background: "linear-gradient(90deg, rgba(91, 90, 111, 1) 0%, rgba(0, 0, 0, 1) 100%)",
    } : undefined}>
    <div className="flex justify-between items-center ">
      <div className="text-left">
        <p className="text-sm font-medium ">Balance</p>
        <h3 className="text-[18px] font-semibold tracking-tight">$5,332.18</h3>
      </div>
      <img
        src={isBlack ? BlackChip : Chip}
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
      className={`h-[60px] absolute left-0 right-0 bottom-0 rounded-b-2xl ${isBlack ? 'border-t-[1px] border-[#DFEAF2]' : ''}`}
      style={!isBlack ? {
        background: "linear-gradient(90deg,rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
      } : undefined}>
      <div className="flex justify-between items-center px-4 py-4">
        <p className={`text-xl font-semibold ${isBlack ? 'text-[#343C6A]' : 'text-white'} z-10`}>3778 **** 1234</p>
        <img
          src={isBlack ? BlackGroup : Group}
          alt="Group"
          className="h-15 w-15 z-10"
        />
      </div>
    </div>
  </div>
);

const TransactionItem = ({ transaction }: { transaction: Transaction }) => (
  <div className="flex items-center text-left justify-between">
    <img src={transaction.icon} alt="icon" className="w-12 h-12 rounded-full object-cover" />
    <div>
      <p className="font-semibold">{transaction.title}</p>
      <p className="text-sm text-gray-500">{transaction.date}</p>
    </div>
    <p className={`font-bold ${transaction.amount.includes('-') ? 'text-red-600' : 'text-green-600'}`}>
      {transaction.amount}
    </p>
  </div>
);

const useAmountInput = () => {
  const [amount, setAmount] = useState<string>('');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.split('.').length > 2) return;
    setAmount(value);
  };

  return { amount, handleAmountChange };
};

const PieChartComponent = ({ data }: { data: ChartData[] }) => {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
    value
  }: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
        <tspan x={x} dy="-0.5em" fontSize="16" fontWeight="bold">{`${value}%`}</tspan>
        <tspan x={x} dy="1.5em" fontSize="8" fontWeight="bold">{name}</tspan>
      </text>
    );
  };

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export const Dashboard = () => {
  const { amount, handleAmountChange } = useAmountInput();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 p-3 lg:p-6 mx-auto max-w-[1600px] w-full overflow-x-hidden">
      {/* Cards Section */}
      <div className="col-span-12 lg:col-span-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#343C6A]">My Cards</h2>
          <h3 className="text-lg font-semibold text-[#343C6A]">See All</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <CardComponent />
          <CardComponent isBlack />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-lg text-left font-semibold mb-4">Recent Transactions</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="space-y-6">
            {STATIC_DATA.transactions.map((transaction, index) => (
              <TransactionItem key={index} transaction={transaction} />
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="col-span-12 lg:col-span-8">
        <h2 className="text-lg text-left font-semibold mb-4">Weekly Activity</h2>
        <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
          <div className="min-w-[500px] h-[280px] flex items-center justify-center">
            <BarChart width={550} height={250} data={STATIC_DATA.weeklyData}>
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
      <div className="col-span-12 lg:col-span-4">
        <h2 className="text-lg text-left font-semibold mb-4">Expense Statistics</h2>
        <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
          <div className="min-w-[300px] h-[280px] flex items-center justify-center">
            <PieChartComponent data={STATIC_DATA.pieData} />
          </div>
        </div>
      </div>

      {/* Quick Transfer */}
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-lg font-semibold mb-4">Quick Transfer</h2>
        <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {STATIC_DATA.users.map((user, index) => (
              <div key={index} className="flex-shrink-0 flex flex-col items-center p-4 rounded-lg cursor-pointer">
                <div className="mb-3">
                  <img
                    src={user.ProfilePicture}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-medium text-gray-900 mb-1">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.position}</p>
                </div>
              </div>
            ))}
            <div className="flex-shrink-0 rounded-full p-2 flex flex-col justify-center items-center cursor-pointer">
              <ChevronRight height="23px" width="23px" className="text-[#718EBF]" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-6">
            <p className="text-sm font-medium">Write Amount</p>
            <div className="relative w-full lg:w-[70%]">
              <Input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full py-6 pl-8 pr-24 rounded-full text-lg font-medium bg-gray-50"
                placeholder="0.00"
              />
              {amount && (
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg font-medium text-gray-600">
                  ₹
                </span>
              )}
              <Button
                onClick={() => console.log('Sending amount:', parseFloat(amount))}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-6 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 h-auto"
              >
                Send
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Balance History */}
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-lg text-left font-semibold mb-4">Balance History</h2>
        <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
          <div className="min-w-[400px] h-[280px] flex items-center justify-center">
            <AreaChart 
              width={450} 
              height={280} 
              data={STATIC_DATA.balanceData}
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
  );
};

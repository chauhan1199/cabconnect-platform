
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Car, Building, CreditCard, ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
  description?: string;
}

const StatsCard = ({ title, value, icon, change, description }: StatsCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div className="flex items-center mt-1">
          {change.positive ? (
            <ArrowUp className="h-4 w-4 text-green-600 mr-1" />
          ) : (
            <ArrowDown className="h-4 w-4 text-red-600 mr-1" />
          )}
          <span className={change.positive ? "text-green-600" : "text-red-600"}>
            {change.value}
          </span>
          <span className="text-gray-500 text-xs ml-1">vs last month</span>
        </div>
      )}
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </CardContent>
  </Card>
);

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        title="Total Users"
        value="5,843"
        icon={<Users className="h-4 w-4 text-gray-500" />}
        change={{ value: "12%", positive: true }}
        description="Active accounts this month"
      />
      <StatsCard
        title="Total Drivers"
        value="328"
        icon={<Car className="h-4 w-4 text-gray-500" />}
        change={{ value: "8%", positive: true }}
        description="Registered drivers"
      />
      <StatsCard
        title="Vendors"
        value="42"
        icon={<Building className="h-4 w-4 text-gray-500" />}
        change={{ value: "3%", positive: true }}
        description="Service providers"
      />
      <StatsCard
        title="Revenue"
        value="$89,421"
        icon={<CreditCard className="h-4 w-4 text-gray-500" />}
        change={{ value: "4%", positive: false }}
        description="Total earnings this month"
      />
    </div>
  );
};

export default DashboardStats;

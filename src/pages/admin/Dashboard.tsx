
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardStats from "@/components/admin/DashboardStats";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Mock data for analytics
const rideData = [
  { name: "Mon", oneWay: 40, roundTrip: 24, hourly: 18, city: 28 },
  { name: "Tue", oneWay: 30, roundTrip: 20, hourly: 22, city: 25 },
  { name: "Wed", oneWay: 45, roundTrip: 28, hourly: 15, city: 30 },
  { name: "Thu", oneWay: 50, roundTrip: 32, hourly: 20, city: 35 },
  { name: "Fri", oneWay: 60, roundTrip: 40, hourly: 25, city: 42 },
  { name: "Sat", oneWay: 75, roundTrip: 50, hourly: 30, city: 55 },
  { name: "Sun", oneWay: 65, roundTrip: 45, hourly: 28, city: 48 },
];

const revenueData = [
  { name: "Jan", revenue: 25000, target: 30000 },
  { name: "Feb", revenue: 29000, target: 30000 },
  { name: "Mar", revenue: 32000, target: 32000 },
  { name: "Apr", revenue: 34000, target: 34000 },
  { name: "May", revenue: 38000, target: 36000 },
  { name: "Jun", revenue: 42000, target: 38000 },
  { name: "Jul", revenue: 45000, target: 40000 },
];

const AdminDashboard = () => {
  return (
    <SidebarLayout type="admin">
      <div className="space-y-6">
        {/* Stats Overview */}
        <DashboardStats />
        
        {/* Revenue Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Revenue Overview</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#8b5cf6" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }}
                    name="Revenue"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="#94a3b8" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    name="Target"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Ride Analytics */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Ride Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="rides">
              <TabsList className="mb-4">
                <TabsTrigger value="rides">Ride Types</TabsTrigger>
                <TabsTrigger value="locations">Top Locations</TabsTrigger>
                <TabsTrigger value="drivers">Driver Performance</TabsTrigger>
              </TabsList>
              <TabsContent value="rides">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={rideData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="oneWay" name="One Way" fill="#8b5cf6" />
                      <Bar dataKey="roundTrip" name="Round Trip" fill="#ec4899" />
                      <Bar dataKey="hourly" name="Hourly" fill="#14b8a6" />
                      <Bar dataKey="city" name="City" fill="#f97316" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="locations">
                <div className="flex items-center justify-center h-80 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Location analytics will be displayed here</p>
                </div>
              </TabsContent>
              <TabsContent value="drivers">
                <div className="flex items-center justify-center h-80 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Driver performance analytics will be displayed here</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">New vendor registered</h4>
                    <span className="text-sm text-gray-500">10 minutes ago</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    QuickCab Services has registered as a new vendor.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Driver approval request</h4>
                    <span className="text-sm text-gray-500">25 minutes ago</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    5 new drivers are waiting for document approval.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">Payment settlement completed</h4>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Weekly payment settlement for all vendors has been processed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">User complaint received</h4>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    A customer has reported an issue with ride #R8972.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-medium">System maintenance</h4>
                    <span className="text-sm text-gray-500">5 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Scheduled database optimization completed successfully.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default AdminDashboard;

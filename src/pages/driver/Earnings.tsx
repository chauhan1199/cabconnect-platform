
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Download, Filter, Users, ArrowRight } from "lucide-react";

// Mock earnings data
const dailyEarnings = [
  { day: "Mon", earnings: 120, rides: 8, hours: 6 },
  { day: "Tue", earnings: 95, rides: 7, hours: 5 },
  { day: "Wed", earnings: 145, rides: 10, hours: 7 },
  { day: "Thu", earnings: 115, rides: 8, hours: 6 },
  { day: "Fri", earnings: 175, rides: 12, hours: 8 },
  { day: "Sat", earnings: 210, rides: 14, hours: 9 },
  { day: "Sun", earnings: 180, rides: 12, hours: 8 },
];

const weeklyEarnings = [
  { week: "Week 1", earnings: 845, rides: 55, hours: 42 },
  { week: "Week 2", earnings: 920, rides: 62, hours: 45 },
  { week: "Week 3", earnings: 875, rides: 58, hours: 44 },
  { week: "Week 4", earnings: 960, rides: 65, hours: 47 },
];

const transactionHistory = [
  { id: "T12345", date: "Jun 15, 2023", description: "Weekly Payout", amount: 845.00, status: "completed" },
  { id: "T12346", date: "Jun 8, 2023", description: "Weekly Payout", amount: 920.00, status: "completed" },
  { id: "T12347", date: "Jun 1, 2023", description: "Weekly Payout", amount: 875.00, status: "completed" },
  { id: "T12348", date: "May 25, 2023", description: "Weekly Payout", amount: 960.00, status: "completed" },
  { id: "T12349", date: "May 18, 2023", description: "Weekly Payout", amount: 905.00, status: "completed" },
];

const DriverEarnings = () => {
  return (
    <SidebarLayout type="driver">
      <div className="space-y-6">
        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">Today's Earnings</div>
                <div className="text-2xl font-bold mt-1">$120.50</div>
                <div className="text-xs text-gray-500 mt-1">8 rides • 6 hours</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">This Week</div>
                <div className="text-2xl font-bold mt-1">$845.75</div>
                <div className="text-xs text-gray-500 mt-1">55 rides • 42 hours</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">This Month</div>
                <div className="text-2xl font-bold mt-1">$3,600.50</div>
                <div className="text-xs text-gray-500 mt-1">240 rides • 178 hours</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Charts */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl">Earnings Analytics</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select defaultValue="week">
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date Range</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span>Export</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="earnings">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="earnings" className="flex-1">Earnings</TabsTrigger>
                <TabsTrigger value="rides" className="flex-1">Rides</TabsTrigger>
                <TabsTrigger value="hours" className="flex-1">Hours</TabsTrigger>
              </TabsList>
              
              <TabsContent value="earnings">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyEarnings}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`$${value}`, "Earnings"]}
                      />
                      <Bar dataKey="earnings" name="Earnings" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="rides">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyEarnings}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="rides" name="Rides" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="hours">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyEarnings}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="hours" name="Hours" fill="#f97316" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Transaction History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionHistory.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className="font-medium">${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">
                          {transaction.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Account Balance</div>
                    <div className="font-bold">$845.75</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Next payout on Jun 22, 2023</div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Payout Method</h3>
                  <div className="border rounded-lg p-3 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Bank Account</div>
                      <div className="text-xs text-gray-500">**** **** **** 4567</div>
                    </div>
                  </div>
                  <Button variant="link" className="text-cab-secondary p-0 h-auto mt-2">
                    <span>Change payment method</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Tax Information</h3>
                  <div className="text-sm text-gray-500">
                    Remember to download your tax statements for your records.
                  </div>
                  <Button variant="outline" className="w-full mt-3 gap-2">
                    <Download className="h-4 w-4" />
                    <span>Tax Documents</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default DriverEarnings;

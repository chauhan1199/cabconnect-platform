
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Star, Download, Search, Calendar, Filter } from "lucide-react";

// Mock ride history data
const rideHistoryData = [
  {
    id: "R12345",
    date: "Jun 15, 2023",
    time: "10:30 AM",
    from: "123 Main St, New York, NY",
    to: "JFK Airport, Queens, NY",
    amount: "$45.75",
    status: "completed",
    driverName: "Michael Johnson",
    driverRating: 4.8,
  },
  {
    id: "R12346",
    date: "Jun 12, 2023",
    time: "2:15 PM",
    from: "Grand Central Terminal, New York, NY",
    to: "Brooklyn Bridge, New York, NY",
    amount: "$22.50",
    status: "completed",
    driverName: "Sarah Williams",
    driverRating: 4.9,
  },
  {
    id: "R12347",
    date: "Jun 8, 2023",
    time: "9:00 AM",
    from: "Empire State Building, New York, NY",
    to: "Central Park, New York, NY",
    amount: "$18.25",
    status: "completed",
    driverName: "Robert Davis",
    driverRating: 4.7,
  },
  {
    id: "R12348",
    date: "Jun 5, 2023",
    time: "5:45 PM",
    from: "Times Square, New York, NY",
    to: "123 Main St, New York, NY",
    amount: "$26.50",
    status: "completed",
    driverName: "Jennifer Thompson",
    driverRating: 4.6,
  },
  {
    id: "R12349",
    date: "Jun 1, 2023",
    time: "8:15 AM",
    from: "123 Main St, New York, NY",
    to: "Wall Street, New York, NY",
    amount: "$32.00",
    status: "cancelled",
    cancellationReason: "Driver unavailable",
  },
];

const RideHistory = () => {
  // Status badge styling helper
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      case "ongoing":
        return <Badge className="bg-blue-100 text-blue-800">Ongoing</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  return (
    <SidebarLayout type="user">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl">Ride History</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search rides..."
                    className="pl-8"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Date Range</span>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="all" className="flex-1">All Rides</TabsTrigger>
                <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
                <TabsTrigger value="cancelled" className="flex-1">Cancelled</TabsTrigger>
                <TabsTrigger value="scheduled" className="flex-1">Scheduled</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-4">
                  {rideHistoryData.map((ride) => (
                    <Card key={ride.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="border-l-4 h-full" style={{ 
                        borderLeftColor: ride.status === "completed" ? "#10B981" : "#EF4444" 
                      }}>
                        <CardContent className="p-0">
                          <div className="p-4">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                              <div>
                                <div className="flex items-center">
                                  <h3 className="font-semibold text-lg">Ride #{ride.id.slice(-5)}</h3>
                                  <div className="ml-2">{getStatusBadge(ride.status)}</div>
                                </div>
                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                  <Clock className="h-3.5 w-3.5 mr-1" />
                                  <span>{ride.date} • {ride.time}</span>
                                </div>
                              </div>
                              <div className="text-right mt-2 md:mt-0">
                                <div className="text-lg font-bold">{ride.amount}</div>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="min-w-[20px] flex items-start justify-center mt-1">
                                  <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                    <MapPin className="h-2.5 w-2.5 text-green-600" />
                                  </div>
                                </div>
                                <div className="ml-2">
                                  <div className="text-xs text-gray-500">From</div>
                                  <div className="font-medium">{ride.from}</div>
                                </div>
                              </div>
                              
                              <div className="flex items-start">
                                <div className="min-w-[20px] flex items-start justify-center mt-1">
                                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                    <MapPin className="h-2.5 w-2.5 text-red-600" />
                                  </div>
                                </div>
                                <div className="ml-2">
                                  <div className="text-xs text-gray-500">To</div>
                                  <div className="font-medium">{ride.to}</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t">
                              {ride.status === "completed" && (
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <span className="text-gray-500">Driver: </span>
                                    <span className="font-medium">{ride.driverName}</span>
                                  </div>
                                  <div className="flex items-center ml-3">
                                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                    <span className="text-sm font-medium">{ride.driverRating}</span>
                                  </div>
                                </div>
                              )}
                              {ride.status === "cancelled" && (
                                <div className="text-sm text-red-500">
                                  Reason: {ride.cancellationReason}
                                </div>
                              )}
                              
                              <div className="flex gap-2 mt-2 sm:mt-0">
                                <Button variant="outline" size="sm">
                                  Details
                                </Button>
                                {ride.status === "completed" && (
                                  <Button variant="outline" size="sm" className="gap-1">
                                    <Download className="h-4 w-4" />
                                    Receipt
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="space-y-4">
                  {rideHistoryData
                    .filter(ride => ride.status === "completed")
                    .map((ride) => (
                      <Card key={ride.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="border-l-4 h-full" style={{ borderLeftColor: "#10B981" }}>
                          <CardContent className="p-0">
                            {/* Same card content structure as above */}
                            <div className="p-4">
                              <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="font-semibold text-lg">Ride #{ride.id.slice(-5)}</h3>
                                    <div className="ml-2">{getStatusBadge(ride.status)}</div>
                                  </div>
                                  <div className="flex items-center text-gray-500 text-sm mt-1">
                                    <Clock className="h-3.5 w-3.5 mr-1" />
                                    <span>{ride.date} • {ride.time}</span>
                                  </div>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                  <div className="text-lg font-bold">{ride.amount}</div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="min-w-[20px] flex items-start justify-center mt-1">
                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                      <MapPin className="h-2.5 w-2.5 text-green-600" />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    <div className="text-xs text-gray-500">From</div>
                                    <div className="font-medium">{ride.from}</div>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="min-w-[20px] flex items-start justify-center mt-1">
                                    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                      <MapPin className="h-2.5 w-2.5 text-red-600" />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    <div className="text-xs text-gray-500">To</div>
                                    <div className="font-medium">{ride.to}</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <span className="text-gray-500">Driver: </span>
                                    <span className="font-medium">{ride.driverName}</span>
                                  </div>
                                  <div className="flex items-center ml-3">
                                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                    <span className="text-sm font-medium">{ride.driverRating}</span>
                                  </div>
                                </div>
                                
                                <div className="flex gap-2 mt-2 sm:mt-0">
                                  <Button variant="outline" size="sm">
                                    Details
                                  </Button>
                                  <Button variant="outline" size="sm" className="gap-1">
                                    <Download className="h-4 w-4" />
                                    Receipt
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cancelled">
                <div className="space-y-4">
                  {rideHistoryData
                    .filter(ride => ride.status === "cancelled")
                    .map((ride) => (
                      <Card key={ride.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="border-l-4 h-full" style={{ borderLeftColor: "#EF4444" }}>
                          <CardContent className="p-0">
                            {/* Same card content structure as above */}
                            <div className="p-4">
                              <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                  <div className="flex items-center">
                                    <h3 className="font-semibold text-lg">Ride #{ride.id.slice(-5)}</h3>
                                    <div className="ml-2">{getStatusBadge(ride.status)}</div>
                                  </div>
                                  <div className="flex items-center text-gray-500 text-sm mt-1">
                                    <Clock className="h-3.5 w-3.5 mr-1" />
                                    <span>{ride.date} • {ride.time}</span>
                                  </div>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                  <div className="text-lg font-bold">{ride.amount}</div>
                                </div>
                              </div>
                              
                              <div className="space-y-3">
                                <div className="flex items-start">
                                  <div className="min-w-[20px] flex items-start justify-center mt-1">
                                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                                      <MapPin className="h-2.5 w-2.5 text-green-600" />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    <div className="text-xs text-gray-500">From</div>
                                    <div className="font-medium">{ride.from}</div>
                                  </div>
                                </div>
                                
                                <div className="flex items-start">
                                  <div className="min-w-[20px] flex items-start justify-center mt-1">
                                    <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                                      <MapPin className="h-2.5 w-2.5 text-red-600" />
                                    </div>
                                  </div>
                                  <div className="ml-2">
                                    <div className="text-xs text-gray-500">To</div>
                                    <div className="font-medium">{ride.to}</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t">
                                <div className="text-sm text-red-500">
                                  Reason: {ride.cancellationReason}
                                </div>
                                
                                <div className="flex gap-2 mt-2 sm:mt-0">
                                  <Button variant="outline" size="sm">
                                    Details
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="scheduled">
                <div className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Scheduled Rides</h3>
                  <p className="text-gray-500 text-center max-w-md mb-6">
                    You don't have any scheduled rides at the moment. Book a ride in advance for your future travel needs.
                  </p>
                  <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                    Schedule a Ride
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default RideHistory;


import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DriverList from "@/components/vendor/DriverList";
import { Badge } from "@/components/ui/badge";
import { Car, Users, Clock, CreditCard, Settings, ArrowDown, ArrowUp } from "lucide-react";

const VendorDashboard = () => {
  // Mock data for drivers
  const drivers = [
    {
      id: "D1001",
      name: "Michael Johnson",
      phone: "+1 (555) 123-4567",
      status: "online" as const,
      rating: 4.8,
      vehicle: "Toyota Camry (ABC123)",
      location: "Manhattan, NY",
      completedRides: 247,
      cancelledRides: 5,
    },
    {
      id: "D1002",
      name: "Sarah Wilson",
      phone: "+1 (555) 234-5678",
      status: "on-ride" as const,
      rating: 4.9,
      vehicle: "Honda Accord (DEF456)",
      location: "Brooklyn, NY",
      completedRides: 183,
      cancelledRides: 2,
    },
    {
      id: "D1003",
      name: "David Thompson",
      phone: "+1 (555) 345-6789",
      status: "offline" as const,
      rating: 4.6,
      vehicle: "Ford Fusion (GHI789)",
      location: "Queens, NY",
      completedRides: 129,
      cancelledRides: 8,
    },
    {
      id: "D1004",
      name: "Jessica Brown",
      phone: "+1 (555) 456-7890",
      status: "online" as const,
      rating: 4.7,
      vehicle: "Nissan Altima (JKL012)",
      location: "Bronx, NY",
      completedRides: 156,
      cancelledRides: 3,
    },
    {
      id: "D1005",
      name: "Robert Davis",
      phone: "+1 (555) 567-8901",
      status: "on-break" as const,
      rating: 4.5,
      vehicle: "Hyundai Sonata (MNO345)",
      location: "Staten Island, NY",
      completedRides: 98,
      cancelledRides: 4,
    },
  ];

  // Mock data for rides
  const pendingRides = [
    { id: "R2001", customer: "John Smith", pickup: "LaGuardia Airport", destination: "Times Square", status: "pending" },
    { id: "R2002", customer: "Emily Johnson", pickup: "Central Park", destination: "Wall Street", status: "pending" },
    { id: "R2003", customer: "Daniel Williams", pickup: "Brooklyn Heights", destination: "Madison Square Garden", status: "pending" },
  ];

  const assignedRides = [
    { id: "R1001", customer: "Alice Brown", pickup: "JFK Airport", destination: "Empire State Building", driver: "Michael Johnson", status: "assigned" },
    { id: "R1002", customer: "Thomas Miller", pickup: "Grand Central Station", destination: "Brooklyn Bridge", driver: "Jessica Brown", status: "in-progress" },
  ];

  const handleAssignRide = (driverId: string) => {
    console.log(`Assigning ride to driver: ${driverId}`);
  };

  const handleViewDriverDetails = (driverId: string) => {
    console.log(`Viewing driver details: ${driverId}`);
  };

  const handleCallDriver = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <SidebarLayout type="vendor">
      <div className="space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                  <Car className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">Active Rides</div>
                <div className="text-2xl font-bold mt-1">{assignedRides.length}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                  <Clock className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">Pending Rides</div>
                <div className="text-2xl font-bold mt-1">{pendingRides.length}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">Active Drivers</div>
                <div className="text-2xl font-bold mt-1">
                  {drivers.filter(d => d.status === "online" || d.status === "on-ride").length}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-3">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <div className="text-sm font-medium text-gray-500">Today's Revenue</div>
                <div className="text-2xl font-bold mt-1">$1,245.50</div>
                <div className="flex items-center mt-1 text-sm">
                  <ArrowUp className="h-3 w-3 text-green-600 mr-1" />
                  <span className="text-green-600">12%</span>
                  <span className="text-gray-500 ml-1">vs yesterday</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Ride Requests */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">New Ride Requests</CardTitle>
              <Badge className="bg-yellow-100 text-yellow-800">
                {pendingRides.length} New
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRides.map((ride) => (
                <div key={ride.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{ride.customer}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        From: {ride.pickup} • To: {ride.destination}
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-yellow-100 text-yellow-800">
                        Pending
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button 
                      size="sm" 
                      className="bg-cab-secondary hover:bg-cab-secondary/90"
                    >
                      Assign Driver
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Rides */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Active Rides</CardTitle>
              <Badge className="bg-blue-100 text-blue-800">
                {assignedRides.length} Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assignedRides.map((ride) => (
                <div key={ride.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{ride.customer}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        From: {ride.pickup} • To: {ride.destination}
                      </div>
                      <div className="text-sm mt-2">
                        Driver: <span className="font-medium">{ride.driver}</span>
                      </div>
                    </div>
                    <div>
                      <Badge className={ride.status === "assigned" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}>
                        {ride.status === "assigned" ? "Assigned" : "In Progress"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                    >
                      Track
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-red-300 text-red-500 hover:bg-red-50"
                    >
                      Reassign
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Driver Management */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl">Driver Management</CardTitle>
              <Button size="sm" className="bg-cab-secondary hover:bg-cab-secondary/90">
                <Settings className="h-4 w-4 mr-2" />
                Manage Drivers
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Drivers</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
                <TabsTrigger value="on-ride">On Ride</TabsTrigger>
                <TabsTrigger value="offline">Offline</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <DriverList 
                  drivers={drivers}
                  onAssignRide={handleAssignRide}
                  onViewDetails={handleViewDriverDetails}
                  onCall={handleCallDriver}
                />
              </TabsContent>
              <TabsContent value="online">
                <DriverList 
                  drivers={drivers.filter(d => d.status === "online")}
                  onAssignRide={handleAssignRide}
                  onViewDetails={handleViewDriverDetails}
                  onCall={handleCallDriver}
                />
              </TabsContent>
              <TabsContent value="on-ride">
                <DriverList 
                  drivers={drivers.filter(d => d.status === "on-ride")}
                  onViewDetails={handleViewDriverDetails}
                  onCall={handleCallDriver}
                />
              </TabsContent>
              <TabsContent value="offline">
                <DriverList 
                  drivers={drivers.filter(d => d.status === "offline" || d.status === "on-break")}
                  onViewDetails={handleViewDriverDetails}
                  onCall={handleCallDriver}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default VendorDashboard;

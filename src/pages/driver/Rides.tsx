
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RideCard, { Ride } from "@/components/driver/RideCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Filter, Search } from "lucide-react";

const DriverRides = () => {
  // Mock ride data
  const initialRides: Ride[] = [
    {
      id: "R123456",
      pickupLocation: "Grand Central Terminal, NY",
      dropoffLocation: "JFK Airport, Queens, NY",
      pickupTime: "Jun 15, 2023 • 10:30 AM",
      status: "completed",
      customerName: "John Smith",
      customerPhone: "+1 (555) 123-4567",
      fare: 45.0,
      distance: "18.5 miles",
      duration: "35 mins",
    },
    {
      id: "R789012",
      pickupLocation: "Times Square, Manhattan, NY",
      dropoffLocation: "Brooklyn Bridge, Brooklyn, NY",
      pickupTime: "Jun 12, 2023 • 2:30 PM",
      status: "completed",
      customerName: "Emily Johnson",
      customerPhone: "+1 (555) 987-6543",
      fare: 25.75,
      distance: "5.8 miles",
      duration: "22 mins",
    },
    {
      id: "R345678",
      pickupLocation: "Central Park, NY",
      dropoffLocation: "Empire State Building, NY",
      pickupTime: "Jun 10, 2023 • 9:15 AM",
      status: "cancelled",
      customerName: "Michael Brown",
      customerPhone: "+1 (555) 456-7890",
      fare: 18.50,
      distance: "3.2 miles",
      duration: "15 mins",
    },
    {
      id: "R901234",
      pickupLocation: "Brooklyn Heights, Brooklyn, NY",
      dropoffLocation: "Wall Street, Manhattan, NY",
      pickupTime: "Today • 2:00 PM",
      status: "accepted",
      customerName: "Robert Davis",
      customerPhone: "+1 (555) 345-6789",
      fare: 32.25,
      distance: "7.5 miles",
      duration: "28 mins",
    },
    {
      id: "R567890",
      pickupLocation: "Madison Square Garden, NY",
      dropoffLocation: "LaGuardia Airport, Queens, NY",
      pickupTime: "Now",
      status: "in-progress",
      customerName: "Jennifer Wilson",
      customerPhone: "+1 (555) 234-5678",
      fare: 38.50,
      distance: "10.3 miles",
      duration: "32 mins",
    },
  ];
  
  const [rides, setRides] = useState<Ride[]>(initialRides);
  
  // Handle starting a ride
  const handleStartRide = (rideId: string) => {
    setRides(
      rides.map(ride => 
        ride.id === rideId 
          ? { ...ride, status: "in-progress" as const } 
          : ride
      )
    );
  };

  // Handle completing a ride
  const handleCompleteRide = (rideId: string) => {
    setRides(
      rides.map(ride => 
        ride.id === rideId 
          ? { ...ride, status: "completed" as const } 
          : ride
      )
    );
  };

  return (
    <SidebarLayout type="driver">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <CardTitle className="text-xl">Manage Rides</CardTitle>
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
                <TabsTrigger value="active" className="flex-1">Active</TabsTrigger>
                <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
                <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
                <TabsTrigger value="cancelled" className="flex-1">Cancelled</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-4">
                  {rides.map((ride) => (
                    <RideCard 
                      key={ride.id}
                      ride={ride}
                      onStart={ride.status === "accepted" ? handleStartRide : undefined}
                      onComplete={ride.status === "in-progress" ? handleCompleteRide : undefined}
                      onNavigate={() => window.open("https://maps.google.com", "_blank")}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="active">
                <div className="space-y-4">
                  {rides
                    .filter(ride => ride.status === "accepted" || ride.status === "in-progress")
                    .map((ride) => (
                      <RideCard 
                        key={ride.id}
                        ride={ride}
                        onStart={ride.status === "accepted" ? handleStartRide : undefined}
                        onComplete={ride.status === "in-progress" ? handleCompleteRide : undefined}
                        onNavigate={() => window.open("https://maps.google.com", "_blank")}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="space-y-4">
                  {rides
                    .filter(ride => ride.status === "accepted")
                    .map((ride) => (
                      <RideCard 
                        key={ride.id}
                        ride={ride}
                        onStart={handleStartRide}
                        onNavigate={() => window.open("https://maps.google.com", "_blank")}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="space-y-4">
                  {rides
                    .filter(ride => ride.status === "completed")
                    .map((ride) => (
                      <RideCard 
                        key={ride.id}
                        ride={ride}
                      />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cancelled">
                <div className="space-y-4">
                  {rides
                    .filter(ride => ride.status === "cancelled")
                    .map((ride) => (
                      <RideCard 
                        key={ride.id}
                        ride={ride}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default DriverRides;

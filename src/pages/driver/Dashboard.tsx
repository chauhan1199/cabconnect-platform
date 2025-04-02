
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RideCard, { Ride } from "@/components/driver/RideCard";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Clock, MapPin, CreditCard } from "lucide-react";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [newRideRequests, setNewRideRequests] = useState<Ride[]>([
    {
      id: "R123456",
      pickupLocation: "Grand Central Terminal, NY",
      dropoffLocation: "JFK Airport, Queens, NY",
      pickupTime: "Now",
      status: "pending",
      customerName: "John Smith",
      customerPhone: "+1 (555) 123-4567",
      fare: 45.0,
      distance: "18.5 miles",
      duration: "35 mins",
    },
  ]);
  
  const [acceptedRides, setAcceptedRides] = useState<Ride[]>([
    {
      id: "R789012",
      pickupLocation: "Times Square, Manhattan, NY",
      dropoffLocation: "Brooklyn Bridge, Brooklyn, NY",
      pickupTime: "2:30 PM",
      status: "accepted",
      customerName: "Emily Johnson",
      customerPhone: "+1 (555) 987-6543",
      fare: 25.75,
      distance: "5.8 miles",
      duration: "22 mins",
    },
  ]);

  // Handle accepting a ride
  const handleAcceptRide = (rideId: string) => {
    const rideIndex = newRideRequests.findIndex(ride => ride.id === rideId);
    if (rideIndex !== -1) {
      const ride = {...newRideRequests[rideIndex], status: "accepted" as const};
      setAcceptedRides([...acceptedRides, ride]);
      setNewRideRequests(newRideRequests.filter(ride => ride.id !== rideId));
    }
  };

  // Handle rejecting a ride
  const handleRejectRide = (rideId: string) => {
    setNewRideRequests(newRideRequests.filter(ride => ride.id !== rideId));
  };

  // Handle starting a ride
  const handleStartRide = (rideId: string) => {
    setAcceptedRides(
      acceptedRides.map(ride => 
        ride.id === rideId 
          ? { ...ride, status: "in-progress" as const } 
          : ride
      )
    );
  };

  // Handle completing a ride
  const handleCompleteRide = (rideId: string) => {
    setAcceptedRides(
      acceptedRides.map(ride => 
        ride.id === rideId 
          ? { ...ride, status: "completed" as const } 
          : ride
      )
    );
  };

  const todayEarnings = 120.50;
  const weeklyEarnings = 845.75;
  const completedRides = 6;

  return (
    <SidebarLayout type="driver">
      <div className="space-y-6">
        {/* Driver Status */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Driver Status</h3>
                <div className="flex items-center mt-2">
                  <Badge className={isOnline ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                    {isOnline ? "Online" : "Offline"}
                  </Badge>
                  <span className="text-sm text-gray-500 ml-2">
                    {isOnline ? "You are visible to customers" : "You are invisible to customers"}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={isOnline} 
                  onCheckedChange={setIsOnline} 
                  id="driver-status"
                />
                <Label htmlFor="driver-status">
                  {isOnline ? "Go Offline" : "Go Online"}
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Earnings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-2 w-10 h-10 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <h3 className="text-sm font-medium text-gray-500">Today's Earnings</h3>
                <div className="text-2xl font-bold mt-1">${todayEarnings.toFixed(2)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-2 w-10 h-10 flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="h-5 w-5 text-cab-secondary" />
                </div>
                <h3 className="text-sm font-medium text-gray-500">This Week</h3>
                <div className="text-2xl font-bold mt-1">${weeklyEarnings.toFixed(2)}</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-cab-secondary/10 rounded-full p-2 w-10 h-10 flex items-center justify-center mx-auto mb-2">
                  <Clock className="h-5 w-5 text-cab-secondary" />
                </div>
                <h3 className="text-sm font-medium text-gray-500">Completed Rides</h3>
                <div className="text-2xl font-bold mt-1">{completedRides}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New Ride Requests */}
        {newRideRequests.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">New Ride Requests</CardTitle>
                <Badge className="bg-yellow-100 text-yellow-800">
                  {newRideRequests.length} New
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {newRideRequests.map(ride => (
                <RideCard 
                  key={ride.id} 
                  ride={ride} 
                  onAccept={handleAcceptRide}
                  onReject={handleRejectRide}
                />
              ))}
            </CardContent>
          </Card>
        )}

        {/* Accepted/In-progress Rides */}
        {acceptedRides.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Your Rides</CardTitle>
            </CardHeader>
            <CardContent>
              {acceptedRides.map(ride => (
                <RideCard 
                  key={ride.id} 
                  ride={ride} 
                  onStart={ride.status === "accepted" ? handleStartRide : undefined}
                  onComplete={ride.status === "in-progress" ? handleCompleteRide : undefined}
                  onNavigate={() => window.open("https://maps.google.com", "_blank")}
                />
              ))}
            </CardContent>
          </Card>
        )}

        {/* Map Preview (placeholder) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Your Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-cab-secondary mx-auto mb-2" />
                <p className="text-gray-500">Map view would appear here, showing your current location</p>
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90 mt-4">
                  Navigate to Pickup
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default DriverDashboard;

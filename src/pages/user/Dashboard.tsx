
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Clock, Navigation, MapPin, CreditCard } from "lucide-react";

const UserDashboard = () => {
  // Mock recent rides data
  const recentRides = [
    {
      id: "1",
      date: "Today, 10:30 AM",
      from: "Home",
      to: "Work Office",
      amount: "$15.50",
      status: "completed",
    },
    {
      id: "2",
      date: "Yesterday, 6:45 PM",
      from: "Work Office",
      to: "Home",
      amount: "$16.20",
      status: "completed",
    },
    {
      id: "3",
      date: "Jun 10, 2:15 PM",
      from: "Mall",
      to: "Restaurant",
      amount: "$8.75",
      status: "completed",
    },
  ];

  return (
    <SidebarLayout type="user">
      <div className="space-y-6">
        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/user/book">
            <Card className="hover:shadow-md transition-shadow hover:border-cab-secondary cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-fit mb-4">
                  <Car className="h-6 w-6 text-cab-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book a Ride</h3>
                <p className="text-gray-500 mb-4 flex-grow">
                  Book a one-way ride, round trip, or hourly rental.
                </p>
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/user/history">
            <Card className="hover:shadow-md transition-shadow hover:border-cab-secondary cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-fit mb-4">
                  <Clock className="h-6 w-6 text-cab-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ride History</h3>
                <p className="text-gray-500 mb-4 flex-grow">
                  View your past rides, receipts, and driver ratings.
                </p>
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                  View History
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/user/wallet">
            <Card className="hover:shadow-md transition-shadow hover:border-cab-secondary cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="bg-cab-secondary/10 rounded-full p-3 w-fit mb-4">
                  <CreditCard className="h-6 w-6 text-cab-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wallet & Offers</h3>
                <p className="text-gray-500 mb-4 flex-grow">
                  Manage your wallet balance and view available offers.
                </p>
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                  View Wallet
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Rides */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRides.map((ride) => (
                <div key={ride.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm text-gray-500">{ride.date}</div>
                      <div className="mt-2 flex items-center">
                        <MapPin className="h-4 w-4 text-green-600 mr-2" />
                        <span>{ride.from}</span>
                      </div>
                      <div className="mt-1 flex items-center">
                        <Navigation className="h-4 w-4 text-red-600 mr-2" />
                        <span>{ride.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{ride.amount}</div>
                      <div className="mt-2">
                        <Link to={`/user/ride/${ride.id}`}>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/user/history">
                <Button variant="link" className="text-cab-secondary">
                  View All Rides
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Saved Locations */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Saved Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Home</h4>
                    <p className="text-sm text-gray-500">123 Main Street, Apartment 4B</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Work</h4>
                    <p className="text-sm text-gray-500">456 Business Avenue, Floor 12</p>
                  </div>
                </div>
              </div>
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gym</h4>
                    <p className="text-sm text-gray-500">789 Fitness Lane</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default UserDashboard;

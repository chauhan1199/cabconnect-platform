
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, User, Phone, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Ride {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime: string;
  status: "pending" | "accepted" | "in-progress" | "completed" | "cancelled";
  customerName: string;
  customerPhone: string;
  fare: number;
  distance: string;
  duration: string;
}

interface RideCardProps {
  ride: Ride;
  onAccept?: (id: string) => void;
  onReject?: (id: string) => void;
  onStart?: (id: string) => void;
  onComplete?: (id: string) => void;
  onNavigate?: (id: string) => void;
}

const RideCard = ({ 
  ride, 
  onAccept, 
  onReject, 
  onStart, 
  onComplete,
  onNavigate
}: RideCardProps) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    accepted: "bg-blue-100 text-blue-800",
    "in-progress": "bg-purple-100 text-purple-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  const statusText = {
    pending: "Pending",
    accepted: "Accepted",
    "in-progress": "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  return (
    <Card className="mb-4 overflow-hidden border-l-4 hover:shadow-md transition-shadow" 
      style={{ 
        borderLeftColor: 
          ride.status === "pending" ? "#EAB308" :
          ride.status === "accepted" ? "#3B82F6" :
          ride.status === "in-progress" ? "#8B5CF6" :
          ride.status === "completed" ? "#10B981" :
          "#EF4444"
      }}
    >
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">Ride #{ride.id.slice(-4)}</h3>
              <Badge className={cn("mt-1", statusColors[ride.status])}>
                {statusText[ride.status]}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">${ride.fare.toFixed(2)}</div>
              <div className="text-sm text-gray-500">{ride.distance} • {ride.duration}</div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start">
              <div className="mt-1 mr-3 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-green-600" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Pickup</div>
                <div className="font-medium">{ride.pickupLocation}</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3 flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                  <MapPin className="h-3 w-3 text-red-600" />
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Dropoff</div>
                <div className="font-medium">{ride.dropoffLocation}</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3 flex-shrink-0">
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Pickup Time</div>
                <div className="font-medium">{ride.pickupTime}</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3 flex-shrink-0">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Customer</div>
                <div className="font-medium">{ride.customerName}</div>
              </div>
              
              <Button variant="ghost" size="icon" className="ml-auto" 
                title="Call customer"
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = `tel:${ride.customerPhone}`;
                }}
              >
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 border-t pt-4">
            {ride.status === "pending" && onAccept && onReject && (
              <>
                <Button 
                  className="flex-1 bg-cab-secondary hover:bg-cab-secondary/90"
                  onClick={() => onAccept(ride.id)}
                >
                  Accept
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-red-300 text-red-500 hover:bg-red-50"
                  onClick={() => onReject(ride.id)}
                >
                  Reject
                </Button>
              </>
            )}
            
            {ride.status === "accepted" && onStart && (
              <Button 
                className="flex-1 bg-cab-secondary hover:bg-cab-secondary/90"
                onClick={() => onStart(ride.id)}
              >
                Start Ride
              </Button>
            )}
            
            {ride.status === "in-progress" && onComplete && (
              <Button 
                className="flex-1 bg-green-600 hover:bg-green-700"
                onClick={() => onComplete(ride.id)}
              >
                Complete Ride
              </Button>
            )}
            
            {(ride.status === "accepted" || ride.status === "in-progress") && onNavigate && (
              <Button 
                variant="outline" 
                className="flex-1 gap-2"
                onClick={() => onNavigate(ride.id)}
              >
                <Navigation className="h-4 w-4" />
                Navigate
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RideCard;


import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Car, Phone, Star, MapPin, AlertCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Driver {
  id: string;
  name: string;
  phone: string;
  status: "online" | "offline" | "on-ride" | "on-break";
  rating: number;
  vehicle: string;
  location: string;
  completedRides: number;
  cancelledRides: number;
  avatar?: string;
}

interface DriverListProps {
  drivers: Driver[];
  onAssignRide?: (driverId: string) => void;
  onViewDetails?: (driverId: string) => void;
  onCall?: (phone: string) => void;
}

const DriverList = ({ drivers, onAssignRide, onViewDetails, onCall }: DriverListProps) => {
  const statusColors = {
    online: "bg-green-100 text-green-800",
    offline: "bg-gray-100 text-gray-800",
    "on-ride": "bg-blue-100 text-blue-800",
    "on-break": "bg-orange-100 text-orange-800",
  };

  const statusText = {
    online: "Online",
    offline: "Offline",
    "on-ride": "On Ride",
    "on-break": "On Break",
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Driver</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Performance</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={driver.avatar} />
                    <AvatarFallback className="bg-cab-secondary/10 text-cab-secondary">
                      {driver.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{driver.name}</div>
                    <div className="text-sm text-gray-500">{driver.phone}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge className={statusColors[driver.status]}>
                  {statusText[driver.status]}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>{driver.rating.toFixed(1)}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-gray-500" />
                  {driver.vehicle}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  {driver.location}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="text-xs">
                    <div className="text-green-600">{driver.completedRides} completed</div>
                    <div className="text-red-600">{driver.cancelledRides} cancelled</div>
                  </div>
                  {driver.cancelledRides > 2 && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span>
                            <AlertCircle className="h-4 w-4 text-amber-500" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>High cancellation rate</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {driver.status === "online" && onAssignRide && (
                    <Button 
                      size="sm" 
                      className="bg-cab-secondary hover:bg-cab-secondary/90"
                      onClick={() => onAssignRide(driver.id)}
                    >
                      Assign Ride
                    </Button>
                  )}
                  {onViewDetails && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onViewDetails(driver.id)}
                    >
                      Details
                    </Button>
                  )}
                  {onCall && (
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => onCall(driver.phone)}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DriverList;

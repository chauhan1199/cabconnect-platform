
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, CornerDownRight, Target } from "lucide-react";
import { useState } from "react";

interface Location {
  id: string;
  mainText: string;
  secondaryText: string;
}

// Mock locations for demonstration
const mockLocations: Location[] = [
  {
    id: "1",
    mainText: "New York Penn Station",
    secondaryText: "New York, NY, USA",
  },
  {
    id: "2",
    mainText: "Grand Central Terminal",
    secondaryText: "New York, NY, USA",
  },
  {
    id: "3",
    mainText: "Times Square",
    secondaryText: "Manhattan, NY, USA",
  },
  {
    id: "4",
    mainText: "Brooklyn Bridge",
    secondaryText: "Brooklyn, NY, USA",
  },
];

interface LocationSelectorProps {
  onSelectPickup: (location: Location) => void;
  onSelectDropoff: (location: Location) => void;
}

const LocationSelector = ({ onSelectPickup, onSelectDropoff }: LocationSelectorProps) => {
  const [pickupSearch, setPickupSearch] = useState("");
  const [dropoffSearch, setDropoffSearch] = useState("");
  const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
  const [showDropoffSuggestions, setShowDropoffSuggestions] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState<Location | null>(null);
  const [selectedDropoff, setSelectedDropoff] = useState<Location | null>(null);

  const handlePickupSelect = (location: Location) => {
    setSelectedPickup(location);
    setPickupSearch(location.mainText);
    setShowPickupSuggestions(false);
    onSelectPickup(location);
  };

  const handleDropoffSelect = (location: Location) => {
    setSelectedDropoff(location);
    setDropoffSearch(location.mainText);
    setShowDropoffSuggestions(false);
    onSelectDropoff(location);
  };

  const filteredPickupLocations = mockLocations.filter(
    (location) => 
      location.mainText.toLowerCase().includes(pickupSearch.toLowerCase()) ||
      location.secondaryText.toLowerCase().includes(pickupSearch.toLowerCase())
  );

  const filteredDropoffLocations = mockLocations.filter(
    (location) => 
      location.mainText.toLowerCase().includes(dropoffSearch.toLowerCase()) ||
      location.secondaryText.toLowerCase().includes(dropoffSearch.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Pickup Location */}
      <div className="relative">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-green-600" />
            </div>
          </div>
          <div className="flex-grow relative">
            <Input
              placeholder="Enter pickup location"
              value={pickupSearch}
              onChange={(e) => {
                setPickupSearch(e.target.value);
                setShowPickupSuggestions(true);
              }}
              className="pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2 flex-shrink-0 bg-gray-100 rounded-full" 
            title="Use current location"
          >
            <Target className="h-4 w-4" />
          </Button>
        </div>

        {showPickupSuggestions && pickupSearch.length > 0 && (
          <Card className="absolute z-10 mt-1 w-full max-h-48 overflow-auto shadow-lg">
            <div className="p-1">
              {filteredPickupLocations.length > 0 ? (
                filteredPickupLocations.map((location) => (
                  <div
                    key={location.id}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => handlePickupSelect(location)}
                  >
                    <div className="font-medium">{location.mainText}</div>
                    <div className="text-xs text-gray-500">{location.secondaryText}</div>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No locations found</div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Dropoff Location */}
      <div className="relative">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-2">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
              <CornerDownRight className="h-4 w-4 text-red-600" />
            </div>
          </div>
          <div className="flex-grow relative">
            <Input
              placeholder="Enter destination"
              value={dropoffSearch}
              onChange={(e) => {
                setDropoffSearch(e.target.value);
                setShowDropoffSuggestions(true);
              }}
              className="pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {showDropoffSuggestions && dropoffSearch.length > 0 && (
          <Card className="absolute z-10 mt-1 w-full max-h-48 overflow-auto shadow-lg">
            <div className="p-1">
              {filteredDropoffLocations.length > 0 ? (
                filteredDropoffLocations.map((location) => (
                  <div
                    key={location.id}
                    className="p-2 hover:bg-gray-100 rounded cursor-pointer"
                    onClick={() => handleDropoffSelect(location)}
                  >
                    <div className="font-medium">{location.mainText}</div>
                    <div className="text-xs text-gray-500">{location.secondaryText}</div>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No locations found</div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;

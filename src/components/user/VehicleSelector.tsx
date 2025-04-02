
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Car, Truck, GraduationCap, Sailboat } from "lucide-react";

interface VehicleOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  capacity: number;
  priceMultiplier: number;
}

const vehicleOptions: VehicleOption[] = [
  {
    id: "sedan",
    name: "Sedan",
    icon: <Car className="h-8 w-8" />,
    description: "Comfortable for up to 4 passengers",
    capacity: 4,
    priceMultiplier: 1.0,
  },
  {
    id: "suv",
    name: "SUV",
    icon: <Truck className="h-8 w-8" />,
    description: "Spacious ride for up to 6 passengers",
    capacity: 6,
    priceMultiplier: 1.3,
  },
  {
    id: "luxury",
    name: "Luxury",
    icon: <GraduationCap className="h-8 w-8" />,
    description: "Premium experience for up to 4 passengers",
    capacity: 4,
    priceMultiplier: 1.8,
  },
  {
    id: "premium",
    name: "Premium",
    icon: <Sailboat className="h-8 w-8" />,
    description: "Top-tier comfort for up to 4 passengers",
    capacity: 4,
    priceMultiplier: 2.5,
  },
];

interface VehicleSelectorProps {
  onSelect: (vehicle: VehicleOption) => void;
  selectedVehicleId?: string;
}

const VehicleSelector = ({ onSelect, selectedVehicleId }: VehicleSelectorProps) => {
  const [selected, setSelected] = useState<string>(selectedVehicleId || vehicleOptions[0].id);

  const handleSelect = (vehicle: VehicleOption) => {
    setSelected(vehicle.id);
    onSelect(vehicle);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {vehicleOptions.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => handleSelect(vehicle)}
            className={cn(
              "vehicle-card bg-white p-4 rounded-xl border",
              selected === vehicle.id 
                ? "border-cab-secondary shadow-md" 
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <div className="flex justify-between items-start mb-2">
              <div 
                className={cn(
                  "p-2 rounded-lg",
                  selected === vehicle.id ? "bg-cab-secondary/10" : "bg-gray-100"
                )}
              >
                {vehicle.icon}
              </div>
              <div className="text-right">
                <div 
                  className={cn(
                    "text-xs rounded-full px-2 py-0.5",
                    selected === vehicle.id 
                      ? "bg-cab-secondary/10 text-cab-secondary" 
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  {vehicle.capacity} seats
                </div>
              </div>
            </div>
            <h3 className="font-semibold mt-2">{vehicle.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{vehicle.description}</p>
            <div className="mt-2 text-sm font-medium">
              {vehicle.priceMultiplier > 1 
                ? `${vehicle.priceMultiplier}x standard fare`
                : "Standard fare"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelector;

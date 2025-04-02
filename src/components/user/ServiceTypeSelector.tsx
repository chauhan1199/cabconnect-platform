
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Repeat, Clock, Navigation } from "lucide-react";

interface ServiceType {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

const serviceTypes: ServiceType[] = [
  {
    id: "one-way",
    name: "One Way",
    icon: <ArrowRight className="h-6 w-6" />,
    description: "Travel from point A to point B",
  },
  {
    id: "round-trip",
    name: "Round Trip",
    icon: <Repeat className="h-6 w-6" />,
    description: "Go and return to the same point",
  },
  {
    id: "hourly-rental",
    name: "Hourly Rental",
    icon: <Clock className="h-6 w-6" />,
    description: "Hire a cab by the hour",
  },
  {
    id: "city-ride",
    name: "City Ride",
    icon: <Navigation className="h-6 w-6" />,
    description: "Travel within city limits",
  },
];

interface ServiceTypeSelectorProps {
  onSelect: (service: ServiceType) => void;
}

const ServiceTypeSelector = ({ onSelect }: ServiceTypeSelectorProps) => {
  const [selected, setSelected] = useState<string>(serviceTypes[0].id);

  const handleSelect = (service: ServiceType) => {
    setSelected(service.id);
    onSelect(service);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {serviceTypes.map((service) => (
        <div
          key={service.id}
          onClick={() => handleSelect(service)}
          className={cn(
            "p-4 rounded-xl cursor-pointer transition-all",
            selected === service.id 
              ? "bg-cab-secondary text-white" 
              : "bg-white hover:bg-gray-50 border border-gray-200"
          )}
        >
          <div className="flex flex-col items-center text-center">
            <div 
              className={cn(
                "p-3 rounded-full mb-3",
                selected === service.id ? "bg-white/10" : "bg-cab-secondary/10"
              )}
            >
              <div className={selected === service.id ? "text-white" : "text-cab-secondary"}>
                {service.icon}
              </div>
            </div>
            <h3 className="font-medium text-base mb-1">{service.name}</h3>
            <p 
              className={cn(
                "text-xs",
                selected === service.id ? "text-white/80" : "text-gray-500"
              )}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceTypeSelector;


import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import LocationSelector from "@/components/user/LocationSelector";
import VehicleSelector from "@/components/user/VehicleSelector";
import ServiceTypeSelector from "@/components/user/ServiceTypeSelector";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, CreditCard, Wallet } from "lucide-react";

interface Location {
  id: string;
  mainText: string;
  secondaryText: string;
}

interface ServiceType {
  id: string;
  name: string;
  description: string;
}

interface VehicleOption {
  id: string;
  name: string;
  capacity: number;
  priceMultiplier: number;
}

const BookRide = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [pickup, setPickup] = useState<Location | null>(null);
  const [dropoff, setDropoff] = useState<Location | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleOption | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "wallet">("cash");

  // Estimated price calculation (simplified)
  const basePrice = 15.0;
  const distanceMultiplier = 1.5;
  const vehicleMultiplier = selectedVehicle?.priceMultiplier || 1;
  const estimatedPrice = basePrice * distanceMultiplier * vehicleMultiplier;

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleConfirmBooking = () => {
    // Placeholder for booking confirmation
    console.log("Booking confirmed!");
    console.log({
      pickup,
      dropoff,
      serviceType,
      selectedVehicle,
      date,
      paymentMethod,
      estimatedPrice,
    });
  };

  return (
    <SidebarLayout type="user">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Book a Ride</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div 
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full mr-2 border",
                    currentStep >= 1 ? "bg-cab-secondary text-white border-cab-secondary" : "bg-gray-100 text-gray-500 border-gray-300"
                  )}
                >
                  1
                </div>
                <div className={cn(
                  "flex-grow h-1",
                  currentStep >= 2 ? "bg-cab-secondary" : "bg-gray-200"
                )}></div>
                <div 
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full mx-2 border",
                    currentStep >= 2 ? "bg-cab-secondary text-white border-cab-secondary" : "bg-gray-100 text-gray-500 border-gray-300"
                  )}
                >
                  2
                </div>
                <div className={cn(
                  "flex-grow h-1",
                  currentStep >= 3 ? "bg-cab-secondary" : "bg-gray-200"
                )}></div>
                <div 
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full ml-2 border",
                    currentStep >= 3 ? "bg-cab-secondary text-white border-cab-secondary" : "bg-gray-100 text-gray-500 border-gray-300"
                  )}
                >
                  3
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className={cn(
                  "text-center",
                  currentStep >= 1 ? "text-cab-secondary font-medium" : "text-gray-500"
                )}>
                  Location & Service
                </div>
                <div className={cn(
                  "text-center",
                  currentStep >= 2 ? "text-cab-secondary font-medium" : "text-gray-500"
                )}>
                  Vehicle & Schedule
                </div>
                <div className={cn(
                  "text-center",
                  currentStep >= 3 ? "text-cab-secondary font-medium" : "text-gray-500"
                )}>
                  Confirmation
                </div>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Service Type</h3>
                  <ServiceTypeSelector onSelect={setServiceType} />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Enter Location Details</h3>
                  <LocationSelector 
                    onSelectPickup={setPickup} 
                    onSelectDropoff={setDropoff} 
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNextStep}
                    className="bg-cab-secondary hover:bg-cab-secondary/90"
                    disabled={!pickup || !dropoff || !serviceType}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Vehicle Type</h3>
                  <VehicleSelector onSelect={setSelectedVehicle} />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Schedule Ride</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Tabs defaultValue="now">
                        <TabsList className="mb-4">
                          <TabsTrigger value="now">Ride Now</TabsTrigger>
                          <TabsTrigger value="schedule">Schedule</TabsTrigger>
                        </TabsList>
                        <TabsContent value="now">
                          <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Your ride will be booked immediately.</p>
                          </div>
                        </TabsContent>
                        <TabsContent value="schedule">
                          <div>
                            <div className="mb-4">
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full justify-start text-left font-normal",
                                      !date && "text-muted-foreground"
                                    )}
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div>
                              <select className="w-full p-2 border rounded-md">
                                <option value="08:00">08:00 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">01:00 PM</option>
                                <option value="14:00">02:00 PM</option>
                                <option value="15:00">03:00 PM</option>
                                <option value="16:00">04:00 PM</option>
                                <option value="17:00">05:00 PM</option>
                                <option value="18:00">06:00 PM</option>
                              </select>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleNextStep}
                    className="bg-cab-secondary hover:bg-cab-secondary/90"
                    disabled={!selectedVehicle}
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Ride Summary</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">From</div>
                        <div className="font-medium">{pickup?.mainText}</div>
                        <div className="text-sm text-gray-500">{pickup?.secondaryText}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">To</div>
                        <div className="font-medium">{dropoff?.mainText}</div>
                        <div className="text-sm text-gray-500">{dropoff?.secondaryText}</div>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Service Type</div>
                        <div className="font-medium">{serviceType?.name}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Vehicle Type</div>
                        <div className="font-medium">{selectedVehicle?.name}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Date & Time</div>
                        <div className="font-medium">
                          {date ? format(date, "MMM d, yyyy") : "Today"} • Now
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between">
                      <div className="text-sm text-gray-500">Estimated Fare</div>
                      <div className="font-semibold text-lg">${estimatedPrice.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer hover:border-cab-secondary transition-colors",
                        paymentMethod === "cash" ? "border-cab-secondary bg-cab-secondary/5" : ""
                      )}
                      onClick={() => setPaymentMethod("cash")}
                    >
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        <span className="font-medium">Cash</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Pay with cash after the ride</p>
                    </div>
                    
                    <div 
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer hover:border-cab-secondary transition-colors",
                        paymentMethod === "card" ? "border-cab-secondary bg-cab-secondary/5" : ""
                      )}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        <span className="font-medium">Credit Card</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Pay securely with your card</p>
                    </div>
                    
                    <div 
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer hover:border-cab-secondary transition-colors",
                        paymentMethod === "wallet" ? "border-cab-secondary bg-cab-secondary/5" : ""
                      )}
                      onClick={() => setPaymentMethod("wallet")}
                    >
                      <div className="flex items-center">
                        <Wallet className="h-5 w-5 mr-2" />
                        <span className="font-medium">Wallet</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">Pay with your wallet balance</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={handlePrevStep}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleConfirmBooking}
                    className="bg-cab-secondary hover:bg-cab-secondary/90"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default BookRide;

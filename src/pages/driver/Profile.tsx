
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Car, Shield, Star, MapPin, Phone, Mail, FileText, Upload, AlertCircle } from "lucide-react";

const DriverProfile = () => {
  return (
    <SidebarLayout type="driver">
      <div className="max-w-3xl mx-auto">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-2xl bg-cab-secondary text-white">MD</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h2 className="text-2xl font-bold">Michael Davis</h2>
                  <Badge className="bg-green-100 text-green-800 inline-flex">Verified Driver</Badge>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="ml-2 font-medium">4.9</span>
                  <span className="text-sm text-gray-500 ml-1">(248 reviews)</span>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mt-2 text-gray-500 items-center md:items-start">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>New York, NY</span>
                  </div>
                  <div className="hidden md:block text-gray-300 mx-2">|</div>
                  <div className="flex items-center">
                    <Car className="h-4 w-4 mr-1" />
                    <span>Toyota Camry (ABC-1234)</span>
                  </div>
                </div>
              </div>
              <div>
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
            <TabsTrigger value="vehicle" className="flex-1">Vehicle</TabsTrigger>
            <TabsTrigger value="documents" className="flex-1">Documents</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Michael" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Davis" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="michael.davis@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 987-6543" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="456 Driver Street, Apt 7B" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="New York" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" defaultValue="NY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" defaultValue="10002" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driverLicense">Driver's License Number</Label>
                  <Input id="driverLicense" defaultValue="DL-123456789" />
                </div>

                <div className="flex justify-end">
                  <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vehicle">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleMake">Make</Label>
                    <Input id="vehicleMake" defaultValue="Toyota" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleModel">Model</Label>
                    <Input id="vehicleModel" defaultValue="Camry" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicleYear">Year</Label>
                    <Input id="vehicleYear" defaultValue="2020" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleColor">Color</Label>
                    <Input id="vehicleColor" defaultValue="Silver" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="licensePlate">License Plate</Label>
                    <Input id="licensePlate" defaultValue="ABC-1234" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicleRegistration">Registration Number</Label>
                    <Input id="vehicleRegistration" defaultValue="REG987654321" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleInsurance">Insurance Policy Number</Label>
                  <Input id="vehicleInsurance" defaultValue="INS-456789-XYZ" />
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-md border border-yellow-200">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-yellow-700">Vehicle Inspection Due</h4>
                      <p className="text-sm text-yellow-600">Your annual vehicle inspection is due in 15 days.</p>
                    </div>
                  </div>
                  <Button variant="outline" className="border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                    Schedule
                  </Button>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                    Update Vehicle Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Documents & Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Verification Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile Completion</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <FileText className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                          <div>
                            <h4 className="font-medium">Driver's License</h4>
                            <p className="text-sm text-gray-500">Uploaded on May 10, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 gap-2">
                        <Upload className="h-4 w-4" />
                        Update
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <FileText className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                          <div>
                            <h4 className="font-medium">Vehicle Registration</h4>
                            <p className="text-sm text-gray-500">Uploaded on May 10, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 gap-2">
                        <Upload className="h-4 w-4" />
                        Update
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <FileText className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                          <div>
                            <h4 className="font-medium">Insurance Certificate</h4>
                            <p className="text-sm text-gray-500">Uploaded on May 12, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 gap-2">
                        <Upload className="h-4 w-4" />
                        Update
                      </Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <FileText className="h-5 w-5 text-gray-500 mr-2 mt-1" />
                          <div>
                            <h4 className="font-medium">Background Check</h4>
                            <p className="text-sm text-gray-500">Completed on May 15, 2023</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                      </div>
                      <div className="mt-4 text-sm text-gray-500">
                        Background check valid for 2 years
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-medium mb-4">Add Additional Documents</h3>
                  <div className="border border-dashed rounded-lg p-8 text-center">
                    <Upload className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-500 mb-4">Drag and drop files here, or click to browse</p>
                    <Button className="bg-cab-secondary hover:bg-cab-secondary/90">
                      Upload Document
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <CardTitle className="text-xl">Customer Reviews</CardTitle>
                  <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-md">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold mr-1">4.9</span>
                    <span className="text-sm text-gray-500">overall rating</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Review item */}
                <div className="border-b pb-6">
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">John Smith</h4>
                        <span className="text-sm text-gray-500">June 15, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <p className="text-gray-600 mt-2">
                        Great driver! Very professional and got me to my destination on time despite heavy traffic. The car was clean and comfortable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review item */}
                <div className="border-b pb-6">
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Emily Johnson</h4>
                        <span className="text-sm text-gray-500">June 12, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <p className="text-gray-600 mt-2">
                        One of the best drivers I've had. Very friendly and courteous. Knew exactly which route to take to avoid traffic. Highly recommend!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review item */}
                <div className="border-b pb-6">
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>RD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Robert Davis</h4>
                        <span className="text-sm text-gray-500">June 8, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <p className="text-gray-600 mt-2">
                        Good service overall. Car was clean and ride was smooth. Could improve on knowing local shortcuts, but was a pleasant experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review item */}
                <div>
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Sarah Wilson</h4>
                        <span className="text-sm text-gray-500">June 5, 2023</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <p className="text-gray-600 mt-2">
                        Excellent driver! Arrived early, helped with my luggage, and was very conversational. The car was immaculate and the ride was very comfortable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Button variant="outline">
                    Load More Reviews
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarLayout>
  );
};

export default DriverProfile;

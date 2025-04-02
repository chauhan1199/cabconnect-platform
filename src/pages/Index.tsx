
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, Clock, Shield, Truck, GraduationCap, Sailboat, RepeatIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar transparent />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-r from-cab-primary to-cab-primary/90 text-white">
        <div 
          className="absolute inset-0 bg-black opacity-50 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1635261894608-06ae676d6351?q=80&w=1740&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "multiply"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Ride, Your Way</h1>
              <p className="text-lg mb-8 text-white/80">
                Book a cab in just a few taps. Choose from different ride types and get to your destination safely and comfortably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/user/book">
                  <Button size="lg" className="bg-cab-secondary hover:bg-cab-secondary/90 rounded-full">
                    <span>Book a Ride</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/driver/dashboard">
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full">
                    <span>Drive with Us</span>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block">
              <Card className="shadow-xl bg-white/10 backdrop-blur-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Book your ride now</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-white/10 rounded-lg flex items-center justify-center">
                        <Car className="h-6 w-6 mr-2" />
                        <span>One Way</span>
                      </div>
                      <div className="p-3 bg-white/10 rounded-lg flex items-center justify-center">
                        <RepeatIcon className="h-6 w-6 mr-2" />
                        <span>Round Trip</span>
                      </div>
                    </div>
                    
                    <div>
                      <Link to="/user/book">
                        <Button className="w-full bg-cab-secondary hover:bg-cab-secondary/90 rounded-full">
                          Continue
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a variety of ride options to suit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-cab-primary/10 flex items-center justify-center">
                <Car className="h-16 w-16 text-cab-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">One Way Rides</h3>
                <p className="text-gray-600 mb-4">
                  Travel from point A to point B with ease and comfort.
                </p>
                <Link to="/user/book">
                  <Button variant="ghost" className="group">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-cab-primary/10 flex items-center justify-center">
                <RepeatIcon className="h-16 w-16 text-cab-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Round Trip</h3>
                <p className="text-gray-600 mb-4">
                  Go and return to the same location with a single booking.
                </p>
                <Link to="/user/book">
                  <Button variant="ghost" className="group">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-cab-primary/10 flex items-center justify-center">
                <Clock className="h-16 w-16 text-cab-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hourly Rental</h3>
                <p className="text-gray-600 mb-4">
                  Hire a cab by the hour for meetings or local errands.
                </p>
                <Link to="/user/book">
                  <Button variant="ghost" className="group">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-cab-primary/10 flex items-center justify-center">
                <Truck className="h-16 w-16 text-cab-secondary" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">City Rides</h3>
                <p className="text-gray-600 mb-4">
                  Explore the city with point-to-point local travel options.
                </p>
                <Link to="/user/book">
                  <Button variant="ghost" className="group">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Vehicle Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Ride</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our diverse fleet to match your comfort and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border rounded-xl bg-white hover:shadow-md transition-shadow">
              <Car className="h-12 w-12 text-cab-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sedan</h3>
              <p className="text-gray-600">
                Comfortable ride for up to 4 passengers. Ideal for city travel.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl bg-white hover:shadow-md transition-shadow">
              <Truck className="h-12 w-12 text-cab-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">SUV</h3>
              <p className="text-gray-600">
                Spacious vehicle for up to 6 passengers with extra luggage space.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl bg-white hover:shadow-md transition-shadow">
              <GraduationCap className="h-12 w-12 text-cab-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Luxury</h3>
              <p className="text-gray-600">
                Premium ride experience with top-tier comfort and amenities.
              </p>
            </div>
            
            <div className="p-6 border rounded-xl bg-white hover:shadow-md transition-shadow">
              <Sailboat className="h-12 w-12 text-cab-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600">
                VIP travel experience with best-in-class service and features.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-cab-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CabConnect</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Experience unmatched service quality and reliability with every ride.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-block mb-4">
                <Clock className="h-8 w-8 text-cab-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-white/80">
                Our services are available around the clock, ensuring you can get a ride whenever you need one.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-block mb-4">
                <Shield className="h-8 w-8 text-cab-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-white/80">
                All our drivers are verified and trained, and our vehicles undergo regular safety checks.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white/10 rounded-full p-4 inline-block mb-4">
                <Car className="h-8 w-8 text-cab-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Options</h3>
              <p className="text-white/80">
                Choose from various vehicle types and service categories to match your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action Section */}
      <section className="py-16 bg-cab-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Best Ride?</h2>
            <p className="text-white/80 mb-8">
              Join thousands of satisfied customers who rely on CabConnect for their daily transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user/dashboard">
                <Button size="lg" className="bg-white text-cab-secondary hover:bg-gray-100 rounded-full">
                  <span>Book as Passenger</span>
                </Button>
              </Link>
              <Link to="/driver/dashboard">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
                  <span>Register as Driver</span>
                </Button>
              </Link>
              <Link to="/vendor/dashboard">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full">
                  <span>Join as Vendor</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

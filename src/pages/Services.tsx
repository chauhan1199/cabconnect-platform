
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Map, Car, Clock, Shield, TrendingUp, Users } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Standard Rides",
      description: "Affordable, everyday rides for any occasion",
      icon: <Car className="h-12 w-12 text-cab-secondary mb-4" />,
    },
    {
      title: "Premium Service",
      description: "Luxury vehicles with professional drivers",
      icon: <TrendingUp className="h-12 w-12 text-cab-secondary mb-4" />,
    },
    {
      title: "Scheduled Rides",
      description: "Book in advance for important appointments",
      icon: <Clock className="h-12 w-12 text-cab-secondary mb-4" />,
    },
    {
      title: "Shared Rides",
      description: "Eco-friendly option that saves you money",
      icon: <Users className="h-12 w-12 text-cab-secondary mb-4" />,
    },
    {
      title: "Airport Transfers",
      description: "Reliable rides to and from the airport",
      icon: <Map className="h-12 w-12 text-cab-secondary mb-4" />,
    },
    {
      title: "Safe Rides Program",
      description: "Extra safety measures for peace of mind",
      icon: <Shield className="h-12 w-12 text-cab-secondary mb-4" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 bg-cab-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Transportation Services</h1>
            <p className="text-xl mb-8">
              Discover the perfect ride option for your needs, from everyday commutes to special occasions
            </p>
          </div>
        </div>
      </section>
      
      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cab-primary">
            Services We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cab-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-cab-primary">Ready to Ride with Us?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference of our professional transportation services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90 px-8 py-6 text-lg rounded-full">
                  Register Now
                </Button>
              </Link>
              <Link to="/user/book">
                <Button variant="outline" className="px-8 py-6 text-lg rounded-full border-cab-secondary text-cab-secondary hover:bg-cab-secondary/10">
                  Book a Ride
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

export default ServicesPage;

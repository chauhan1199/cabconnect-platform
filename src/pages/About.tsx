import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Car, Award, ArrowRight, Heart, Target, TrendingUp, Shield } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      title: "Customer First",
      description: "We prioritize your convenience, safety, and satisfaction above all else.",
      icon: <Heart className="h-10 w-10 text-cab-secondary" />,
    },
    {
      title: "Safety",
      description: "We implement rigorous safety standards for all our drivers and vehicles.",
      icon: <Shield className="h-10 w-10 text-cab-secondary" />,
    },
    {
      title: "Innovation",
      description: "We constantly evolve our technology to improve your experience.",
      icon: <TrendingUp className="h-10 w-10 text-cab-secondary" />,
    },
    {
      title: "Transparency",
      description: "We believe in open communication and honest pricing.",
      icon: <Target className="h-10 w-10 text-cab-secondary" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 bg-cab-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CabConnect</h1>
            <p className="text-xl mb-8">
              Transforming urban transportation one ride at a time
            </p>
          </div>
        </div>
      </section>
      
      {/* Story section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cab-primary">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, CabConnect started with a simple vision: to create a seamless connection between passengers and drivers. What began as a small startup with just 10 drivers has now evolved into a comprehensive transportation platform serving thousands of customers daily.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been driven by a commitment to innovation, safety, and customer satisfaction. We've weathered challenges, adapted to changing technologies, and continuously refined our services to meet the evolving needs of our community.
              </p>
              <p className="text-gray-600">
                Today, CabConnect stands as a leader in the transportation industry, but we haven't forgotten our roots. We remain dedicated to our original mission: providing reliable, affordable, and accessible transportation for all.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Car className="h-20 w-20 text-cab-secondary mx-auto mb-6" />
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cab-primary">5K+</div>
                  <div className="text-gray-600">Drivers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cab-primary">100K+</div>
                  <div className="text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cab-primary">50+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
              </div>
              <div className="text-gray-600 italic">
                "Connecting people to possibilities through reliable transportation."
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cab-primary">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4 border border-gray-100"
              >
                <div className="bg-cab-primary/10 p-4 rounded-full">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cab-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cab-primary">
            Our Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((person) => (
              <div key={person} className="text-center">
                <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src="/placeholder.svg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-cab-primary">Jane Doe</h3>
                <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                <p className="text-gray-500 text-sm">
                  With over 15 years of experience in transportation and technology.
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center text-cab-secondary font-medium hover:underline">
              Get in touch with our team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-cab-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8">
              Be part of our mission to transform transportation for communities worldwide
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button className="bg-cab-secondary hover:bg-cab-secondary/90 px-8 py-2 text-lg rounded-full">
                  Sign Up Today
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="px-8 py-2 text-lg rounded-full border-white text-white hover:bg-white/10">
                  Contact Us
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

export default AboutPage;

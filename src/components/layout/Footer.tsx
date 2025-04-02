
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cab-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8 text-cab-secondary" />
              <span className="text-xl font-bold">CabConnect</span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              A comprehensive cab service platform connecting passengers, drivers, and service providers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><Link to="/user/dashboard" className="text-gray-400 hover:text-white transition-colors">User Dashboard</Link></li>
              <li><Link to="/user/book" className="text-gray-400 hover:text-white transition-colors">Book a Ride</Link></li>
              <li><Link to="/user/history" className="text-gray-400 hover:text-white transition-colors">Ride History</Link></li>
              <li><Link to="/user/profile" className="text-gray-400 hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </div>

          {/* Driver Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Drivers</h3>
            <ul className="space-y-2">
              <li><Link to="/driver/dashboard" className="text-gray-400 hover:text-white transition-colors">Driver Dashboard</Link></li>
              <li><Link to="/driver/rides" className="text-gray-400 hover:text-white transition-colors">Manage Rides</Link></li>
              <li><Link to="/driver/earnings" className="text-gray-400 hover:text-white transition-colors">Earnings</Link></li>
              <li><Link to="/driver/profile" className="text-gray-400 hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} CabConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

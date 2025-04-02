
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/user/Dashboard";
import DriverDashboard from "./pages/driver/Dashboard";
import VendorDashboard from "./pages/vendor/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import BookRide from "./pages/user/BookRide";
import RideHistory from "./pages/user/RideHistory";
import UserProfile from "./pages/user/Profile";
import DriverProfile from "./pages/driver/Profile";
import DriverRides from "./pages/driver/Rides";
import DriverEarnings from "./pages/driver/Earnings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<Index />} />
          
          {/* User Routes */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/book" element={<BookRide />} />
          <Route path="/user/history" element={<RideHistory />} />
          <Route path="/user/profile" element={<UserProfile />} />
          
          {/* Driver Routes */}
          <Route path="/driver/dashboard" element={<DriverDashboard />} />
          <Route path="/driver/rides" element={<DriverRides />} />
          <Route path="/driver/earnings" element={<DriverEarnings />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          
          {/* Vendor Routes */}
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

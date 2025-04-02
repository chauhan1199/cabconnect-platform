
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuthenticated, getCurrentUser } from "@/services/auth";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

// User Pages
import UserDashboard from "./pages/user/Dashboard";
import BookRide from "./pages/user/BookRide";
import RideHistory from "./pages/user/RideHistory";
import UserProfile from "./pages/user/Profile";
import Wallet from "./pages/user/Wallet";

// Driver Pages
import DriverDashboard from "./pages/driver/Dashboard";
import DriverProfile from "./pages/driver/Profile";
import DriverRides from "./pages/driver/Rides";
import DriverEarnings from "./pages/driver/Earnings";

// Vendor Pages
import VendorDashboard from "./pages/vendor/Dashboard";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole?: string }) => {
  const authed = isAuthenticated();
  const user = getCurrentUser();
  
  if (!authed) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    // Redirect to appropriate dashboard based on role
    const roleRoute = 
      user?.role === 'admin' ? '/admin/dashboard' :
      user?.role === 'driver' ? '/driver/dashboard' :
      user?.role === 'vendor' ? '/vendor/dashboard' : 
      '/user/dashboard';
    
    return <Navigate to={roleRoute} replace />;
  }
  
  return children;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading auth state
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* User Routes */}
            <Route 
              path="/user/dashboard" 
              element={
                <ProtectedRoute requiredRole="user">
                  <UserDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/book" 
              element={
                <ProtectedRoute requiredRole="user">
                  <BookRide />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/history" 
              element={
                <ProtectedRoute requiredRole="user">
                  <RideHistory />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/profile" 
              element={
                <ProtectedRoute requiredRole="user">
                  <UserProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/user/wallet" 
              element={
                <ProtectedRoute requiredRole="user">
                  <Wallet />
                </ProtectedRoute>
              } 
            />
            
            {/* Driver Routes */}
            <Route 
              path="/driver/dashboard" 
              element={
                <ProtectedRoute requiredRole="driver">
                  <DriverDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/driver/rides" 
              element={
                <ProtectedRoute requiredRole="driver">
                  <DriverRides />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/driver/earnings" 
              element={
                <ProtectedRoute requiredRole="driver">
                  <DriverEarnings />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/driver/profile" 
              element={
                <ProtectedRoute requiredRole="driver">
                  <DriverProfile />
                </ProtectedRoute>
              } 
            />
            
            {/* Vendor Routes */}
            <Route 
              path="/vendor/dashboard" 
              element={
                <ProtectedRoute requiredRole="vendor">
                  <VendorDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

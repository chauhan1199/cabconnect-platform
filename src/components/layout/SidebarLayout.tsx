
import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  User, 
  Clock, 
  MapPin, 
  CreditCard, 
  Settings,
  Bell,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
  Users,
  Truck,
  Building,
  History
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
  badge?: number;
  active?: boolean;
}

const SidebarLink = ({ to, icon, label, badge, active }: SidebarLinkProps) => (
  <Link to={to}>
    <Button 
      variant="ghost" 
      className={cn(
        "w-full justify-start mb-1 font-normal",
        active ? "bg-cab-secondary/10 text-cab-secondary" : ""
      )}
    >
      {icon}
      <span className="ml-2">{label}</span>
      {badge && (
        <span className="ml-auto bg-cab-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </Button>
  </Link>
);

interface SidebarLayoutProps {
  children: ReactNode;
  type: "user" | "driver" | "vendor" | "admin";
}

const SidebarLayout = ({ children, type }: SidebarLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Common navigation
  const commonNavigation = [
    { to: `/${type}/profile`, icon: <User className="h-4 w-4" />, label: "Profile" },
    { to: `/${type}/settings`, icon: <Settings className="h-4 w-4" />, label: "Settings" },
  ];
  
  // Type specific navigation
  const navigationByType = {
    user: [
      { to: "/user/dashboard", icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard" },
      { to: "/user/book", icon: <Car className="h-4 w-4" />, label: "Book a Ride" },
      { to: "/user/history", icon: <Clock className="h-4 w-4" />, label: "Ride History" },
      { to: "/user/wallet", icon: <CreditCard className="h-4 w-4" />, label: "Wallet" },
    ],
    driver: [
      { to: "/driver/dashboard", icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard" },
      { to: "/driver/rides", icon: <Car className="h-4 w-4" />, label: "My Rides", badge: 2 },
      { to: "/driver/earnings", icon: <CreditCard className="h-4 w-4" />, label: "Earnings" },
      { to: "/driver/navigation", icon: <MapPin className="h-4 w-4" />, label: "Navigation" },
    ],
    vendor: [
      { to: "/vendor/dashboard", icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard" },
      { to: "/vendor/rides", icon: <Clock className="h-4 w-4" />, label: "Manage Rides", badge: 5 },
      { to: "/vendor/drivers", icon: <Users className="h-4 w-4" />, label: "Drivers" },
      { to: "/vendor/earnings", icon: <CreditCard className="h-4 w-4" />, label: "Earnings" },
      { to: "/vendor/reports", icon: <History className="h-4 w-4" />, label: "Reports" },
    ],
    admin: [
      { to: "/admin/dashboard", icon: <LayoutDashboard className="h-4 w-4" />, label: "Dashboard" },
      { to: "/admin/users", icon: <Users className="h-4 w-4" />, label: "Users" },
      { to: "/admin/drivers", icon: <Car className="h-4 w-4" />, label: "Drivers" },
      { to: "/admin/vendors", icon: <Building className="h-4 w-4" />, label: "Vendors" },
      { to: "/admin/vehicles", icon: <Truck className="h-4 w-4" />, label: "Vehicles" },
      { to: "/admin/earnings", icon: <CreditCard className="h-4 w-4" />, label: "Earnings" },
      { to: "/admin/reports", icon: <History className="h-4 w-4" />, label: "Reports" },
    ],
  };
  
  const navigation = [...navigationByType[type], ...commonNavigation];
  
  const typeDisplayName = {
    user: "User",
    driver: "Driver",
    vendor: "Vendor",
    admin: "Admin",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "w-64 bg-white border-r border-gray-200 fixed top-0 bottom-0 left-0 z-40 transition-transform duration-300",
          isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        )}
      >
        <div className="p-4 flex items-center gap-2 border-b border-gray-200">
          <Car className="h-8 w-8 text-cab-secondary" />
          <span className="text-xl font-bold text-cab-primary">CabConnect</span>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-3 mb-6">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-cab-secondary text-white">
                {type.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{typeDisplayName[type]} Name</h4>
              <p className="text-sm text-gray-500">
                {type === "user" && "User"}
                {type === "driver" && "Licensed Driver"}
                {type === "vendor" && "Cab Service Provider"}
                {type === "admin" && "System Administrator"}
              </p>
            </div>
          </div>
          
          <div className="space-y-1">
            {navigation.map((item) => (
              <SidebarLink
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                active={location.pathname === item.to}
              />
            ))}
            
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start text-red-500 font-normal mt-4">
                <LogOut className="h-4 w-4" />
                <span className="ml-2">Logout</span>
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn(
        "flex-1 transition-all duration-300",
        !isMobile && "ml-64"
      )}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-cab-primary">
              {location.pathname.split('/').pop()?.charAt(0).toUpperCase() + location.pathname.split('/').pop()?.slice(1)}
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back to your {typeDisplayName[type]} dashboard
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </header>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SidebarLayout;

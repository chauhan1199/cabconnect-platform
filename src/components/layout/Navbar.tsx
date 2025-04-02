
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Car, PhoneCall, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { isAuthenticated, getCurrentUser, logoutUser } from "@/services/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkAuth = () => {
      const isAuthed = isAuthenticated();
      setAuthed(isAuthed);
      
      if (isAuthed) {
        setUser(getCurrentUser());
      }
    };
    
    checkAuth();
    // Add event listener for auth changes (localStorage changes from other tabs)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setAuthed(false);
    setUser(null);
    navigate('/');
  };

  const getProfileRoute = () => {
    if (!user) return '/login';
    
    switch(user.role) {
      case 'driver':
        return '/driver/profile';
      case 'vendor':
        return '/vendor/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/user/profile';
    }
  };

  const getDashboardRoute = () => {
    if (!user) return '/login';
    
    switch(user.role) {
      case 'driver':
        return '/driver/dashboard';
      case 'vendor':
        return '/vendor/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/user/dashboard';
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      transparent ? "bg-transparent" : "bg-white shadow-sm"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-cab-secondary" />
          <span className={cn(
            "text-xl font-bold",
            transparent ? "text-white" : "text-cab-primary"
          )}>
            CabConnect
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "font-medium hover:text-cab-secondary transition-colors",
                transparent ? "text-white" : "text-cab-primary"
              )}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={cn(
                "font-medium hover:text-cab-secondary transition-colors",
                transparent ? "text-white" : "text-cab-primary"
              )}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "font-medium hover:text-cab-secondary transition-colors",
                transparent ? "text-white" : "text-cab-primary"
              )}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "font-medium hover:text-cab-secondary transition-colors",
                transparent ? "text-white" : "text-cab-primary"
              )}
            >
              Contact
            </Link>
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "rounded-full border border-gray-200",
              transparent ? "text-white border-white/20 hover:bg-white/10" : "text-cab-primary hover:bg-gray-100"
            )}
          >
            <PhoneCall className="h-4 w-4" />
          </Button>
          
          {authed ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={cn(
                    "rounded-full flex items-center gap-2",
                    transparent ? "text-white hover:bg-white/10" : "text-cab-primary hover:bg-gray-100"
                  )}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-cab-secondary text-white">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  {!isMobile && <span>{user?.name || 'User'}</span>}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate(getDashboardRoute())}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate(getProfileRoute())}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                {user?.role === 'user' && (
                  <DropdownMenuItem onClick={() => navigate('/user/wallet')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Wallet</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className={cn(
                    "rounded-full",
                    transparent ? "text-white border-white/20 hover:bg-white/10" : ""
                  )}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button 
                  variant={transparent ? "outline" : "default"} 
                  className={cn(
                    "rounded-full",
                    transparent ? "text-white border-white/20 hover:bg-white/10" : "bg-cab-secondary hover:bg-cab-secondary/90"
                  )}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
          
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "ml-2",
                transparent ? "text-white" : "text-cab-primary"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 shadow-lg">
          <div className="container mx-auto py-4 space-y-4">
            <Link 
              to="/" 
              className="block py-2 px-4 text-cab-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block py-2 px-4 text-cab-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 text-cab-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 text-cab-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {authed && (
              <>
                <Link 
                  to={getDashboardRoute()} 
                  className="block py-2 px-4 text-cab-primary hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  className="block w-full text-left py-2 px-4 text-red-500 hover:bg-gray-50 rounded-md"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Log out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

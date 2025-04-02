
import { toast } from "@/hooks/use-toast";

// Define user roles
export type UserRole = "user" | "driver" | "vendor" | "admin";

// Define user type
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
}

// Auth state
export interface AuthState {
  token: string;
  user: User;
}

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getAuthState();
};

// Get current auth state
export const getAuthState = (): AuthState | null => {
  const authData = localStorage.getItem('cabConnectAuth');
  return authData ? JSON.parse(authData) : null;
};

// Get current user
export const getCurrentUser = (): User | null => {
  const authState = getAuthState();
  return authState ? authState.user : null;
};

// Login user
export const loginUser = (email: string, password: string): Promise<User> => {
  // In a real app, this would make an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate different user types based on email for demo purposes
      const role: UserRole = 
        email.includes('driver') ? 'driver' : 
        email.includes('vendor') ? 'vendor' : 
        email.includes('admin') ? 'admin' : 'user';
      
      const user: User = {
        id: `${role}-${Math.random().toString(36).substring(2, 9)}`,
        name: email.split('@')[0],
        email: email,
        role: role
      };
      
      const authState: AuthState = {
        token: `mock-jwt-token-${Math.random().toString(36).substring(2, 15)}`,
        user: user
      };
      
      localStorage.setItem('cabConnectAuth', JSON.stringify(authState));
      resolve(user);
    }, 1000);
  });
};

// Register user
export const registerUser = (userData: { 
  fullName: string; 
  email: string; 
  phone: string; 
  password: string;
}): Promise<User> => {
  // In a real app, this would make an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user: User = {
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        name: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        role: 'user'
      };
      
      resolve(user);
    }, 1000);
  });
};

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem('cabConnectAuth');
  toast({
    title: "Logged out",
    description: "You have been successfully logged out."
  });
};

// Get redirect path based on user role
export const getRedirectPath = (role: UserRole): string => {
  switch (role) {
    case 'driver':
      return '/driver/dashboard';
    case 'vendor':
      return '/vendor/dashboard';
    case 'admin':
      return '/admin/dashboard';
    case 'user':
    default:
      return '/user/dashboard';
  }
};

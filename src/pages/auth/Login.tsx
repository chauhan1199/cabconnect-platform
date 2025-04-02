
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Car } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call for login
    setTimeout(() => {
      // In a real app, this would verify credentials with a backend
      
      // For simplicity, just log them in as a user with some mock data
      localStorage.setItem('cabConnectAuth', JSON.stringify({
        token: "mock-jwt-token-" + Math.random().toString(36).substring(2, 15),
        user: {
          id: "user-123",
          name: "Demo User",
          email: values.email,
          role: "user"
        }
      }));
      
      toast({
        title: "Login successful!",
        description: "Welcome back to CabConnect.",
      });
      
      setIsSubmitting(false);
      navigate("/user/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <Car className="h-12 w-12 text-cab-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-cab-primary">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your CabConnect account</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link to="/forgot-password" className="text-xs text-cab-secondary">
                        Forgot Password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account? <Link to="/register" className="text-cab-secondary font-medium">Sign Up</Link>
            </p>
          </div>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" type="button" onClick={() => toast({ title: "Google Sign-in", description: "This would connect to Google in a real implementation." })}>
                Google
              </Button>
              <Button variant="outline" type="button" onClick={() => toast({ title: "Apple Sign-in", description: "This would connect to Apple in a real implementation." })}>
                Apple
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

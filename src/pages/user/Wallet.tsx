
import { useState } from "react";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Plus, ReceiptText, ArrowDown, ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const WalletPage = () => {
  const { toast } = useToast();
  const [balance, setBalance] = useState(250.00);
  
  const transactions = [
    { id: 1, type: "credit", amount: 100, description: "Added money to wallet", date: "2023-09-15" },
    { id: 2, type: "debit", amount: 65, description: "Ride payment", date: "2023-09-12" },
    { id: 3, type: "debit", amount: 85, description: "Ride payment", date: "2023-09-10" },
    { id: 4, type: "credit", amount: 300, description: "Added money to wallet", date: "2023-09-05" },
    { id: 5, type: "debit", amount: 120, description: "Ride payment", date: "2023-09-01" },
  ];

  const handleAddMoney = () => {
    // In a real app, this would open a payment dialog
    const amount = 100;
    setBalance(prev => prev + amount);
    toast({
      title: "Money Added!",
      description: `$${amount} has been added to your wallet.`,
    });
  };

  return (
    <SidebarLayout type="user">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              Your Wallet
            </CardTitle>
            <CardDescription>Manage your wallet and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-cab-primary to-cab-secondary p-6 rounded-lg text-white mb-4">
              <div className="flex items-center justify-between mb-4">
                <CreditCard className="h-8 w-8" />
                <span className="text-sm opacity-80">CabConnect</span>
              </div>
              <p className="text-sm mb-1 opacity-80">Current Balance</p>
              <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
            </div>
            <Button onClick={handleAddMoney} className="w-full">
              <Plus className="h-4 w-4 mr-2" /> Add Money
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ReceiptText className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your recent wallet activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'}`}>
                      {transaction.type === 'credit' ? (
                        <ArrowDown className="h-4 w-4 text-green-600" />
                      ) : (
                        <ArrowUp className="h-4 w-4 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className={`font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'credit' ? '+' : '-'}${transaction.amount}
                    </p>
                    <Badge variant={transaction.type === 'credit' ? 'default' : 'destructive'}>
                      {transaction.type === 'credit' ? 'Credit' : 'Debit'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">View All Transactions</Button>
          </CardFooter>
        </Card>
      </div>
    </SidebarLayout>
  );
};

export default WalletPage;

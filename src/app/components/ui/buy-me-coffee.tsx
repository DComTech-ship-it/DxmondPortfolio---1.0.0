'use client';

import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const BuyMeCoffee = () => {
  return (
    <Button
      asChild
      variant="outline"
      className="group flex items-center gap-2 bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-200 hover:border-amber-300 transition-colors"
    >
      <a 
        href="https://www.buymeacoffee.com/dxmond" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Coffee className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span>Buy me a coffee</span>
      </a>
    </Button>
  );
};

export default BuyMeCoffee;

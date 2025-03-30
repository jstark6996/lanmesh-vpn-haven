
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-vpn-dark to-vpn-blue flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <h1 className="text-xl font-bold">LanMesh VPN</h1>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-vpn-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-vpn-blue transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-gray-700 hover:text-vpn-blue transition-colors">
            FAQ
          </a>
        </div>
        
        <Button className="bg-vpn-blue hover:bg-vpn-blue/80" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

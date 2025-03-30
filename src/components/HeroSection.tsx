
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-vpn-dark text-white mesh-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Secure LAN-to-LAN Network with LanMesh VPN
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Connect your local networks securely with our free, open-source VPN solution. 
              No registration, no subscription plans - just download and connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-vpn-blue hover:bg-vpn-blue/80 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-vpn-blue/30 rounded-lg blur-xl"></div>
              <div className="relative bg-vpn-dark rounded-lg p-6 border border-vpn-blue/30">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                  alt="Network Connection" 
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

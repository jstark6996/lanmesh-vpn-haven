
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-16 vpn-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Connect Your Networks?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Download LanMesh VPN now and start creating secure network connections in minutes.
          No registration, no subscription - just download and go.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Button size="lg" className="bg-white text-vpn-dark hover:bg-gray-100">
            <Download className="mr-2 h-5 w-5" />
            Windows
          </Button>
          <Button size="lg" className="bg-white text-vpn-dark hover:bg-gray-100">
            <Download className="mr-2 h-5 w-5" />
            macOS
          </Button>
          <Button size="lg" className="bg-white text-vpn-dark hover:bg-gray-100">
            <Download className="mr-2 h-5 w-5" />
            Linux
          </Button>
        </div>
        
        <p className="text-sm mt-6 text-white/80">
          Version 1.2.0 | Released: June 15, 2023
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;

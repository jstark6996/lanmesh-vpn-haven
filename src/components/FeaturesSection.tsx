
import React from "react";
import { Shield, Wifi, Globe, Link2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Link2 className="h-10 w-10 text-vpn-blue" />,
    title: "LAN-to-LAN Connectivity",
    description: "Connect multiple local networks securely over the internet, creating a unified network experience."
  },
  {
    icon: <Shield className="h-10 w-10 text-vpn-blue" />,
    title: "End-to-End Encryption",
    description: "Military-grade encryption ensures your data remains secure between networks."
  },
  {
    icon: <Wifi className="h-10 w-10 text-vpn-blue" />,
    title: "Simple Setup",
    description: "Quick and easy installation on all your network devices with minimal configuration."
  },
  {
    icon: <Globe className="h-10 w-10 text-vpn-blue" />,
    title: "Cross-Platform Support",
    description: "Available for Windows, macOS, Linux, and compatible with most network devices."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-vpn-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LanMesh VPN is designed specifically for creating secure connections between 
            local networks, with features tailored to network administrators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

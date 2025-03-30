
import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download",
    description: "Download the LanMesh VPN client for your operating system."
  },
  {
    number: "02",
    title: "Install",
    description: "Run the installer and follow the simple setup instructions."
  },
  {
    number: "03",
    title: "Configure",
    description: "Enter the network details you want to connect to."
  },
  {
    number: "04",
    title: "Connect",
    description: "Click connect and your networks are now securely linked."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setting up your LAN-to-LAN VPN is straightforward with our simple four-step process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-vpn-light rounded-lg p-6 h-full border-l-4 border-vpn-blue">
                <div className="text-3xl font-bold text-vpn-blue mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-vpn-blue" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;


import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is a LAN-to-LAN VPN?",
    answer: "A LAN-to-LAN VPN (also known as site-to-site VPN) connects multiple local area networks together securely over the internet, allowing them to communicate as if they were on the same physical network. It's commonly used by businesses with multiple locations or for connecting home networks with office networks."
  },
  {
    question: "Is LanMesh VPN really free?",
    answer: "Yes, LanMesh VPN is completely free to download and use. There are no subscription plans, no hidden fees, and no premium features locked behind a paywall. We believe in providing secure networking solutions accessible to everyone."
  },
  {
    question: "What operating systems does LanMesh VPN support?",
    answer: "LanMesh VPN is available for Windows (7, 8, 10, 11), macOS (10.13 and later), and various Linux distributions (Ubuntu, Debian, CentOS, Fedora). We also offer command-line tools for advanced users and network administrators."
  },
  {
    question: "How secure is LanMesh VPN?",
    answer: "LanMesh VPN uses industry-standard encryption protocols (AES-256) and secure tunneling to protect your data. All traffic between networks is encrypted, and we implement perfect forward secrecy to ensure that even if one session is compromised, past and future sessions remain secure."
  },
  {
    question: "Can I connect more than two networks?",
    answer: "Yes, LanMesh VPN supports connecting multiple networks in a mesh topology, allowing any number of networks to communicate with each other securely. This feature is particularly useful for businesses with multiple branch offices or distributed teams."
  },
  {
    question: "Does LanMesh VPN collect my data?",
    answer: "No, LanMesh VPN doesn't collect any user data or monitor network traffic. The software runs entirely on your own hardware, and no data is sent to our servers. We respect your privacy and believe your network traffic should remain your business."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-vpn-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about LanMesh VPN and how it can help secure your network connections.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-lg">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

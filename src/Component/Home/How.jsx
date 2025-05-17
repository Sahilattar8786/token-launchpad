import React from 'react';
import { Wallet, Edit3, Settings, Rocket } from 'lucide-react'; // or swap with Heroicons

const steps = [
  {
    icon: <Wallet className="h-8 w-8 text-indigo-600" />,
    title: "Connect Wallet",
    desc: "Connect your Solana wallet securely to start creating your token."
  },
  {
    icon: <Edit3 className="h-8 w-8 text-indigo-600" />,
    title: "Enter Token Info",
    desc: "Set your token name, symbol, and total supply."
  },
  {
    icon: <Settings className="h-8 w-8 text-indigo-600" />,
    title: "Add Features",
    desc: "Enable presale, liquidity lock, and more (optional)."
  },
  {
    icon: <Rocket className="h-8 w-8 text-indigo-600" />,
    title: "Launch Instantly",
    desc: "Deploy your token and track it in real time."
  }
];

const How = () => {
  return (
    <section id="how" className="py-20 bg-indigo-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h3>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Follow these 4 simple steps to launch your own token on Solana.
        </p>
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {steps.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-indigo-500 font-bold text-lg">Step {i + 1}</span>
                {icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
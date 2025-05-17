import React from 'react';
import { Zap, DollarSign, BarChart2 } from 'lucide-react'; // You can replace these with Heroicons if preferred

const features = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    title: "Easy to Use",
    desc: "Deploy tokens effortlessly with our user-friendly interface. No coding needed.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-green-600" />,
    title: "Low Fees",
    desc: "Enjoy ultra-low gas costs with our Solana-based smart contracts.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
    title: "Presale Enabled",
    desc: "Attract early investors and grow your community through secure presales.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Why Use Our Launchpad?</h3>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          We’ve simplified everything so you can focus on building your vision, not battling blockchain code.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-100 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
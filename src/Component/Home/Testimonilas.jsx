import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    text: "The easiest way to create a token. Loved the UX!",
    avatar: "https://i.pravatar.cc/100?img=1",
    title: "Web3 Project Founder"
  },
  {
    name: "Ben Singh",
    text: "Presale mode helped us raise 5000 SOL in 2 days.",
    avatar: "https://i.pravatar.cc/100?img=5",
    title: "Crypto Entrepreneur"
  },
  {
    name: "Clara Kim",
    text: "A must-use tool if you’re launching a Solana-based project.",
    avatar: "https://i.pravatar.cc/100?img=10",
    title: "Blockchain Marketer"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-indigo-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-12">What People Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, text, avatar, title }, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center">
                <img
                  src={avatar}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-3">“{text}”</p>
                <p className="text-indigo-700 font-semibold">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
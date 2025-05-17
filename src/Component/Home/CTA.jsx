import React from 'react';

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-6 text-center text-white">
      <div className="max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-4">Start Your Token Journey Today</h2>
        <p className="mb-6 text-lg text-indigo-100">
          No developers needed. Just your idea, and a few clicks away from going live.
        </p>
        <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-xl hover:bg-gray-100 transition">
          🔧 Create Your Token
        </button>
      </div>

      {/* Decorative background blur circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;
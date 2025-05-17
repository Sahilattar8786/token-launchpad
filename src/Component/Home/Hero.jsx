import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 py-24 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Launch Your Own Token on Solana</h2>
      <p className="mt-4 mb-5 text-lg text-gray-600">No code. Just power. Build and launch your crypto token in minutes.</p>
      <Link to={'/launch'} className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition">
        🚀 Create Your Token
      </Link>
    </div>
  </section>
  );
};

export default Hero;
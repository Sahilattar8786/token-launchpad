import React from 'react';

const Token = () => {
    return (
        <section id="projects" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Featured Tokens</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                <h4 className="text-xl font-bold text-indigo-700">Project #{i}</h4>
                <p className="text-sm text-gray-500">SOL Token • Supply: 1,000,000</p>
                <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Token;

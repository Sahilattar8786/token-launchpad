import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo / Name */}
        <h1 className="text-2xl font-bold text-indigo-600">Mintzy</h1>

        {/* Wallet Connect Button */}
        <WalletMultiButton/>
      </div>
    </nav>
  );
};

export default Nav;
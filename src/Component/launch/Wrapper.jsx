import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import '@solana/wallet-adapter-react-ui/styles.css'
import Nav from './Nav';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
const Wrapper= () => {
    return (
        <div>
            <ConnectionProvider endpoint='https://api.devnet.solana.com'>
                <WalletProvider wallets={[]} autoConnect >
                    <WalletModalProvider>
                      <Nav/>
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
        </div>
    );
}

export default Wrapper;

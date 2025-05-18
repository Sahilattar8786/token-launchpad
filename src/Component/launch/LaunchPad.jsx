import React, { useState } from 'react';
import {
    getAssociatedTokenAddress,
    createAssociatedTokenAccountInstruction,
    createMintToInstruction,
    createInitializeMintInstruction,
    getMinimumBalanceForRentExemptMint,
    MINT_SIZE,
    TOKEN_PROGRAM_ID
  } from '@solana/spl-token';
  import {
    Connection,
    Transaction,
    clusterApiUrl,
    Keypair,
    PublicKey,
    SystemProgram,
  } from '@solana/web3.js';
  import { useWallet } from '@solana/wallet-adapter-react';
  

const LaunchPad = () => {
  const { publicKey, signTransaction, sendTransaction } = useWallet(); 

  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('');
  const [supply, setSupply] = useState('');
 

  const createToken = async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
  
    if (!publicKey || !sendTransaction) {
      alert('Connect your wallet first.');
      return;
    }
  
    try {
      const mint = Keypair.generate();
      const lamports = await getMinimumBalanceForRentExemptMint(connection);
  
      // Instruction to create the mint account
      const createMintAccountIx = SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: mint.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      });
  
      // Initialize mint instruction
      const initMintIx = createInitializeMintInstruction(
        mint.publicKey,
        9, // decimals
        publicKey,
        publicKey
      );
  
      // Derive associated token account address
      const associatedTokenAddress = await getAssociatedTokenAddress(
        mint.publicKey,
        publicKey
      );
  
      const accountInfo = await connection.getAccountInfo(associatedTokenAddress);
  
      const transaction = new Transaction().add(
        createMintAccountIx,
        initMintIx
      );
  
      // If the token account doesn't exist, add the instruction to create it
      if (!accountInfo) {
        const createATAIx = createAssociatedTokenAccountInstruction(
          publicKey,               // payer
          associatedTokenAddress,  // associated token account
          publicKey,               // token account owner
          mint.publicKey           // token mint
        );
        transaction.add(createATAIx);
      }
  
      // Mint instruction to send tokens to the user's ATA
      const mintToIx = createMintToInstruction(
        mint.publicKey,
        associatedTokenAddress,
        publicKey,
        Number(supply) * 10 ** 9
      );
      transaction.add(mintToIx);
  
      // Send the transaction
      const signature = await sendTransaction(transaction, connection, {
        signers: [mint],
      });
  
      await connection.confirmTransaction(signature, 'confirmed');
  
      console.log('✅ Token Mint Address:', mint.publicKey.toBase58());
      console.log('✅ Token Account:', associatedTokenAddress.toBase58());
  
      alert(`✅ Token Created!\nMint: ${mint.publicKey.toBase58()}`);
    } catch (error) {
      console.error('❌ Error creating token:', error);
      alert('Failed to create token.');
    }
  };
 

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg space-y-4 mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">Create Your Token</h2>
      <input className="w-full border p-2 rounded" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input className="w-full border p-2 rounded" type="text" placeholder="Symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
      <input className="w-full border p-2 rounded" type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <input className="w-full border p-2 rounded" type="text" placeholder="Initial Supply" value={supply} onChange={e => setSupply(e.target.value)} />
      <button
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        onClick={createToken}
      >
        🚀 Create Token
      </button>
    </div>
  );
};

export default LaunchPad; 
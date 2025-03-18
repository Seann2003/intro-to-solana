"use client";

import React, { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  Connection,
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
  PublicKey,
} from "@solana/web3.js";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Page() {
  const { publicKey, connected, sendTransaction } = useWallet();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [error, setError] = useState("");
  const network = "https://api.devnet.solana.com";

  // Fetch the balance

  // Handle the transaction
  const handleSendTransaction = async () => {};

  return (
    <div className="font-sans p-5 text-black">
      <h1 className="text-center text-green-500 text-2xl font-bold">
        Solana Introduction Workshop
      </h1>
      <div className="flex justify-center my-5">
        <WalletMultiButton />
      </div>
      {connected && (
        <>
          <div className="text-center my-5">
            <p className="text-xl text-white">Your Balance: {balance} SOL</p>
          </div>
          <div className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              placeholder="Amount (SOL)"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value) || 0)}
              className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="button"
              onClick={handleSendTransaction}
              className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send SOL
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        </>
      )}
    </div>
  );
}

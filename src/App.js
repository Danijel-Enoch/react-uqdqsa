import React from 'react';
import './style.css';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

const providerOptions = {
  // binancechainwallet: {
  //   package: true,
  // },
};

const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
const connectWallet = async () => {
  //alert('Welcome');
  const instance = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input Onclick={connectWallet()} type="submit" label="Welcome" />
    </div>
  );
}

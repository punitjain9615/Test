if(typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
} // for finding meta mask in window.

const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0]; // request for accounts

function transactionParameters(_gasPrice,_gas,_to,_from,_value,_data,_chainId){
    nonce: '0x00', // ignored by MetaMask
    gasPrice: _gasPrice, // customizable by user during MetaMask confirmation.
    gas: _gas, // customizable by user during MetaMask confirmation.
    to: _to, // Required except during contract publications.
    from: _from, // must match user's active address.
    value: _value, // Only required to send ether to the recipient from the initiating external account.
    data: _data, // Optional, but used for defining smart contract creation and interaction.
    chainId: _chainId, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
  };
  
  // txHash is a hex string
  // As with any RPC call, it may throw an error
  const txHash = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });

var ENS = require('ethereum-ens');
var Web3 = require('web3');
var provider = new Web3.providers.HttpProvider();
var ens = new ENS(provider);
const resolver = async (name)=> {
  var address = ens.getAddress(name);
  console.log(address);
}

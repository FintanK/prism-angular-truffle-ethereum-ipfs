import { Component, HostListener, NgZone } from '@angular/core';
const Web3 = require('web3');
const contract = require('truffle-contract');
const metaincoinArtifacts = require('../../build/contracts/MetaCoin.json');
import { canBeNumber } from '../util/validation';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  MetaCoin = contract(metaincoinArtifacts);

  showDevTools: any;
  errorMessage: any;
  connected: boolean;
  peerCount: any;
  networkName: any;
  networkProtocolVersion: any;

  // TODO add proper types these variables
  account: any;
  accounts: any;
  web3: any;

  balance: number;
  sendingAmount: number;
  recipientAddress: string;
  status: string;
  canBeNumber = canBeNumber;

  constructor(private _ngZone: NgZone) {
    this.connected = false;
    this.errorMessage = '';
    this.showDevTools = false;
  }

  @HostListener('window:load')
  windowLoaded() {
    this.checkAndInstantiateWeb3();
    this.onReady();
  }

  checkAndInstantiateWeb3 = () => {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      console.warn(
        'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.warn(
        'No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(
        new Web3.providers.HttpProvider('http://localhost:8545')
      );
    }
  };

  onReady = () => {
    // Bootstrap the EmeraldCoin Web3 Ethereum Provider
    this.MetaCoin.setProvider(this.web3.currentProvider);

    this.web3.eth.estima

    // Fetch the network
    this.web3.version.getNetwork((err, netId) => {

      this.networkProtocolVersion = netId;

      switch (netId) {
        case '1':
          this.networkName = 'Mainnet';
          break
        case '2':
          this.networkName = 'Deprectaed Morden Network';
          break
        case '3':
          this.networkName = 'Ropsten Test Network';
          break
        case '4':
          this.networkName = 'Rinkeby Test Network';
          break
        case '42':
          this.networkName = 'Kovan Test Network';
          break
        default:
          this.networkName = 'Custom or Unknown Network';
      }
    });

    this.connected = this.web3.isConnected();

    // Get the initial account balance so it can be displayed.
    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        alert('There was an error fetching your accounts. Please ensure you have the Metamask browser extension installed and set up so that you can connect to the Ethereum Blockchain');
        return;
      }

      if (accs.length === 0) {
        alert(
          'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
        );
        return;
      }
      this.accounts = accs;
      this.account = this.accounts[0];

      // This is run from window:load and ZoneJS is not aware of it we
      // need to use _ngZone.run() so that the UI updates on promise resolution
      this._ngZone.run(() =>
        this.refreshBalance()
      );
    });

    this.web3.net.getPeerCount((err, result) => {
      this.peerCount = result;
    });

  };

  refreshBalance = () => {
    let prism;
    this.MetaCoin
      .deployed()
      .then(instance => {
        prism = instance;
        return prism.getBalance.call(this.account, {
          from: this.account
        });
      })
      .then(value => {
        this.balance = value;
      })
      .catch(e => {
        console.log(e);
        this.errorMessage = e;
        this.setStatus('Error getting balance; see log.');
      });
  };

  clearError = () => {
    this.errorMessage = '';
  };

  setStatus = message => {
    this.status = message;
  };

  sendCoin = () => {
    const amount = this.sendingAmount;
    const receiver = this.recipientAddress;
    let meta;

    this.setStatus('Initiating transaction... (please wait)');

    this.MetaCoin
      .deployed()
      .then(instance => {
        meta = instance;
        return meta.sendCoin(receiver, amount, {
          from: this.account
        });
      })
      .then(() => {
        this.setStatus('Transaction complete!');
        this.refreshBalance();
      })
      .catch(e => {
        console.log(e);
        this.setStatus(e);
      });
  };
}

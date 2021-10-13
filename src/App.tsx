import React from 'react';

// Component Importing:
import Footer from './components/Footer';
import Header from './components/Header';
import NoMetamask from './pages/NoMetamaskPage';
import MintPage from './pages/MintPage';

// Page Importing:
import NoAvalanchePage from './pages/NoAvalanchePage';

// Utils Importing:
import getEthereum from './utils/Metamask/getEthereum';
import getChain, { getAvalancheChain } from './utils/Metamask/getChain';
import HandleChainChanged from './utils/HandleChainChange';
import HandleAccountChanged from './utils/HandleAccountChange';

import './styles/MainPage.css';
import WebsiteBody from './components/WebsiteBody';

interface AppState {
	eth: any;
	chainID: undefined | string;
}
class App extends React.Component<{}, AppState> {
	state: AppState = {
		eth: getEthereum(),
		chainID: undefined,
	};

	async setChain() {
		this.setState({ chainID: await getChain() }); /** @todo Too Many React Updates ??? */
	}

	constructor(props: {}) {
		super(props);
		this.setChain = this.setChain.bind(this);
		this.setChain();
	}

	render() {
		var eth = this.state.eth;
		var chainID = this.state.chainID;

		eth.on('chainChanged', HandleChainChanged);
		eth.on('accountsChanged', HandleAccountChanged);
		if (eth === undefined) {
			return (
				<>
					<WebsiteBody>
						<NoMetamask />
					</WebsiteBody>
				</>
			);
		}
		if (chainID === undefined) {
			return (
				<>
					<WebsiteBody>
						<div>Loading...</div> {/**@todo add Loading Page */}
					</WebsiteBody>
				</>
			);
		} else {
			if (chainID === getAvalancheChain()) {
				return (
					<>
						<WebsiteBody>
							<MintPage />
							{/**@todo create paging and link redirection here */}
						</WebsiteBody>
					</>
				);
			} else {
				return (
					<>
						<WebsiteBody>
							<NoAvalanchePage />
						</WebsiteBody>
					</>
				);
			}
		}
	}
}
export default App;

// If no Metamask -> NoMetamask
// Else: If chainUpdated === false -> Loading... Else:
// 			If ChainID === AvalancheChain -> MintPage
// 			Else NoAvalanchePage

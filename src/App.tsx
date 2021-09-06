import { FunctionComponent, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import NoMetamask from './pages/NoMetamaskPage';
import MintPage from './pages/MintPage';

import getEthereum from './utils/Metamask/getEthereum';
import getChain, { getAvalancheChain } from './utils/Metamask/getChain';
import NoAvalanchePage from './pages/NoAvalanchePage';
import HandleChainChanged from './utils/HandleChainChange';
import HandleAccountChanged from './utils/HandleAccountChange';

const App: FunctionComponent = () => {
	const [chainID, setChainID] = useState<string | undefined>(undefined);
	const [chainUpdated, setChainUpdated] = useState<boolean>(false);
	var eth = getEthereum();

	const getChainID = async () => {
		var chid = await getChain();
		if (chid !== chainID) {
			setChainID(chid);
		}
	};

	if (eth && chainID === undefined && chainUpdated === false) {
		getChainID();
		setChainUpdated(true);
	}

	if (!eth) {
		return (
			<>
				<Header />
				<NoMetamask />
				<Footer />
			</>
		);
	} else {
		eth.on('chainChanged', HandleChainChanged);
		eth.on('accountsChanged', HandleAccountChanged);
		if (chainID === getAvalancheChain()) {
			return (
				<>
					<Header />
					<MintPage />
					<Footer />
				</>
			);
		} else {
			return (
				<>
					<Header />
					<NoAvalanchePage />
					<Footer />
				</>
			);
		}
	}
};

export default App;

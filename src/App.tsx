import { FunctionComponent, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import NoMetamask from './pages/NoMetamaskPage';
import MintPage from './pages/MintPage';

import getEthereum from './utils/Metamask/getEthereum';
import getChain, { getAvalancheChain } from './utils/Metamask/getChain';
import NoAvalanchePage from './pages/NoAvalanchePage';

const App: FunctionComponent = () => {
	const [chainID, setChainID] = useState<string | undefined>(undefined);
	var eth = getEthereum();

	const getChainID = async () => {
		setChainID(await getChain());
	};

	if (chainID === undefined) {
		getChainID();
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

import ReactDOM from 'react-dom';
import { MobileView, BrowserView } from 'react-device-detect';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import MobilePage from './pages/MobilePage';
import NoMetamask from './pages/NoMetamaskPage';

import SocialMedias from './types/SocialMedias';
import { setDevelopment } from './utils/isDevelopment';
import getEthereum from './utils/Metamask/getEthereum';
import WebsiteBody from './components/WebsiteBody';

setDevelopment(true); /** @todo change before prod */

ReactDOM.render(
	<>
		<Router>
			<MobileView>
				<MobilePage />
				{/** @todo Add the mobile switch system and brand new mobile pages */}
			</MobileView>
			<BrowserView>
				{getEthereum() ? (
					<App />
				) : (
					<WebsiteBody>
						<NoMetamask />
					</WebsiteBody>
				)}
				,
			</BrowserView>

			<Route
				path={SocialMedias.Discord.path}
				component={() => {
					window.location.href = SocialMedias.Discord.route;
					return null;
				}}
			/>
			<Route
				path={SocialMedias.Twitter.path}
				component={() => {
					window.location.href = SocialMedias.Twitter.route;
					return null;
				}}
			/>
		</Router>
	</>,
	document.getElementById('root')
);

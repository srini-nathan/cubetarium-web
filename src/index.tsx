import ReactDOM from 'react-dom';
import { MobileView, BrowserView } from 'react-device-detect';

import App from './App';
import MobilePage from './pages/MobilePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SocialMedias from './types/SocialMedias';
import { setDevelopment } from './utils/isDevelopment';

setDevelopment(true);

ReactDOM.render(
	<>
		<Router>
			<MobileView>
				<MobilePage />
			</MobileView>
			<BrowserView>
				<App />,
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

import { FunctionComponent } from 'react';
import Footer from './Footer';
import Header from './Header';

const WebsiteBody: FunctionComponent<{}> = (props) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};

export default WebsiteBody;

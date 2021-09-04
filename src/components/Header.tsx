import { FunctionComponent } from 'react';

// Image Importing:
import logo from './../img/logo.png';

const Header: FunctionComponent<{}> = () => {
	return (
		<>
			<div className="main-left"></div>
			<div className="main-right"></div>
			<div className="top-container">
				<div className="container">
					<div className="row">
						<div className="logo-left" />
						<div className=" logo-container">
							<a href="/">
								<img src={logo} alt="logo" />
							</a>
						</div>
						<div className=" logo-right" />
					</div>
				</div>
			</div>
			<div className="container">
				<div className="main-menu">
					<ul>
						<li>
							<a href="/">Mint</a>
						</li>
						<li>
							<a href="/airdrop">Airdrop</a>
						</li>
						<li>
							<a href="/metaverse">Metaverse</a>
						</li>
						<li>
							<a href="/marketplace">Marketplace</a>
						</li>
						<li>
							<a href="/wallet">Wallet</a>
						</li>
					</ul>
				</div>
				<div className="menu-content">
					<label>
						Cubetarium is a brand new Metaverse. To start your
						journey, adopt your Sugarcubes, claim Land and wait for
						future updates for an epic interactable universe. <br />
						So, what are your waiting for?
						<br /> Go get your NFT's and be a part of us.
					</label>
				</div>
			</div>
		</>
	);
};

export default Header;

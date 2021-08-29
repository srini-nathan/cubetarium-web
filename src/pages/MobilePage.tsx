import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './../styles/MobilePage.css';
// img files
import logo from './../img/logo.png';
import imgIlluustrasyon from './../img/illuustrasyon-main.jpg';
import logoFooter from './../img/logo-footer.jpg';
import logoAvalanche from './../img/avalanche-logo.jpg';
import logoTwitter from './../img/twitter-logo.jpg';
import logoInstagram from './../img/instagram-logo.jpg';
import logoDiscord from './../img/discord-logo.jpg';
import imgCube from './../img/mobile-cube.png';

/** @todo Solve all issues */

const MobilePage: FunctionComponent<{}> = () => {
	return (
		<Router>
			<Route
				exact
				path="/"
				render={() => {
					return (
						<div className="mobile">
							<header>
								<div className="container">
									<div className="row">
										<div className="logo-left" />
										<div className=" logo-container">
											<Link to="/">
												<img src={logo} alt="logo" />
											</Link>
										</div>
										<div className=" logo-right" />
									</div>
								</div>
							</header>
							<content>
								<div className="menu-content">
									<label>
										Cubetarium is a brand new Metaverse. To
										start your journey, adopt your
										Sugarcubes, claim Land and wait for
										future updates for an epic interactable
										universe. <br />
										So, what are your waiting?
										<br /> Go get your NFT's and be a part
										of us.
									</label>
								</div>
								<div className="content-container">
									<div className="content-area">
										<div className="col-12">
											<h1>Sugarcubes</h1>
										</div>
										<div className="col-12">
											<div className="content-cube">
												<img
													src={imgCube}
													alt="CubeImg"
												/>
											</div>
										</div>
										<div className="col-12">
											<label>
												Don't forget to visit us from
												your desktop browser if you want
												to own a Sugarcube or if you'd
												like to have more information
												about the project.
												<br />
												Cubetarium Metaverse and
												Sugarcubes NFT collection.
											</label>
										</div>
									</div>
								</div>
							</content>
							<content>
								<div className="Illuustrasyon">
									<img
										src={imgIlluustrasyon}
										alt="Illustration"
									/>
								</div>
							</content>
							<footer>
								<ul>
									<li className="footer-logo">
										<img
											src={logoFooter}
											alt="footer logo"
										/>
									</li>
									<li className="avalanche-logo">
										<img
											src={logoAvalanche}
											alt="footer logo"
										/>
									</li>
								</ul>
								<ul>
									<li className="copyright">
										<span>
											Cubetarium is a virtual world
											powered by the Avalanche blockchain.
											&nbsp;2021 &#169;
										</span>
									</li>
								</ul>
								<ul>
									<li>
										<a href="/twitter">
											<img
												src={logoTwitter}
												alt="twitter cubetarium"
											/>
										</a>
									</li>
									<li>
										<Link to="/instagram">
											<img
												src={logoInstagram}
												alt="instagram cubetarium"
											/>
										</Link>
									</li>
									<li>
										<Link to="/discord">
											<img
												src={logoDiscord}
												alt="discord cubetarium"
											/>
										</Link>
									</li>
								</ul>
							</footer>
						</div>
					);
				}}
			/>
		</Router>
	);
};

export default MobilePage;

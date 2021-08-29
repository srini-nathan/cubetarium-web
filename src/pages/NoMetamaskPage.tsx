import { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Popup from 'reactjs-popup';

// css files
import './../App.css';
import './../cssFiles/MainPage.css';
// img files
import logo from './../img/logo.png';
import logoFooter from './../img/logo-footer.jpg';
import logoAvalanche from './../img/avalanche-logo.jpg';
import logoTwitter from './../img/twitter-logo.jpg';
import logoInstagram from './../img/instagram-logo.jpg';
import logoDiscord from './../img/discord-logo.jpg';

const NoMetamask: FunctionComponent<{}> = () => {
	return (
		<Router>
			<>
				<div className="main-left" />
				<div className="main-right" />
				<div className="top-container">
					<div className="container">
						<div className="row">
							<div className="logo-left" />
							<div className=" logo-container">
								<a href="/">
									{' '}
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
							journey, adopt your Sugarcubes, claim Land and wait
							for future updates for an epic interactable
							universe. <br />
							So, what are your waiting for?
							<br /> Go get your NFT's and be a part of us.
						</label>
					</div>
				</div>

				<Route
					exact
					path="/"
					render={() => {
						return (
							<div className="content">
								<div className="content-container">
									<div className="content-head">
										<label>Sugarcubes </label>{' '}
									</div>
									<div className="col-4">
										<>
											<div className="col-12 fs-22 mt-50 total-mint-content"></div>
											<div className="col-12 mt-30">
												<div className="col-12"></div>
												{/**href='https://metamask.io/download.html' target='_blank' rel='noreferrer' */}
												<div className="col-12">
													<Popup
														trigger={(open) => (
															<button className="amount-btn connect-mainnet">
																CONNECT WALLET
															</button>
														)}
														closeOnDocumentClick
													>
														<div>
															<a
																className="popup-close"
																href="#popup-root"
															>
																×
															</a>
															<label>
																<a
																	href="https://metamask.io/download.html"
																	target="_blank"
																	rel="noreferrer"
																>
																	Please add
																	Metamask to
																	your
																	browser.
																</a>
															</label>
														</div>
													</Popup>
												</div>
											</div>
										</>
										<div className="col-12">
											<div className="table-head">
												<label>Pricing Policy</label>
											</div>
											<div className="divTable">
												<div className="divTableBody">
													<div className="divTableRow">
														<div className="divTableCell">
															0000 - 250
														</div>
														<div className="divTableCell">
															0.20 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															0251 - 500
														</div>
														<div className="divTableCell">
															0.30 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															0501 - 750
														</div>
														<div className="divTableCell">
															0.40 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															0751 - 1000
														</div>
														<div className="divTableCell">
															0.50 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															1001 - 1250
														</div>
														<div className="divTableCell">
															0.60 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															1251 - 1500
														</div>
														<div className="divTableCell">
															0.80 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															1501 - 2000
														</div>
														<div className="divTableCell">
															1.00 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															2001 - 2500
														</div>
														<div className="divTableCell">
															1.25 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															2501 - 3000
														</div>
														<div className="divTableCell">
															1.50 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															3001 - 4000
														</div>
														<div className="divTableCell">
															1.75 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															4001 - 5000
														</div>
														<div className="divTableCell">
															2.00 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															5001 - 6000
														</div>
														<div className="divTableCell">
															2.50 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															6001 - 7500
														</div>
														<div className="divTableCell">
															3.00 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															7501 - 9000
														</div>
														<div className="divTableCell">
															4.00 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															9001 - 9999
														</div>
														<div className="divTableCell">
															5.00 &nbsp;AVAX
														</div>
													</div>
													<div className="divTableRow">
														<div className="divTableCell">
															10000
														</div>
														<div className="divTableCell">
															50.0 &nbsp;AVAX
														</div>
													</div>
												</div>
											</div>
											{/* DivTable.com */}
										</div>
									</div>
									<div className="col-8">
										<div className="col-12 mt-50">
											<div className="main-cube">
												<div className="cube-img">
													<img
														src={`${process.env.PUBLIC_URL}/mints/-1.png`}
														alt="cube"
													/>
												</div>
												<label>
													Latest Mint{' '}
													<span># 43182</span>
												</label>
											</div>
										</div>
										<div className="col-12 cube-info">
											<label>
												<p>
													Sugarcubes are ERC-721
													Non-Fungible Tokens. These
													are limited by 10.000 and
													all are 512x512 Models.
													Sugarcubes are created by an
													algorithm and all of them
													will be stored on the
													Inter-Planetary File System
													(IPFS). Sugarcubes are on
													the Avalanche C-Chain
													Network.
												</p>
												<p>
													There are several Sugarcubes
													such as Human (Commons),
													Non-Humans (Rares), Rubiks
													(Epics) and Ancients
													(Legendaries).
												</p>
											</label>
										</div>
										<div className="col-12">
											<div className="content-cube"></div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				/>

				<footer>
					<div className="col-12 ">
						<ul>
							<li className="footer-logo">
								<img src={logoFooter} alt="footer logo" />
							</li>
							<li className="avalanche-logo">
								<img src={logoAvalanche} alt="footer logo" />
							</li>

							<li className="copyright">
								<span>
									Cubetarium is a virtual world powered by the
									Avalanche blockchain. &nbsp;2021
								</span>
								<span>&#169;</span>
							</li>
							<li className="social-logo">
								<a
									target="_blank"
									href="https://twitter.com/cubetarium/"
									rel="noreferrer"
								>
									<img
										src={logoTwitter}
										alt="twitter cubetarium"
									/>
								</a>
								<a
									target="_blank"
									href="https://www.instagram.com/cubetarium/"
									rel="noreferrer"
								>
									<img
										src={logoInstagram}
										className="instagram"
										alt="instagram cubetarium"
									/>
								</a>
								<a
									target="_blank"
									href="https://discord.gg/xHUXWTjKdj"
									rel="noreferrer"
								>
									<img
										src={logoDiscord}
										className="discord"
										alt="discord cubetarium"
									/>
								</a>
							</li>
						</ul>
					</div>
				</footer>
			</>
		</Router>
	);
};

export default NoMetamask;

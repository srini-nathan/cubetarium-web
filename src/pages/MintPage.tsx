import { FunctionComponent } from 'react';
import LatestMint from '../components/LatestMint';

// Component Importing:
import MintSection from '../components/MintSection';

const MintPage: FunctionComponent<{}> = () => {
	return (
		<div className="mint">
			<div className="menu-content">
				<label>
					Cubetarium is a brand new Metaverse. To start your journey,
					adopt your Sugarcubes, claim Land and wait for future
					updates for an epic interactable universe. <br />
					So, what are you waiting for?
					<br /> Go get your NFT's and be a part of us.
				</label>
			</div>
			<div className="content">
				<div className="content-container">
					<div className="content-head">
						<label>Sugarcubes </label>{' '}
					</div>
					<div className="col-4">
						<MintSection />
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
							<LatestMint />
						</div>
						<div className="col-12 cube-info">
							<label>
								<p>
									Sugarcubes are ERC-721 Non-Fungible Tokens.
									These are limited by 10.000 and all are
									512x512 Models. Sugarcubes are created by an
									algorithm and all of them will be stored on
									the Inter-Planetary File System (IPFS).
									Sugarcubes are on the Avalanche C-Chain
									Network.
								</p>
								<p>
									There are several Sugarcubes such as Human
									(Commons), Non-Humans (Rares), Rubiks
									(Epics) and Ancients (Legendaries).
								</p>
							</label>
						</div>
						<div className="col-12">
							<div className="content-cube"></div>
						</div>
						{/* <Frmpopup/> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MintPage;

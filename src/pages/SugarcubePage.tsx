import { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router-dom';

// Utils Importing:
import API_LINK from '../utils/API_LINK';
import getContract from '../utils/Metamask/getContract';
import getCubeInfo from '../utils/API/getCubeInfo';
// Type Importing:
import SugarcubeMetadata from '../types/CubeMetadata';
import ErrorCodes from '../types/ErrorCodes';

/** @todo */
// import { api_onMarket, LogToAPI } from './../extras/ApiCalls';

type PageParams = {
	charID: string;
};

const SugarcubePage: FunctionComponent<{}> = () => {
	const { charID } = useParams<PageParams>();
	const charNumber = parseInt(charID);
	const [owner, setOwner] = useState<string | undefined>(undefined);
	const [onSale, setOnSale] = useState<boolean>(false);
	const [charMeta, setCharMeta] = useState<SugarcubeMetadata | undefined>(
		undefined
	);
	const [price, setPrice] = useState<number | undefined>(undefined);
	const [picIPFS, setPicIPFS] = useState<string | undefined>(undefined);
	const [loaded, setLoaded] = useState<boolean>(false);

	/** @todo Create All Methods */
	const getSupply = () => {
		var contract = getContract();
		contract.methods.totalSupply().call((tx: string, res: number) => {
			if (!(charNumber < res))
				window.location.pathname = ErrorCodes.NoMint;
		});
	};

	const getOwner = () => {
		var contract = getContract();
		contract.methods.ownerOf(charNumber).call((tx: string, res: string) => {
			setOwner(res);
		});
	};

	const ownerString = () => {};

	const getCubeOnSale = () => {};

	const fetchMeta = () => {};

	const returnListed = () => {
		return onSale === true ? (
			<li>Listed for {price} AVAX</li>
		) : (
			<li>Not Listed</li>
		);
	};

	const getBuyButton = () => {
		return (
			<li>
				{onSale === true ? (
					<button className="buy" onClick={buyCube}>
						Buy For {price}
					</button>
				) : (
					<></>
				)}
			</li>
		);
	};

	const getClass = () => {};

	const buyCube = async () => {};

	return (
		<div className="content content-marketplace">
			<div className="content-container">
				<div className="col-12">
					<h1>Detail</h1>
				</div>
				<div className="col-12">
					<div className="col-4">
						<div className="cube-img">
							<img
								src={`${API_LINK(`/images/${charID}`)}`}
								alt=""
							/>
						</div>
					</div>
					<div className="col-8">
						<ul className="marketplace-detail">
							<li>
								<h2>#{charID} Sugarcube</h2>
							</li>
							<li>Owned by: {ownerString()}</li>
							{returnListed()}
							{getBuyButton()}
							<li>Sugarcube Type: {getClass()}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SugarcubePage;

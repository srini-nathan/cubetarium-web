import { FunctionComponent, useState } from 'react';

// Type Importing:
import LoadingState from '../types/Loading';

// Component Importing
import ImageBox from './ImageBox';
// Utils Importing:
import getCubeInfo from '../utils/API/getCubeInfo';
import getContract from '../utils/Metamask/getContract';
// Type Importing:
import SugarcubeMetadata from '../types/CubeMetadata';
// Image Importing:
import loading_gif from '../img/loading.gif';

const LatestMint: FunctionComponent<{}> = () => {
	const [lastMint, setLastMint] = useState<number | undefined>(undefined);
	const [cubeMeta, setCubeMeta] = useState<SugarcubeMetadata | undefined>(
		undefined
	);

	const getLastMint = async () => {
		var contract = getContract();
		await contract.methods
			.totalSupply()
			.call((tx: string, supply: number) => {
				setLastMint(supply - 1);
			});
	};

	const getCubeMetadata = async (cubeNumber: number) => {
		setCubeMeta(await getCubeInfo(cubeNumber));
	};

	if (cubeMeta === undefined && typeof lastMint === 'number') {
		getCubeMetadata(lastMint);
	}

	if (cubeMeta !== undefined && lastMint !== undefined) {
		/** @todo Create an Image Call for the API */
		return (
			<div className="main-cube">
				<div className="cube-img">
					<ImageBox
						loadingState={LoadingState.Loaded}
						alt="Latest Mint"
						keyID={lastMint}
						src={`https://cubetarium.com/mints/${cubeMeta.image}.png`}
						onErrorLink={cubeMeta.ipfs_image}
						key={cubeMeta.image}
					/>
				</div>
				<label>
					Latest Mint <span>#{lastMint}</span>
				</label>
			</div>
		);
	} else {
		if (lastMint === undefined) getLastMint();
		return (
			<div className="main-cube">
				<div className="cube-img">
					<img src={loading_gif} alt="Loading_GIF" />
				</div>
				<label>Loading...</label>
			</div>
		);
	}
};

export default LatestMint;

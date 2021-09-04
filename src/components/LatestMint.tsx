import { FunctionComponent, useState } from 'react';

// Type Importing:
import LoadingState from '../types/Loading';

// Component Importing
import ImageBox from './ImageBox';

// Image Importing:
import loading_gif from '../img/loading.gif';

const LatestMint: FunctionComponent<{}> = () => {
	const [lastMint, setLastMint] = useState<number | undefined>(undefined);
	const [isLoaded, setIsLoaded] = useState<boolean>(LoadingState.Loading);
	/** @todo get latest mint metadata */

	if (lastMint == undefined) {
		return (
			<div className="main-cube">
				<div className="cube-img">
					<img src={loading_gif} alt="Loading_GIF" />
				</div>
				<label>Loading...</label>
			</div>
		);
	} else {
		<div className="main-cube">
			<div className="cube-img">
				<ImageBox
					loadingState={LoadingState.Loaded}
					alt="Latest Mint"
					keyID={lastMint}
				/>
			</div>
			<label>
				Latest Mint <span>#{lastMint}</span>
			</label>
		</div>;
	}
};

export default LatestMint;

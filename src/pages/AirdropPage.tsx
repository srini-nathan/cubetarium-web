import { FunctionComponent, useState } from 'react';

const Airdrop: FunctionComponent<{}> = () => {
	const [lastMint, setLastMint] = useState<number | null>(null);

	const getTotalMint = (): void => {
		var contract; /** @todo Add Contract Here */
	};

	const LabelSpan = (): JSX.Element => {
		return (
			<span>{lastMint === null ? 'Loading' : `${lastMint}/4000`}</span>
		);
	};

	if (lastMint === null) getTotalMint();

	return (
		<div className="airdrop">
			<div className="menu-content">
				<label>
					Lands which are a part of the Cubetarium universe will be
					airdropped here for you to claim. Don't forget that these
					will be limited by number.
				</label>
			</div>
			<div className="content content-airdrop">
				<div className="content-container">
					<div className="airdrop-area">
						<div className="airdrop-label">
							<label>Claim Land from Airdrop {LabelSpan()}</label>
							<button>CLAIM</button>
						</div>
						<div className="landImg"></div>
					</div>
					<div className="col-12">
						<div className="airdrop-bottom-img"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Airdrop;

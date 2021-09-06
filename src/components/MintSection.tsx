import { FunctionComponent, useState } from 'react';
import getContract from '../utils/Metamask/getContract';
import InteractiveLabel from './InteractiveLabel';

const MintSection: FunctionComponent<{}> = () => {
	const [mintAmount, setMintAmount] = useState<number>(1);
	const [saleStarted, setSaleStarted] = useState<boolean | undefined>(
		undefined
	);

	const decrementMintAmount = () => {
		if (mintAmount > 1) setMintAmount(mintAmount - 1);
	};

	const incrementMintAmount = () => {
		if (mintAmount < 20) setMintAmount(mintAmount + 1);
	};

	const mint = () => {};

	const getHasSaleStarted = async () => {
		var contract = getContract();
		await contract.methods
			.hasSaleStarted()
			.call((tx: string, res: boolean) => {
				setSaleStarted(res);
			});
	};

	if (saleStarted === undefined) {
		getHasSaleStarted();
	}

	return (
		<>
			<div className="col-12 fs-22 mt-50 total-mint-content">
				<InteractiveLabel LabelName="Price" MintAmount={mintAmount} />
				<InteractiveLabel
					LabelName="TotalMint"
					MintAmount={mintAmount}
				/>
			</div>
			<div className="col-12 mt-30">
				<div className="col-12">
					<span className="amount" onClick={decrementMintAmount}>
						<label>-</label>
					</span>
					<span className="amount-text">{mintAmount}</span>
					<span className="amount" onClick={incrementMintAmount}>
						<label>+</label>
					</span>
				</div>
				<div className="col-12">
					<button className="amount-btn" onClick={mint}>
						MINT
					</button>
				</div>
			</div>
		</>
	);
};

export default MintSection;

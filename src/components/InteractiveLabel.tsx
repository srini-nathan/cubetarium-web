import { FunctionComponent, useState } from 'react';
import web3 from 'web3';

type LabelNames = 'Price' | 'TotalMint';

const InteractiveLabel: FunctionComponent<{
	LabelName: LabelNames;
	MintAmount: number;
}> = (props) => {
	const [value, setValue] = useState<number | undefined>(undefined);
	const updatePrice = () => {
		var contract = getContract(); /** @todo */
		contract.methods
			.calculatePrice(props.MintAmount)
			.call(async (tx: string, price: number) => {
				setValue(price);
			});
	};

	const updateTotalMint = () => {
		var contract = getContract(); /** @todo */
		contract.methods.totalSupply().call((tx: string, totalSup: number) => {
			setValue(totalSup);
		});
	};

	if (props.LabelName === 'Price') updatePrice();
	if (props.LabelName === 'TotalMint') updateTotalMint();

	if (props.LabelName === 'Price') {
		return (
			<label>
				Price:
				{value === undefined
					? 'Loading...'
					: web3.utils.fromWei(
							(value * props.MintAmount).toString(),
							'ether'
					  )}
			</label>
		);
	} else if (props.LabelName === 'TotalMint') {
		return <label>Total Mint: {value ?? 'Loading...'}</label>;
	} else return <label></label>;
};

export default InteractiveLabel;

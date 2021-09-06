import { FunctionComponent, useState } from 'react';
import web3 from 'web3';

import getContract from '../utils/Metamask/getContract';

type LabelNames = 'Price' | 'TotalMint';

const InteractiveLabel: FunctionComponent<{
	LabelName: LabelNames;
	MintAmount: number;
}> = (props) => {
	const [value, setValue] = useState<number | undefined>(undefined);
	const [updated, setUpdated] = useState<boolean>(false);
	const [price, setPrice] = useState<number | undefined>(undefined);

	const updateValue = () => {
		var contract = getContract();
		contract.methods
			.calculatePrice(props.MintAmount)
			.call(async (tx: string, val: number) => {
				setValue(val);
			});
	};

	const updatePrice = () => {
		setPrice(
			parseFloat(
				web3.utils.fromWei(
					(value ?? 0 * props.MintAmount).toString(),
					'ether'
				)
			)
		);
	};

	const updateTotalMint = () => {
		var contract = getContract();
		contract.methods.totalSupply().call((tx: string, totalSup: number) => {
			setValue(totalSup);
		});
	};

	if (!updated) {
		updateValue();
		setUpdated(true);
	}
	if (props.LabelName === 'Price') updatePrice();
	if (props.LabelName === 'TotalMint') updateTotalMint();

	if (props.LabelName === 'Price') {
		return <label>Price: {price ?? 'Loading'}</label>;
	} else if (props.LabelName === 'TotalMint') {
		return <label>Total Mint: {value ?? 'Loading...'}</label>;
	} else return <label></label>;
};

export default InteractiveLabel;

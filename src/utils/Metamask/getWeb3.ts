
import Web3 from "web3";
import getEthereum from "./getEthereum";

let _web3: Web3 | undefined = undefined;

const getWeb3 = () => {
    if (_web3 === undefined) _web3 = new Web3(getEthereum());
    return _web3;
}

export default getWeb3;
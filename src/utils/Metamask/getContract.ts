import { ContractAddress, Contract_ABI } from "../contractABI";
import getWeb3 from "./getWeb3";
import { AbiItem } from 'web3-utils';
import {Contract} from 'web3-eth-contract'

let _contract: Contract | undefined = undefined;

const getContract = () => {
    if (_contract === undefined) {
        var web3 = getWeb3();
        _contract = new web3.eth.Contract(Contract_ABI as AbiItem[], ContractAddress()); 
    }
    return _contract;
}

export default getContract;
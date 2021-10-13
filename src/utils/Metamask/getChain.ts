import isDevelopment, { debugLog } from "../isDevelopment";
import getEthereum from "./getEthereum"

let _chain_ : string | undefined = undefined;
const getChain = async (): Promise<string> => {
    if (_chain_ === undefined){ 
        _chain_ = await getEthereum().request({
            method: "eth_chainId"
        }) as string;
        debugLog("Connected Chain: ",_chain_);
    } return _chain_;
}

const getAvalancheChain = () => {
    return isDevelopment() ? "0xa869" : "0xa86a"; 
}

export default getChain;
export { getAvalancheChain };
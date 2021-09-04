import isDevelopment from "../isDevelopment";
import getEthereum from "./getEthereum"

const getChain = async (): Promise<string> => {
    return await getEthereum().request({
        method: "eth_chainId"
    });
}

const getAvalancheChain = () => {
    return isDevelopment() ? "0xa869" : "0xa86a"; 
}

export default getChain;
export { getAvalancheChain };
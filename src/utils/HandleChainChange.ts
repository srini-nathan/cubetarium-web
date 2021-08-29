let _chain:string; 

const setChain = (chainNow: string) => {
    _chain = chainNow
}

const HandleChainChanged = (chNow: string) => {
    if (_chain != chNow) window.location.reload();
} 

export default HandleChainChanged;
export {setChain}; /** @todo Use setChain when starting website */
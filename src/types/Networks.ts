
interface NetworkInterface {
    chainId: string,
    chainName: string,
    nativeCurrency: {
        name: string,
        symbol: string,
        decimals: number
    },
    rpcUrls: string[],
    blockExplorerUrls: string[]
}

const Networks = Object.freeze({
    Mainnet: {
        chainId: "0xa86a",
        chainName: "Avalanche C-Chain",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18
        },
        rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://cchain.explorer.avax.network/"]
    } as NetworkInterface,
    Fuji: {
        chainId: "0xa869",
        chainName: "Avalanche FUJI C-Chain",
        nativeCurrency: {
            name: "AVAX",
            symbol: "AVAX",
            decimals: 18
        },
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        blockExplorerUrls: ["https://cchain.explorer.avax-test.network"]
    } as NetworkInterface
})

export default Networks;
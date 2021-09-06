
type CubeClass = 'Human' | 'Non-Human' | 'Rubik' | 'Ancient';
type CubeRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary';


interface SugarcubeMetadata {
    charID: number;
    rarity: CubeRarity;
    class: CubeClass;
    external_url: string;
    description: string;
    background_color: string;
    image: string;
    ipfs_image: string;
    ipfs_json: string;
    attributes: {
        "Sugarcube ID": number;
        class: CubeClass;
        rarity: CubeRarity; 
    };
    assets: {
        skin: string;
        nose: string;
        eyes: string;
        mouth: string;
        hair?: string;
        accessory?: string;
        accessory_info?: {
            colors: string[];
            traits: string[];
        }
        skin_info?: {
            trait: string;
            "color combination": {
                top: string;
                left: string;
                right: string;
            };
        };
        ElementalAttribute?: string;
    }
}

/** @todo Create New Metadata Type with updates Metadatas */

export default SugarcubeMetadata;
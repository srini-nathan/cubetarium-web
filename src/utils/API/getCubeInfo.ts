import SugarcubeMetadata from "../../types/CubeMetadata";
import API_LINK from "../API_LINK";

let _cube_meta_list_: SugarcubeMetadata[] = [] /** @todo */

const getCubeInfo = async (cubeNumber: number): Promise<SugarcubeMetadata> => {

    var array_find = _cube_meta_list_.find(c => {return c.charID === cubeNumber});
    if (array_find) return array_find;    

    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    var newCube = (await (await fetch(API_LINK(`cubes/${cubeNumber}`), requestOptions)).json() as SugarcubeMetadata);
    _cube_meta_list_.push(newCube);
    return newCube;
}

export default getCubeInfo;
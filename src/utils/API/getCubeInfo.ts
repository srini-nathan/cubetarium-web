import API_LINK from "../API_LINK";

export const getCubeInfo = async (cubeNumber: number) => {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    return (await fetch(API_LINK(`/cubes/${cubeNumber}`))).json()
    /**
     * @todo Create CubeMetadata Interface
     */
}
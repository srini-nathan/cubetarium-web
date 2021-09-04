
let _dev_mode_: boolean = false;

const isDevelopment = () : boolean => {
    return _dev_mode_;
}

const setDevelopment = (isDev?: boolean) => {
    _dev_mode_ = isDev?? false;
}


export default isDevelopment;
export { setDevelopment };
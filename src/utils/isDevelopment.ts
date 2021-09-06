
let _dev_mode_: boolean = false;

const isDevelopment = () : boolean => {
    return _dev_mode_;
}

const setDevelopment = (isDev?: boolean) => {
    _dev_mode_ = isDev?? false;
}

const debugLog = (message:any, ...optional_params: any[]) => {
    if (_dev_mode_ === true) console.log(message, ...optional_params)
}

export default isDevelopment;
export { setDevelopment, debugLog };
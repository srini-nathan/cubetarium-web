let _account:string; 

const setAccount = (accountNow: string) => {
    _account = accountNow
}

const HandleAccountChanged = (accNow: string) => {
    if (_account != accNow) window.location.reload();
} 

export default HandleAccountChanged;
export {setAccount}; /** @todo Use setAccount when starting website */
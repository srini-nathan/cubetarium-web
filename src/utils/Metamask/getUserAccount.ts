import getWeb3 from "./getWeb3";

let _user_account_: string | undefined = undefined;

const getUserAccount = async (): Promise<string> => {
    if (_user_account_ === undefined) {
        _user_account_ = (await getWeb3().eth.getAccounts())[0];
    } return _user_account_;
}

export default getUserAccount;
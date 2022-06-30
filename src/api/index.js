import {accounts} from "../store/stub";

export const pseudoApi = {
    async getAccounts() {
        return accounts;
    }
}
import axios from "axios";

const ADMINTOOL_API_URL = "http://localhost:8080";

class WalletDataService {
  retrieveAllWalletsByUserId(id) {
    return axios.get(`${ADMINTOOL_API_URL}/api/wallets/user/${id}`);
  }
  findWalletById(id) {
    return axios.get(`${ADMINTOOL_API_URL}/api/wallet/${id}`);
}
deleteWalletById(id) {
    return axios.delete(`${ADMINTOOL_API_URL}/api/wallet/${id}`);
}

createWallet(userId, name) {
  return axios.post(`${ADMINTOOL_API_URL}/api/wallet/create/${userId}/walletName/${name}`);
}

tranferCoins(from, to, amount) {
  return axios.post(`${ADMINTOOL_API_URL}/api/wallet/transfer/from/${from}/to/${to}/amount/${amount}`);
}  

}

export default new WalletDataService();
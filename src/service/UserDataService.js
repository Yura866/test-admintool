import axios from "axios";

const ADMINTOOL_API_URL = "http://localhost:8080";

class UserDataService {
  retrieveAllUsers() {
    return axios.get(`${ADMINTOOL_API_URL}/api/users`);
  }
  findOneUser(id) {
    return axios.get(`${ADMINTOOL_API_URL}/api/user/${id}`);
}
deleteUser(id) {
    return axios.delete(`${ADMINTOOL_API_URL}/api/user/${id}`);
}
}

export default new UserDataService();
import axios from "axios";
import { RegisterForm, LoginForm, User } from "@/interfaces/user";
import { API_URL } from "../utils/url";


class AuthService {
  async login(dataForm: LoginForm) {
    const response = await axios.post<User>(API_URL + "users/login", dataForm);
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(data: RegisterForm) {
    return axios.post<string>(API_URL + "users/createUsers", data);
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AuthService();

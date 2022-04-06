import { HttpClient } from "../HttpClient";

class UsersService extends HttpClient {
  constructor() {
    super("https://624bc93f44505084bc557516.mockapi.io/ReactPractice/");
  }

  getAllUsers() {
    return this.get("users");
  }
}

export const usersService = new UsersService();
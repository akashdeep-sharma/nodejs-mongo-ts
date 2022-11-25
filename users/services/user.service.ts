import { CRUD } from "../../common/crud.interface";
import userDao from "../dao/user.dao";
import { CreateUserDto } from "../dto/create.user.dto";
import { PutUserDto } from "../dto/put.user.dto";

class UserService implements CRUD {
  async list(limit: number, page: number) {
    return userDao.getUsers(limit, page);
  }
  async putById(id: string, resource: PutUserDto): Promise<any> {
    return userDao.updateUserById(id, resource);
  }
  async readById(id: string) {
    return userDao.getUserById(id);
  }
  async deleteById(id: string): Promise<any> {
    return userDao.removeUserById(id);
  }
  async patchById(id: string, resource: any): Promise<any> {
    return userDao.updateUserById(id, resource);
  }
  async create(resource: CreateUserDto) {
    return userDao.addUser(resource);
  }
  async getUserByEmail(email: string) {
    return userDao.getUserByEmail(email);
  }
}
export default new UserService();

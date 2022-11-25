"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_dao_1 = __importDefault(require("../dao/user.dao"));
class UserService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUsers(limit, page);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.updateUserById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserById(id);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.removeUserById(id);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.updateUserById(id, resource);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.addUser(resource);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserByEmail(email);
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQXNDO0FBSXRDLE1BQU0sV0FBVztJQUNULElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDcEMsT0FBTyxrQkFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBQ0ssT0FBTyxDQUFDLEVBQVUsRUFBRSxRQUFvQjs7WUFDNUMsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBQ0ssUUFBUSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBQ0ssVUFBVSxDQUFDLEVBQVU7O1lBQ3pCLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBQ0ssU0FBUyxDQUFDLEVBQVUsRUFBRSxRQUFhOztZQUN2QyxPQUFPLGtCQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFDSyxNQUFNLENBQUMsUUFBdUI7O1lBQ2xDLE9BQU8sa0JBQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBQ0ssY0FBYyxDQUFDLEtBQWE7O1lBQ2hDLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0Y7QUFDRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=
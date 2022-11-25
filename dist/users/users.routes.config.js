"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UserRoutes");
    }
    configureRoutes() {
        this.app
            .route("/users")
            .get(users_controller_1.default.listUsers)
            .post(users_controller_1.default.createUser);
        /**
         * This is the middleware function that runs before any call is made to /users/:userId
         * it simply passes control to the next applicable function below using next()
         */
        this.app.param("userId", users_middleware_1.default.extractUserId);
        this.app
            .route("/users/:userId")
            .all(users_middleware_1.default.validateUserExists)
            .get(users_middleware_1.default.extractUserId, users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put("/users/:userId", [
            users_middleware_1.default.validateRequestUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch("/users/:userId", [
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLHNGQUE2RDtBQUM3RCxxRkFBNEQ7QUFDNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQ2hELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFNBQVMsQ0FBQzthQUM5QixJQUFJLENBQUMsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQzs7O1dBR0c7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsMEJBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUN2QixHQUFHLENBQUMsMEJBQWUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN2QyxHQUFHLENBQUMsMEJBQWUsQ0FBQyxhQUFhLEVBQUUsMEJBQWUsQ0FBQyxXQUFXLENBQUM7YUFDL0QsTUFBTSxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsMEJBQWUsQ0FBQyw2QkFBNkI7WUFDN0MsMEJBQWUsQ0FBQyxpQ0FBaUM7WUFDakQsMEJBQWUsQ0FBQyxHQUFHO1NBQ3BCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQy9CLDBCQUFlLENBQUMsa0JBQWtCO1lBQ2xDLDBCQUFlLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBL0JELGdDQStCQyJ9
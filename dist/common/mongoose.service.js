"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const mongoose_1 = __importDefault(require("mongoose"));
const log = (0, debug_1.default)('app:mongoose-service');
class MongooseService {
    constructor() {
        this.count = 0;
        this.mongooseOptions = {
            strictPopulate: false,
        };
        this.connectWithRetry = () => {
            log('Attempting MongoDB connection (will retry if needed)');
            mongoose_1.default
                .connect('mongodb://localhost:27017/myapp')
                .then(() => {
                log('MongoDb is connected');
            })
                .catch((err) => {
                const retrySeconds = 5;
                log('MongoDb connection unsuccessful ');
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9tb25nb29zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHdEQUFnQztBQUNoQyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLGVBQWU7SUFLbkI7UUFKUSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysb0JBQWUsR0FBRztZQUN4QixjQUFjLEVBQUUsS0FBSztTQUN0QixDQUFDO1FBT0YscUJBQWdCLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLEdBQUcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQzVELGtCQUFRO2lCQUNMLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztpQkFDMUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztnQkFDeEMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUM7UUFqQkEsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELFdBQVc7UUFDVCxPQUFPLGtCQUFRLENBQUM7SUFDbEIsQ0FBQztDQWNGO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9
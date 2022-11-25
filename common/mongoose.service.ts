import debug from 'debug';
import mongoose from 'mongoose';
const log: debug.IDebugger = debug('app:mongoose-service');
class MongooseService {
  private count = 0;
  private mongooseOptions = {
    strictPopulate: false,
  };
  constructor() {
    this.connectWithRetry();
  }
  getMongoose() {
    return mongoose;
  }
  connectWithRetry = () => {
    log('Attempting MongoDB connection (will retry if needed)');
    mongoose
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
}
export default new MongooseService();

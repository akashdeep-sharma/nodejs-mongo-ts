import debug from 'debug';
import shortid from 'shortid';
import mongooseService from '../../common/mongoose.service';
import { CreateUserDto } from '../dto/create.user.dto';
import { PatchUserDto } from '../dto/patch.user.dto';
import { PutUserDto } from '../dto/put.user.dto';
/**
 * Using the singleton pattern This class will provide the same instance and same users array when we import it in other
 * files
 */
const log: debug.IDebugger = debug('app:in memory use');
class UserDao {
  users: Array<CreateUserDto> = [];

  constructor() {
    log('Create new instance of UserDao');
  }
  Schema = mongooseService.getMongoose().Schema;
  userSchema = new this.Schema(
    {
      _id: String,
      email: String,
      password: { type: String, select: false },
      firstName: String,
      lastName: String,
      permissionFlags: Number,
    },
    { id: false }
  );
  User = mongooseService.getMongoose().model('Users', this.userSchema);
  /**
   * This function adds the new user
   * @param user Object of the user that will be added
   * @returns
   */
  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...userFields,
      permissionFlags: 1,
    });
    await user.save();
    return userId;
  }
  /**
   *
   * @returns list of all the users
   */
  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
  /**
   *
   * @param userId UserId for which you want the user
   * @returns
   */
  async getUserById(userId: string) {
    return this.User.findById({ _id: userId }).populate('User').exec();
  }
  async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    const existingUSer = await this.User.findOneAndUpdate(
      { _id: userId },
      {
        $set: userFields,
      },
      {
        new: true,
      }
    ).exec();
    return existingUSer;
  }

  async removeUserById(userId: string) {
    return this.User.deleteOne({ _id: userId }).exec();
  }
  async getUserByEmail(email: string) {
    return this.User.findOne({
      email: email,
    }).exec();
  }
}

export default new UserDao();

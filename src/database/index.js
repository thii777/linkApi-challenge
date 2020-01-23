import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    mongoose.connect(
      'mongodb+srv://linkapi:linkapi@cluster0-3huiz.mongodb.net/challenge-linkapi?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default new Database();

const {Schema, model} = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: true //tf
    },
    thoughts: {
      _id: [thoughtSchema],
    },
    friends: {
      _id: [userSchema],
    }
    toJSON: {
      getters: true,
      },
  }
);

app.get('/Thought', (req, res) => {
  Thought.aggregate(
    [
      {
        _id: thought,
      },
    ],
    (err,result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );

});

app.get('/User', (req, res) => {
  User.aggregate(
    [
      {
        _id: user,
      },
    ],
    (err,result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );

})






const User = model('user', userSchema);

module.exports = User;

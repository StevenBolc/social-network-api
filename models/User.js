const { Schema, model } = require('mongoose');
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
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
     // _id: [thoughtSchema],
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
      //_id: [userSchema],
    }],
    toJSON: {
     // getters: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;








// app.get('/Thought', (req, res) => {
//   Thought.aggregate(
//     [
//       {
//         _id: thought,
//       },
//     ],
//     (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     }
//   );

// });

// app.get('/User', (req, res) => {
//   User.aggregate(
//     [
//       {
//         _id: user,
//       },
//     ],
//     (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     }
//   );

// })